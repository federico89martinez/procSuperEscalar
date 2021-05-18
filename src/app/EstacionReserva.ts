import { Instruccion } from './Instruccion'


export class EstacionReserva{

    //creamos el numero de estacion de reserva que va a tener + el arreglo de instrucciones
    private numeroEstacionReserva: number;
    instruccion = new Array<Instruccion>();


    constructor(numeroEstacionReserva){
        this.numeroEstacionReserva = numeroEstacionReserva;
    }

    getInstruccion(){
        return this.instruccion.shift();
    } 

    public addInstruccion(i:Instruccion){
        this.instruccion.push(i);
    }


 
    setNumeroEstacionReserva(valor: number){
        this.numeroEstacionReserva = valor;
    }

    getNumeroEstacionReserva(){
        return this.numeroEstacionReserva;
    }

    removerInstruccion(i:number){
        this.instruccion.splice(i,1);
    }

    public isOcupado(){
        if (this.instruccion.length == this.numeroEstacionReserva){
            return true;
        }else
            return false;
    }


}