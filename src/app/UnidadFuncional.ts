import { Instruccion } from './Instruccion';

export class UnidadFuncional{

    private tipo:String;
    private ocupado:boolean;
    private instruccion:Instruccion;
 

    constructor(tipo: String){
        this.tipo = tipo;
        this.ocupado=false;
        this.instruccion=null;
    }

    public isOcupado(){
        return this.ocupado;
    }

    public setOcupado(ocupado:boolean){
        this.ocupado=ocupado;  
    }

    public getTipo(){
        return this.tipo;
    }

    public addInstruccion(i:Instruccion){
        this.instruccion = i;
    }

     getInstruccion(){
        return this.instruccion;
    }  
    removerInstruccion(){
        this.instruccion = null;
    }
}