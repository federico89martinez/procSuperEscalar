import { Instruccion } from './Instruccion'

export class ColumnaRob{

    private instruccion: Instruccion;
    private otraInstruccion: Instruccion;
    private ocupado: boolean;


    constructor(){
        this.instruccion = null;
        this.ocupado = false;
    }

    public addInstruccion(instruccion:Instruccion ){
        this.instruccion = instruccion;
    }

    public addOtraInstruccion(instruccion:Instruccion){
        this.otraInstruccion= instruccion;
    }

    public setInstruccion(){
        this.instruccion=null;
    }

    public getInstruccion(){
        return this.instruccion;
    }

    public getOtraInstruccion(){
        return this.otraInstruccion;
    }

    public setOtraInstruccion(){
        return this.otraInstruccion=null;
    }

}