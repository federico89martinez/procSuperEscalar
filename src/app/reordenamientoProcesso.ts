import { Instruccion } from './Instruccion';
import { ColumnaRob } from './ColumnaRob';
import { BrowserStack } from 'protractor/built/driverProviders';


export class reordenamientoProcesso{


    instruccion =  new Array<Instruccion>();
    private tamanio: number;
    private numeroGrado: number;
    private columnaRob = new Array<ColumnaRob>();
    
    private instruccionesCargadas: Array <Instruccion>;


    constructor(tamanioRob,numeroGrado,instrucciones: Array<Instruccion>) {
        this.tamanio=tamanioRob;
        this.numeroGrado=numeroGrado;
        this.instruccionesCargadas = instrucciones.slice(0);
        for(let i = 0; i < tamanioRob; i++)
            this.columnaRob.push(new ColumnaRob);
    }



    public addInstruccion (instruccion:Instruccion){
        let terminar = false;
        for (let i = 0; i < this.columnaRob.length && !terminar; i++) {
            if (this.columnaRob[i].getInstruccion() == null){
                this.columnaRob[i].addInstruccion(instruccion);
                //probar con break
                terminar = true;
            }
        }
    }

    public intruccionesCompletas(aux) {
        let i = 0;
        //tamanio del rob
        while (i<this.tamanio){

            if (this.columnaRob[i].getInstruccion() != null )
                if ( aux[0].getId() == this.columnaRob[i].getInstruccion().getId() &&
                            this.columnaRob[i].getInstruccion().getEstado() == "F" )
                        return i;
            
            i++;
            
                    
        }
        return null;
    }   

    /*

    Este metodo se encarga de que una vez finalizadas las instrucciones sacarlas del arreglo de instrucciones cargadas

    */

    public instruccionesFinalizadas(){
            let count = 0; let i = 0;
            //tamanio del rob y la cantidad de despachos
            while ((count < this.numeroGrado) && (i<this.tamanio)){
             if (this.columnaRob[i].getInstruccion()!= null )
                    if (this.columnaRob[i].getInstruccion().getId() == this.instruccionesCargadas[0].getId() &&
                            this.columnaRob[i].getInstruccion().getEstado() == "F" )
                    {  
                    //analizar con 2 arreglos de instrucciones
                    if(this.columnaRob[i].getOtraInstruccion() == null){ 
                        //seteamos en vacio la instruccion
                        this.columnaRob[i].setInstruccion();
                        i=-1;
                       // break;
                    }
                    else{
                        this.columnaRob[i].addInstruccion(this.columnaRob[i].getOtraInstruccion())
                        this.columnaRob[i].setOtraInstruccion();
                    }      
                    //retiramos la instruccion cargadas del arreglo          
                    this.instruccionesCargadas.shift();
                    //i=-1
                    count++;
                    }
            i++;
            }
        }

   

   

    //--------- instrucciones si estan ocupadas y completas--------------
    public isOcupado(){
        for(let i = 0; i< this.columnaRob.length; i++)
            if (this.columnaRob[i].getInstruccion() == null)
                return false
        return true;
    }
     
    public isCompletada() {
        if (this.instruccionesCargadas.length == 0)
            return true;
        return false;
    }

    ///  -------------------- getters and setters-----------------

    public getInstruccionesCargadas(){
        return this.instruccionesCargadas.slice(0);
    }
  
    public getColumbaRob(){
        return this.columnaRob;
    }
    public getSize(){
        return this.tamanio;
    }

  


}