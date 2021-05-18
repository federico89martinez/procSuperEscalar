export class Instruccion {
    private id: string;
    private tipo: string;
    private dst: string;
    private op1: string;
    private op2: string;
    private ciclos: number;
    private estado: string;
    dependencias:String[] = new Array;
    private tipoUF: string;


    constructor(id:string, tipo:string, dst:string,op1:string,op2:string,tipoUF:string){
        this.id=id;
        this.tipo=tipo;
        this.dst=dst;
        this.op1=op1;
        this.op2=op2;
        this.tipoUF=tipoUF;

    }

    public addDependecia(i:String){
        this.dependencias.push(i)
      }
    public setId(id:string){
        this.id=id;
    }

    public getId(){
        return this.id;
    }

    public setTipo(tipo:string){
        this.tipo=tipo;
    }

    public getTipo(){
        return this.tipo;
    }

    public setDst(dst:string){
        this.dst = dst;
    }

    public getDst(){
        return this.dst;
    }

    public setOp1(op1:string){
        this.op1 = op1;
    }

    public getOp1(){
        return this.op1;
    }

    public setOp2(op2:string){
        this.op2 = op2;
    }

    public getOp2(){
        return this.op2;
    }

    public setCiclos(ciclos:number){
        this.ciclos = ciclos;
    }

    public getCiclos(){
        return this.ciclos;
    }

    public setEstados(estado:string){
        this.estado = estado;
    }

    public getEstado(){
        return this.estado;
    }

    public setTipoUF(tipoUF:string){
        this.tipoUF = tipoUF;
    }

    public getTipoUF(){
        return this.tipoUF;
    }

    descontarCiclos(){
        this.ciclos--;
    }


    public existeDependencia(inst:Instruccion){
        //pregunto si en el arreglo de depencias esta incluido la instruccion
        return (this.dependencias.includes(inst.id));
      }
}