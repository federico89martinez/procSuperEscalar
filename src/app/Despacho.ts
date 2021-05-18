import { Instruccion } from './Instruccion'


export class Despacho {
    
    //cargamos el grado en 0 y creamos un arreglo en la instruccion
    private grado=0;
    instruccion = new Array<Instruccion>();


    constructor(grado){
        this.grado=grado;
    }



    public isOcupado(){
        if (this.instruccion.length == this.grado)
            return true;
        else
            return false;
    }


    public addInstruccion(i:Instruccion){
        this.instruccion.push(i);
    }

    public getSize(){
        return this.instruccion.length;
    }


    getInstruccion(){
        return this.instruccion.shift();
    }

    getGrado(){
        return this.grado;
    }

}