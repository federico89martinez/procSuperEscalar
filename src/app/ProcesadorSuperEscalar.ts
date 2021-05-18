import { Despacho } from './Despacho';
import { EstacionReserva } from './EstacionReserva';
import { UnidadFuncional } from './UnidadFuncional';
import { reordenamientoProcesso } from './reordenamientoProcesso';
import { Instruccion } from './Instruccion';


export class ProcesadorSuperEscalar{
    private despacho:Despacho
    private unidadFuncional: Array<UnidadFuncional>;
    private estacionReserva: EstacionReserva;
    private rob: reordenamientoProcesso;
    
    private instruccion: Array<Instruccion>;
    
    private ciclo = -1;


    constructor(instrucciones:Array<Instruccion>,cantidadDespacho,cantidadER,robSize){
        this.instruccion = instrucciones.slice(0);
        //Cargamos las dependencias una vez que se lleno la tabla de instrucciones
        this.dependeciasRAW();
        //despacho + er + uf + rob
        this.despacho = new Despacho(cantidadDespacho);
        this.estacionReserva = new EstacionReserva(cantidadER);
        this.unidadFuncional=new Array<UnidadFuncional>();
        this.rob = new reordenamientoProcesso(robSize,cantidadDespacho,instrucciones);
    }

    public dependeciasRAW(){
        let entro = false;
        //Se hace una pasada con la primera instruccion con todas y luego con otra y asi sucesivamente
        for (let i = 0; i < this.instruccion.length -1; i++) {
            
          if(this.instruccion[i].getTipo() != "STD")

            for (let j = i+1; j < this.instruccion.length && !entro; j++) {

              if(this.instruccion[j].getTipo() != "STD"){

                  //verificar este if
                  if (this.instruccion[i].getDst() == this.instruccion[j].getOp1() 
                        || this.instruccion[i].getDst() == this.instruccion[j].getOp2() ){

                      this.instruccion[i].addDependecia(this.instruccion[j].getId());
                  }

                  if(this.instruccion[i].getDst() == this.instruccion[j].getDst()){

                          entro=true;
                         // break;????

                  }
                  if(this.instruccion[j].getTipo()=="LDD")
                  //si es LDD
                  if (this.instruccion[j].getOp1() == this.instruccion[i].getDst() 
                            || this.instruccion[i].getDst() == this.instruccion[j].getOp2() ) { 
                      
                            this.instruccion[i].addDependecia(this.instruccion[j].getId());
                  }

              }
              else{
                //si es STD 
                if(this.instruccion[j].getDst() == this.instruccion[i].getDst() 
                            || this.instruccion[i].getDst() == this.instruccion[j].getOp1()) {     

                                this.instruccion[i].addDependecia(this.instruccion[j].getId());             
                        }
              }


          }
          entro = false;
        }
      }
 

      public siguienteCiclo(){ 

        //Primero corroboramos para ver las instrucciones que se completaron o finalizaron
        this.rob.instruccionesFinalizadas();       
      
        
        //Decrementamos los ciclos
        for(let i = 0; i<this.unidadFuncional.length; i++){
            if (this.unidadFuncional[i].getInstruccion()!= null 
                    && this.unidadFuncional[i].getInstruccion().getCiclos() != 0){

                this.unidadFuncional[i].getInstruccion().descontarCiclos();
            }
        }

       
  
         //Actualizamos a la estacion de reserva y al rob
         this.actualizamosERyROB();
         

        //Corroboramos remover las instrucciones de la unidad funcional
        this.removerUF();


        //Actualizo la unidad funcional
        this.actualizarUF();


        //Actualizamos de nuevo las instrucciones de la er y rob
        this.actualizamosERyROB();


      
        let tamanioDespacho = this.despacho.getSize();
        //Guardo en una variable auxiliar las instrucciones
        let auxiliar = this.rob.getInstruccionesCargadas();

          
        for(let i = 0; i < tamanioDespacho;i++){                  
            
            let indice = this.rob.intruccionesCompletas(auxiliar);   
             //Luego se agrega una instruccion finalizada a la er y rob
            if (!this.estacionReserva.isOcupado() &&  indice != -1){
                let inst = this.despacho.getInstruccion();
                //Eleminamos la instruccion de auxiliar
                auxiliar.shift()
                inst.setEstados("I");
                
                this.estacionReserva.addInstruccion(inst);

                this.rob.getColumbaRob()[indice].addOtraInstruccion(inst);
            }
        }
             
        
        //Actualizo la unidad funcional
        this.actualizarUF();


        //Actualizo el despacho
        for(let i = 0; i < this.despacho.getGrado() && this.instruccion.length != 0 && !this.despacho.isOcupado(); i++){
            //Agregamos la istruccion al despacho y luego la sacamos de el arreglo de isntrucciones
            this.despacho.addInstruccion(this.instruccion.shift());
        }
        this.ciclo++;
    }


    private actualizamosERyROB(){
        let i = 0; 
        while(i < this.despacho.getSize()){
            if (!this.estacionReserva.isOcupado() && !this.rob.isOcupado()){
                let instruccion = this.despacho.getInstruccion();
                instruccion.setEstados("I");
                //Mientras que no este ocupado la er y el rob, le agregamos la instruccion a cada componente
                this.estacionReserva.addInstruccion(instruccion);
                this.rob.addInstruccion(instruccion);
            }
            else
                i++;
        }
    }



    private removerUF(){

        for(let i = 0 ; i<this.unidadFuncional.length; i++){      

            if(this.unidadFuncional[i].getInstruccion() != null){

                if(this.unidadFuncional[i].getInstruccion().getCiclos()==0){

                    this.unidadFuncional[i].getInstruccion().setEstados("F");
                    //Dejo en null la instruccion
                    this.unidadFuncional[i].removerInstruccion();
                    //La seteo como ocupada
                    this.unidadFuncional[i].setOcupado(false);

                }
            }
        }
    }

    private actualizarUF(){
        let i=0;

        while( i < this.estacionReserva.instruccion.length){  

            let indice = this.obtenerUF(this.estacionReserva.instruccion[i]);

            if (indice != -1){
                
                let inst = this.estacionReserva.instruccion[i];
                //Corroboro que no haya una dependencia para que no entre a la uf
                if (!this.dependenciaER(inst) 
                        && !this.dependencia(inst)){
                                         
                    this.unidadFuncional[indice].addInstruccion(inst);
                    
                    this.unidadFuncional[indice].setOcupado(true);
                    inst.setEstados("X");
                    this.estacionReserva.removerInstruccion(i);
                }
                else{
                    i++
                }
            }else{
            i++;
            }
        }
    }
    private obtenerUF(inst:Instruccion) {    

        //Obtenemos la instruccion en la uf
        for(let i = 0; i< this.unidadFuncional.length;i++){

            if(((this.unidadFuncional[i].getTipo() == inst.getTipoUF()) && (!this.unidadFuncional[i].isOcupado()))){
                return i;
            }else if ((this.unidadFuncional[i].getTipo() == "MULTIFUNCT") && (!this.unidadFuncional[i].isOcupado())){
                return i;
            }
        }
        return -1;
     }

     private dependencia(inst: Instruccion) {
        for(let i = 0; i < this.unidadFuncional.length;i++){

            if(this.unidadFuncional[i].getInstruccion() != null){

                if(this.unidadFuncional[i].getInstruccion().existeDependencia(inst))
                    return true;

            }
        }
        return false;
    }

    private dependenciaER(inst: Instruccion) {
        for(let i = 0; i < this.estacionReserva.instruccion.length;i++){

            if(this.estacionReserva.instruccion[i].getId() != inst.getId()){

                if(this.estacionReserva.instruccion[i].existeDependencia(inst))
                    return true;
            }

        }
        return false;
    }


    public agregarUF(cantidadMultiFuncion,cantidadAritmetica,cantidadMemoria){
        
        let i = 0
        let j = 0
        let m = 0
        //agregamos a la UF la cantidad de UF seteadas
        while ( i < cantidadMultiFuncion ){
            this.unidadFuncional.push(new UnidadFuncional("MULTIFUNCT"));
            i++;
        }
        while ( j < cantidadAritmetica ){
            this.unidadFuncional.push(new UnidadFuncional("ARITMETICA"));
            j++;
        }

        while ( m < cantidadMemoria){
            this.unidadFuncional.push(new UnidadFuncional("MEMORIA"));
            m++;    
        }
      }



    // ----------------- GETTERS AND SETTERS ---------------------

    public termino(){
        return this.rob.isCompletada();
    } 

    public getDespacho(){
        return this.despacho;
    }
    public getER(){
        return this.estacionReserva;
    }

    public getUF(){
        return this.unidadFuncional;
    }

    public getROB(){
        return this.rob;
    }

    public getCiclo(){
        return this.ciclo;
    }


}
