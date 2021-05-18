import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { InstantiateExpr } from '@angular/compiler';
import { Instru } from 'src/app/models/instruccion';
import { In } from 'src/app/models/instruccion';
import { Ins } from 'src/app/models/instruccion';
import { isUndefined } from 'util';


import { Instruccion } from './Instruccion';
import { ProcesadorSuperEscalar } from './ProcesadorSuperEscalar';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  title = 'procSuperEscalar';
  // netImage:any = "../assets/images/Seleccion_044.png";
  imageAlt = 'Seleccion_044.png'
  imageSrc = 'assets/images/Seleccion_044.png'


  // VARIABLES 
  i : number = 0;
  ii: number = 1;
  ss:string;
  s:string;
  ins: string;

  add: string;
  subd: string;
  muld: string;
  div: string;
  std: string;
  ldd: string;
  //inicilizamos la cantidad de despacho y la er
  cantidadDespacho: number = 1;
  cantidadER : number = 1;
  cantidadUF : number = 1;

  dst: string;
  op1:string;
  op2: string;

  r0;r1;r2;r3;r4;r5;r6;r7;r8;r9;r10;r11;r12;r13;r14;r15;
  r16;r17;r18;r19;r20;r21;r22;r23;r24;r25;r26;r27;r28;r29;r30: string;

  

  c: number;
  ciclos:number=-1;

  instruccion : any  [] = new Array();
  instrucciones2 : any [] = new Array();
  instrucciones3 : any [] = new Array();
  instrucciones4 : any [] = new Array();
  instrucciones5 : any [] = new Array();
  
  robb : any [] = new Array();

  
   public valido: boolean = false;
   public validar1: boolean = false;

  
  
  instru : Instru ={
    s: '',
    i: '',
    d: '',
    op1: '',
    op2: '',
    
  };


  instrucciones: Ins = {
    ss:'',
    c:0

  };

  rob:  In = {
    d1:'', d2: '', d3:'',  e1: '',e2: '',e3: '',e4: '',uf1: '',uf2: '',
    i1: '',s1: '',i2: '',s2: '',i3: '',s3: '',i4: '',s4: '',i5: '',s5: '',i6: '',s6: ''
  };

  Instrucciones = [
    { tipo: "ADD", 
    ciclo: 1},
    { tipo: "SUBD", 
    ciclo: 1},
    { tipo: "MULD", 
    ciclo: 1},
    { tipo: "DIV", 
    ciclo: 1},
    { tipo: "STD", 
    ciclo: 1},
    { tipo: "LDD", 
    ciclo: 1}
  ];


  sizeROB:number = 0;
  procesador:ProcesadorSuperEscalar


  cantidadMultiFuncion = 0;
  cantidadMemoria = 0;
  cantidadAritmetica = 0;
  
  filasCiclos: Array<string>;
  Despacho: Array<string>;
  EstacionReserva: Array<string>;
  UnidadFuncional: Array<string>;
  ROB: Array<string>;
  listInstrucciones = new Array<Instruccion>();
  idInstruccion = 1;
  mostrarTabla = false;
  
  constructor(){ }

  ngOnInit(){
  }

  validar(){
    this.valido=true;
    
 };

 validar11(){
  this.validar1=true;
 }

 agregarCiclos(){
   this.validar1=false;
   alert('se agregaron los ciclos de reloj')
 }

 agregarAdd(add){
   this.ciclosAdd=add;
 }

 agregarSub(sub){
   this.ciclosSubd=sub;
 }
 agregarMul(mul){
   this.ciclosMuld=mul;
 }

 agregarDiv(div){
   this.ciclosDiv=div;
 }

 agregarStd(std){
   this.ciclosStd=std;
 }

 agregarLdd(ldd){
   this.ciclosLdd=ldd;
 }

 buttonDisabled: boolean = false;
 buttonEjecutar: boolean = true;
 op2Disabled: boolean = false;
 verTabla: boolean = false;

 guardar(){
  //alert('Se guardaron los datos');
  this.buttonDisabled = true;
  this.buttonEjecutar = false;
   if(this.cantidadMultiFuncion == 0 && this.cantidadAritmetica == 0 && this.cantidadMemoria == 0){
     
    alert('Se precisa seleccionar al menos una unidad funcional');
    this.mostrarTabla = false;

  }else this.mostrarTabla = true;


 }

 editar(){
  this.buttonDisabled = false;
  this.buttonEjecutar = true;
 }

  instruccionFede: string;
 

 obtenerInstru(ins){
  if(ins == "STD") this.op2Disabled = true;
  if(ins == "LDD") this.op2Disabled = true;
  if(ins == "ADD") this.op2Disabled = false;
  if(ins == "SUBD") this.op2Disabled = false;
  if(ins == "MULD") this.op2Disabled = false;
  if(ins == "DIV") this.op2Disabled = false;
 }



  
  agregarInst(ins){
    if( ins == 0 ) this.ins = "ADD";
    if( ins == 1) this.ins = "SUBD";
    if( ins == 2) this.ins = "MULD";
    if( ins == 3) this.ins = "DIV";
    if( ins == 4) this.ins = "STD";
    if( ins == 5) this.ins = "LDD";
    this.obtenerInstru(this.ins); 
  }

  

  agregarDst(dst){
    if(dst == 0) this.dst= "r0";
    if(dst == 1) this.dst= "r1"; 
    if(dst == 2) this.dst= "r2";
    if(dst == 3) this.dst= "r3";
    if(dst == 4) this.dst= "r4";
    if(dst == 5) this.dst= "r5";
    if(dst == 6) this.dst= "r6";
    if(dst == 7) this.dst= "r7";
    if(dst == 8) this.dst= "r8"; 
    if(dst == 9) this.dst= "r9";
    if(dst == 10) this.dst= "r10";
    if(dst == 11) this.dst= "r11";
    if(dst == 12) this.dst= "r12";
    if(dst == 13) this.dst= "r13";
    if(dst == 14) this.dst= "r14";
    if(dst == 15) this.dst= "r15"; 
    if(dst == 16) this.dst= "r16";
    if(dst == 17) this.dst= "r17";
    if(dst == 18) this.dst= "r18";
    if(dst == 19) this.dst= "r19";
    if(dst == 20) this.dst= "r20";
    if(dst == 21) this.dst= "r21";
    if(dst == 22) this.dst= "r22"; 
    if(dst == 23) this.dst= "r23";
    if(dst == 24) this.dst= "r24";
    if(dst == 25) this.dst= "r25";
    if(dst == 26) this.dst= "r26";
    if(dst == 27) this.dst= "r27";
    if(dst == 28) this.dst= "r28";
    if(dst == 29) this.dst= "r29";
    if(dst == 30) this.dst= "r30";
     
  }

  agregarOp1(op1){
    if(op1 == 0) this.op1= "r0";
    if(op1 == 1) this.op1= "r1"; 
    if(op1 == 2) this.op1= "r2";
    if(op1 == 3) this.op1= "r3";
    if(op1 == 4) this.op1= "r4";
    if(op1 == 5) this.op1= "r5";
    if(op1 == 6) this.op1= "r6";
    if(op1 == 7) this.op1= "r7";
    if(op1 == 8) this.op1= "r8"; 
    if(op1 == 9) this.op1= "r9";
    if(op1 == 10) this.op1= "r10";
    if(op1 == 11) this.op1= "r11";
    if(op1 == 12) this.op1= "r12";
    if(op1 == 13) this.op1= "r13";
    if(op1 == 14) this.op1= "r14";
    if(op1 == 15) this.op1= "r15"; 
    if(op1 == 16) this.op1= "r16";
    if(op1 == 17) this.op1= "r17";
    if(op1 == 18) this.op1= "r18";
    if(op1 == 19) this.op1= "r19";
    if(op1 == 20) this.op1= "r20";
    if(op1 == 21) this.op1= "r21";
    if(op1 == 22) this.op1= "r22"; 
    if(op1 == 23) this.op1= "r23";
    if(op1 == 24) this.op1= "r24";
    if(op1 == 25) this.op1= "r25";
    if(op1 == 26) this.op1= "r26";
    if(op1 == 27) this.op1= "r27";
    if(op1 == 28) this.op1= "r28";
    if(op1 == 29) this.op1= "r29";
    if(op1 == 30) this.op1= "r30";

  }

  agregarOp2(op2){
    if(op2 == -1) this.op2= "--";
    if(op2 == 0) this.op2= "r0";
    if(op2 == 1) this.op2= "r1"; 
    if(op2 == 2) this.op2= "r2";
    if(op2 == 3) this.op2= "r3";
    if(op2 == 4) this.op2= "r4";
    if(op2 == 5) this.op2= "r5";
    if(op2 == 6) this.op2= "r6";
    if(op2 == 7) this.op2= "r7";
    if(op2 == 8) this.op2= "r8"; 
    if(op2 == 9) this.op2= "r9";
    if(op2 == 10) this.op2= "r10";
    if(op2 == 11) this.op2= "r11";
    if(op2 == 12) this.op2= "r12";
    if(op2 == 13) this.op2= "r13";
    if(op2 == 14) this.op2= "r14";
    if(op2 == 15) this.op2= "r15"; 
    if(op2 == 16) this.op2= "r16";
    if(op2 == 17) this.op2= "r17";
    if(op2 == 18) this.op2= "r18";
    if(op2 == 19) this.op2= "r19";
    if(op2 == 20) this.op2= "r20";
    if(op2 == 21) this.op2= "r21";
    if(op2 == 22) this.op2= "r22"; 
    if(op2 == 23) this.op2= "r23";
    if(op2 == 24) this.op2= "r24";
    if(op2 == 25) this.op2= "r25";
    if(op2 == 26) this.op2= "r26";
    if(op2 == 27) this.op2= "r27";
    if(op2 == 28) this.op2= "r28";
    if(op2 == 29) this.op2= "r29";
    if(op2 == 30) this.op2= "r30";


  }

  deleteIns(ins){
    for (let i=0; i< this.instruccion.length; i++){
      if(ins == this.instruccion[i]){
        this.instruccion.splice(i,1);
      }
      
    }
  }

  generarS(){
    this.s = "S" + this.ii;
    this.ii++;
   }

    generarInsCicl(){
    this.instrucciones.ss = this.s;
    if (this.ins == "ADD"){
      this.instrucciones.c = this.ciclosAdd;
    }
    if (this.ins == "SUBD"){
      this.instrucciones.c = this.ciclosSubd;
    }
    if (this.ins == "MULD"){
      this.instrucciones.c = this.ciclosMuld;
    }
    if (this.ins == "DIV"){
      this.instrucciones.c = this.ciclosDiv;
    }
    if (this.ins == "STD"){
      this.instrucciones.c = this.ciclosStd;
    }
    if (this.ins == "LDD"){
      this.instrucciones.c = this.ciclosLdd;
    }
    
    this.instrucciones2.push(this.instrucciones);
   } 

  mostrarIns(){
    
     //seteamos el objeto
    this.instru = new Object;
    this.instrucciones = new Object;

    this.generarS();
    this.generarInsCicl();
    
    this.instru.s=this.s;
    this.instru.i=this.ins;
    this.instru.d=this.dst;
    this.instru.op1=this.op1;
    this.instru.op2=this.op2;

    //ingresamos al arreglo el objeto
    this.instruccion.push(this.instru);
    this.valido=false;   
    //this.listInstrucciones.push(this.instru);
    this.idInstruccion = this.listInstrucciones.length + 1;
    //let instNueva = new  Instruccion("S" + this.idInstruccion,this.ins, this.instru.d,this.instru.op1,this.instru.op2,"MULTIFUNCT");
    if(this.ins == "ADD"){               
      let instruccionIngresar = new  Instruccion("S" + this.idInstruccion,this.ins, this.instru.d,this.instru.op1,this.instru.op2,"ARITMETICA");
      this.listInstrucciones.push(instruccionIngresar);
        for (const tipoInstruccion of this.Instrucciones){
          //seteamos los ciclos a la instruccion
          if(tipoInstruccion.tipo == "ADD"){
          tipoInstruccion.ciclo = this.ciclosAdd;
          }
        }
    }else if (this.ins == "SUBD"){
      let instruccionIngresar = new  Instruccion("S" + this.idInstruccion,this.ins, this.instru.d,this.instru.op1,this.instru.op2,"ARITMETICA");
      this.listInstrucciones.push(instruccionIngresar);
        for (let tipoInstruccion of this.Instrucciones){
          //seteamos los ciclos a la instruccion
          if(tipoInstruccion.tipo == "SUBD"){
          tipoInstruccion.ciclo = this.ciclosSubd;
          }
        }
    }else if (this.ins == "MULD"){
      let instruccionIngresar = new  Instruccion("S" + this.idInstruccion,this.ins, this.instru.d,this.instru.op1,this.instru.op2,"ARITMETICA");
      this.listInstrucciones.push(instruccionIngresar);
      for (let tipoInstruccion of this.Instrucciones){
        //seteamos los ciclos a la instruccion
        if(tipoInstruccion.tipo == "MULD")
          tipoInstruccion.ciclo = this.ciclosMuld;
      }
    }else if (this.ins == "DIV"){
      let instruccionIngresar = new  Instruccion("S" + this.idInstruccion,this.ins, this.instru.d,this.instru.op1,this.instru.op2,"ARITMETICA");
      this.listInstrucciones.push(instruccionIngresar);
      for (let tipoInstruccion of this.Instrucciones){
        //seteamos los ciclos a la instruccion
        if(tipoInstruccion.tipo == "DIV")
        tipoInstruccion.ciclo = this.ciclosDiv;
      }
    }else if (this.ins == "STD"){
      let instruccionIngresar = new  Instruccion("S" + this.idInstruccion,this.ins, this.instru.d,this.instru.op1,this.instru.op2,"MEMORIA");
      this.listInstrucciones.push(instruccionIngresar);
      for (let tipoInstruccion of this.Instrucciones){
        //seteamos los ciclos a la instruccion
        if(tipoInstruccion.tipo == "STD")
        tipoInstruccion.ciclo = this.ciclosStd;
      }
     }else if (this.ins == "LDD"){
      let instruccionIngresar = new  Instruccion("S" + this.idInstruccion,this.ins, this.instru.d,this.instru.op1,this.instru.op2,"MEMORIA");
      this.listInstrucciones.push(instruccionIngresar);
      for (let tipoInstruccion of this.Instrucciones){
        //seteamos los ciclos a la instruccion
        if(tipoInstruccion.tipo == "LDD")
        tipoInstruccion.ciclo = this.ciclosLdd;
      }
     }    
    //let instNueva = new  Instruccion("S" + this.idInstruccion,"ADD", "DST","OP1","","MULTIFUNCT");
    
  }
  
  guardarCiclos(){
    this.saveCiclos();
  }
  

  ///////////////////////////////////////ROB///////////////////////////////

  ins1ss: string = ''; ins1c: number = 0;
  ins2ss: string = '';ins2c:number = 0;
  ins3ss: string = '';ins3c:number = 0;
  ins4ss: string = '';ins4c:number = 0;
  ins5ss: string = '';ins5c:number = 0;
  ins6ss: string = '';ins6c:number = 0;
  ins7ss: string = '';ins7c:number = 0;
  ins8ss: string = '';ins8c:number = 0;
  ins9ss: string = '';ins9c:number = 0;

  v : boolean = true;
  v1: boolean = true;
  v2: boolean = true;
  v3: boolean = true;
  v4: boolean = true;


  //Inicializamos los ciclos de cada instruccion
  ciclosAdd: number = 1;
  ciclosSubd: number = 1;
  ciclosMuld: number = 1;
  ciclosDiv: number = 1;
  ciclosStd: number = 1;
  ciclosLdd: number = 1;

  agregarDespacho1(){
 
    //agregamos en el primer ciclo las intrucciones dependiendo de la cantidad de despachos
    
         
     //ins1ss es la isntruccion y ins1c es la cantidad de ciclos que tiene
     
     if(this.cantidadDespacho == 1 ){
           if(this.ciclos == -1){
            if(isUndefined(this.rob.d1) && this.instrucciones2.length!= 0 ){
                this.ins1ss=this.instrucciones2[this.i].ss;
                this.ins1c =this.instrucciones2[this.i].c;
                this.instrucciones2.splice(this.i,1);
                this.rob.d1=this.ins1ss;   
                this.ciclos++;         
            }
          }
            //if(this.ciclos > 0 && this.ciclos < 2){
              if(isUndefined(this.rob.d1) && this.instrucciones2.length!= 0 ){
                if(this.ins2ss == ""){
                  this.ins2ss=this.instrucciones2[this.i].ss;
                  this.ins2c=this.instrucciones2[this.i].c;
                  this.instrucciones2.splice(this.i,1);
                  this.rob.d1=this.ins2ss;
                }else if(this.ins3ss == ''){
                  this.ins3ss=this.instrucciones2[this.i].ss;
                  this.ins3c =this.instrucciones2[this.i].c;
                  this.instrucciones2.splice(this.i,1);
                  this.rob.d1=this.ins3ss; 

                }else if (this.ins4ss == ''){
                  this.ins4ss=this.instrucciones2[this.i].ss;
                  this.ins4c =this.instrucciones2[this.i].c;
                  this.instrucciones2.splice(this.i,1);
                  this.rob.d1=this.ins4ss; 
                }
                else if (this.ins5ss == ''){
                  this.ins5ss=this.instrucciones2[this.i].ss;
                  this.ins5c =this.instrucciones2[this.i].c;
                  this.instrucciones2.splice(this.i,1);
                  this.rob.d1=this.ins5ss; 
                }else if (this.ins6ss == ''){
                  this.ins6ss=this.instrucciones2[this.i].ss;
                  this.ins6c =this.instrucciones2[this.i].c;
                  this.instrucciones2.splice(this.i,1);
                  this.rob.d1=this.ins6ss; 
                }
                else if (this.ins7ss == ''){
                  this.ins7ss=this.instrucciones2[this.i].ss;
                  this.ins7c =this.instrucciones2[this.i].c;
                  this.instrucciones2.splice(this.i,1);
                  this.rob.d1=this.ins7ss; 
                }

            }
        }
         
 }
  agregarDespacho2(){
   if(this.cantidadDespacho == 2){
      if(this.ciclos == -1){
        if(isUndefined(this.rob.d1) && this.instrucciones2.length!= 0 ){
            this.ins1ss=this.instrucciones2[this.i].ss;
            this.ins1c =this.instrucciones2[this.i].c;
            this.instrucciones2.splice(this.i,1);
            this.rob.d1=this.ins1ss;   
            this.ciclos++;         
        }
        if(isUndefined(this.rob.d2) && this.instrucciones2.length!= 0 ){
          this.ins2ss=this.instrucciones2[this.i].ss;
          this.ins2c =this.instrucciones2[this.i].c;
          this.instrucciones2.splice(this.i,1);
          this.rob.d2=this.ins2ss;     
       }
       }
       if(this.ciclos>0){
      if(isUndefined(this.rob.d3) && this.instrucciones2.length!= 0 ){
          this.ins3ss=this.instrucciones2[this.i].ss;
          this.ins3c =this.instrucciones2[this.i].c;
          this.instrucciones2.splice(this.i,1);
          this.rob.d1=this.ins3ss;     
      }
      if(isUndefined(this.rob.d4) && this.instrucciones2.length!= 0 ){
        this.ins4ss=this.instrucciones2[this.i].ss;
        this.ins4c =this.instrucciones2[this.i].c;
        this.instrucciones2.splice(this.i,1);
        this.rob.d2=this.ins4ss;     
        }
      }
      
    }
  }
  agregarDespacho3(){
    if(this.ciclos == -1){
      if(isUndefined(this.rob.d1) && this.instrucciones2.length!= 0 ){
          this.ins1ss=this.instrucciones2[this.i].ss;
          this.ins1c =this.instrucciones2[this.i].c;
          this.instrucciones2.splice(this.i,1);
          this.rob.d1=this.ins1ss;   
          this.ciclos++;         
      }
      if(isUndefined(this.rob.d2) && this.instrucciones2.length!= 0 ){
        this.ins2ss=this.instrucciones2[this.i].ss;
        this.ins2c =this.instrucciones2[this.i].c;
        this.instrucciones2.splice(this.i,1);
        this.rob.d2=this.ins2ss;     
     }
     if(isUndefined(this.rob.d3) && this.instrucciones2.length!= 0 ){
      this.ins3ss=this.instrucciones2[this.i].ss;
      this.ins3c =this.instrucciones2[this.i].c;
      this.instrucciones2.splice(this.i,1);
      this.rob.d3=this.ins3ss;     
   }
   if(this.instrucciones2.length!= 0 ){
    this.ins4ss=this.instrucciones2[this.i].ss;
    this.ins4c =this.instrucciones2[this.i].c;
    this.instrucciones2.splice(this.i,1); 
 }
     }
     if(this.ciclos>0){
    if(isUndefined(this.rob.d3) && (this.robb[this.ciclos-1].d3 != this.robb[this.ciclos-1].e1) 
         && (!isUndefined(this.robb[this.ciclos-1].d3)) ){
        this.rob.d3=this.ins3ss;     
    }
    //if(this.ciclos>1){
    if((this.robb[this.ciclos-1].d2 != this.robb[this.ciclos-1].e1) 
    && (!isUndefined(this.robb[this.ciclos-1].d2) )){
      this.rob.d2=this.ins4ss;      
      }
    //}
  }
  }

  
  agregarER1(){
  if(this.ciclos > 0) { 


      // if((this.robb[this.ciclos-1].uf1 == '') && (this.ins1c != 0)){
      //   if(this.ins1ss != '')
      //   this.rob.e1=this.ins1ss;
      //   else if(this.ins2ss!= '')
      //   this.rob.e1=this.ins2ss;
      // }

      if(this.ciclos > 1){
        if(this.ins1c != 0){
          if(this.ins2c != 0 && this.ins1c != 0 ){
              this.rob.e1 = this.ins2ss;
              this.rob.uf1= this.ins1ss;
          }
        }else if (this.ins1c == 0 && this.ins2c != 0 && this.ins3c != 0){
          this.rob.e1 = this.ins3ss;
          this.rob.uf1 = this.ins2ss;
        }else if (this.ins2c == 0 && this.ins3c != 0 ){
          if(this.ins4c != 0){
            this.rob.e1 = this.ins4ss;}
          this.rob.uf1 = this.ins3ss
        }else if (this.ins3c == 0 && this.ins4c != 0){
          this.rob.e1 = this.ins4ss;
          this.rob.uf1 = this.ins4ss
        }else if (this.ins4c == 0 && this.ins5c != 0){
          this.rob.e1 = this.ins5ss;
          this.rob.uf1 = this.ins5ss
        }

      }
    
    if(this.cantidadER == 2){
      if((this.robb[this.ciclos-1].uf1 == '') && (this.ins1c != 0)){
        this.rob.e1=this.ins1ss;
      }
      if((this.robb[this.ciclos-1].uf2 == '') && (this.ins2c != 0)){
        this.rob.e2=this.ins2ss;
      }
    }
   //parche para solo probar con ER
   if(this.cantidadER != 1){
      if(this.ciclos > 1){
        
       //if((this.rob.e1 == this.rob.uf1))
      // console.log(this.robb[this.ciclos-1].e1 == this.robb[this.ciclos-1].uf1) 
       //console.log(this.ins3ss != this.robb[this.ciclos-1].uf1)
       if((this.ins3ss != '') && (this.ins3c != 0 )){
        if((this.robb[this.ciclos-1].e1 == this.robb[this.ciclos-1].uf1 ) && (this.ins3ss != this.robb[this.ciclos-1].uf1)
           && (((this.robb[this.ciclos-1].e1 != '') && (this.robb[this.ciclos-1].uf1!='') ))){
           //this.rob.e1=this.ins3ss;
           if((this.rob.i1 == '') || (this.rob.i2 == '') || (this.rob.i3 == '') || (this.rob.i4 == '')){
            if(this.rob.i1 == '' ){}
            if(this.rob.i2 == '' ){}
            if(this.rob.i3 == '' ){this.rob.e1=this.ins3ss; }
            if(this.rob.i4 == '' ){this.rob.e2=this.ins4ss; }
            //if(this.rob.i5 == '' ){this.rob.e3=this.ins5ss; }

           }
        } }
        /* else{if(this.robb[this.ciclos-1].e1 != this.robb[this.ciclos-1].uf1){
          if(this.rob.i3 == '' ){this.rob.i3=this.ins3ss; this.rob.s3="I"; this.rob.e1=this.ins3ss};
        } */

      }
      if(this.ciclos > 2){
      { if((this.ins5ss != '') && (this.ins5c != 0 )){
        if((this.robb[this.ciclos-1].e1 == this.robb[this.ciclos-1].uf1 ) && (this.ins5ss != this.robb[this.ciclos-1].uf1)){
           if(this.rob.i5 == '' ){this.rob.e3=this.ins5ss; }
           if(this.rob.i6 == '' ){this.rob.e4=this.ins6ss; }
        }


      }
      }
    }

    if(this.ciclos > 3){
      if((this.ins7ss != '') && (this.ins7c != 0 )){
        if((this.robb[this.ciclos-1].e1 == this.robb[this.ciclos-1].uf1) 
        || (this.robb[this.ciclos-1].e2 == this.robb[this.ciclos-1].uf1) 
        || (this.robb[this.ciclos-1].e3 == this.robb[this.ciclos-1].uf1)
        || (this.robb[this.ciclos-1].e4 == this.robb[this.ciclos-1].uf1)  
        && (this.ins7ss != this.robb[this.ciclos-1].uf1)){
          if(this.rob.i1 == '' ){this.rob.e1=this.ins7ss; }
        }
      }
    }

    

    }
  }
    
  }

  agregarER2(){
    if(this.ciclos > 0) { 
        if(this.ciclos == 1){
          this.rob.e1 = this.ins1ss;
          this.rob.e2 = this.ins2ss;
        }
      if(this.ciclos > 1){
        if(this.ins1c != 0){
          if(this.ins2c != 0 && this.instrucciones2.length == 0){
                this.rob.e2 = this.ins2ss;
          }

          if(this.ins2c != 0 && this.ins3c != 0 && this.ins1c != 0 ){
              this.rob.e1 = this.ins2ss;
              this.rob.e2 = this.ins3ss;
              this.rob.uf1= this.ins1ss;
          }
        }else if (this.ins1c == 0 && this.ins2c != 0 && this.ins3c != 0){
          this.rob.e1 = this.ins3ss;
          if(this.ins4c != 0){
              this.rob.e2 = this.ins4ss;
          }
          this.rob.uf1 = this.ins2ss;
        }else if (this.ins2c == 0 && this.ins3c != 0 ){
          if(this.ins4c != 0){
            this.rob.e2 = this.ins4ss;}
          this.rob.uf1 = this.ins3ss
         }else if (this.ins3c == 0 && this.ins4c != 0){
           this.rob.e2 = this.ins4ss;
           this.rob.uf1 = this.ins4ss
        }else if (this.ins4c == 0 && this.ins5c != 0){
          this.rob.e1 = this.ins5ss;
          this.rob.uf1 = this.ins5ss
        }

      }
    } 
  }
  agregarUf1(){
    if (this.ciclos > 0) {

    if(this.cantidadUF == 1){

       if(this.ins1c != 0 && this.robb[this.ciclos-1].uf1 == ''){
       this.rob.uf1 = this.ins1ss;
       }
       if(this.ciclos > 1){
        if(this.ins1c != 0 && this.robb[this.ciclos-1].uf1 != '') {
          this.rob.uf1 = this.ins1ss;
        }
       if(this.ins2c != 0 && this.ins1c == 0 && this.robb[this.ciclos-1].uf1 != ''){
        this.rob.uf1 = this.ins2ss;
        }
        if(this.ins3c != 0 && this.robb[this.ciclos-1].uf1 == ''){
          this.rob.uf1 = this.ins3ss;
        }
        if(this.ins4c != 0 && this.robb[this.ciclos-1].uf1 == ''){
          this.rob.uf1 = this.ins4ss;
        }
        if(this.ins5c != 0 && this.robb[this.ciclos-1].uf1 == ''){
          this.rob.uf1 = this.ins5ss;
        }
      }
       

    }
   
      
  }
  }

  agregarUf2(){
    if(this.ciclos> 0){
    if(this.ins1c != 0 && this.robb[this.ciclos-1].uf1 == ''){
      this.rob.uf1 = this.ins1ss;
      }
      if(this.ins2c != 0 && this.robb[this.ciclos-1].uf2 == ''){
        this.rob.uf2 = this.ins2ss;
      }
      if(this.ciclos > 1){
       if(this.ins1c != 0 && this.robb[this.ciclos-1].uf1 != '') {
         this.rob.uf1 = this.ins1ss;
       }
      if(this.ins2c != 0 &&  this.robb[this.ciclos-1].uf1 != ''){
       this.rob.uf2 = this.ins2ss;
       }
       if(this.ins3c != 0 && this.ins1c == 0  &&  this.robb[this.ciclos-1].uf1 != ''){
         this.rob.uf1 = this.ins3ss;
       }else if (this.ins3c != 0 && this.ins2c == 0  &&  this.robb[this.ciclos-1].uf1 != ''){
         this.rob.uf2 = this.ins3ss;
       }
       if(this.ins4c != 0 && this.robb[this.ciclos-1].uf1 == ''){
         this.rob.uf1 = this.ins4ss;
       }
       if(this.ins5c != 0 && this.robb[this.ciclos-1].uf1 == ''){
         this.rob.uf1 = this.ins5ss;
       }
     }
    }
    
  }
  
   agregarRob4(cantidadER,cantidadUF){

    // ER == 1 && UF == 1  ROB 4
    // ER == 2 && UF == 1 || ER == 1 && UF == 2  ROB 6
    // ER == 2 && UF == 2  || ER == 3 && UF == 1 || ER == 1 && UF == 3 ROB 8 PODEMOS HACERLO HASTA ACA?
    // ER == 1 && UF == 4 || ER == 2 && UF == 3  || ER == 3 && UF == 2 || ER == 4 && UF == 1 ROB 10
    // ER == 1 && UF == 5  || ER = 2 && UF=4 || cantidadER == 3 && cantidadUF==3 || cantidadER == 4 && cantidadUF==2  || cantidadER == 5 && cantidadUF==1 ROB 12
    // cantidadER == 2 && cantidadUF==5 ||  cantidadER == 3 && cantidadUF==4 || cantidadER == 4 && cantidadUF==3 || cantidadER == 5 && cantidadUF==2 ROB 14 
    // cantidadER == 3 && cantidadUF==5 || "cantidadER == 4 && cantidadUF==4 || cantidadER == 5 && cantidadUF==3 ROB 16
    // cantidadER == 4 && cantidadUF==5 ||  cantidadER == 5 && cantidadUF==4 ROB 18
    // cantidadER == 5 && cantidadUF==5  ROB 20

    if (this.ciclos > 0){

      //ROB 4
      if(cantidadER == 1 && cantidadUF == 1){
 
        if(this.rob.i1 == '') {
       
          if(this.ins1c != 0){
           this.ins1c--;
           this.rob.i1 = this.rob.uf1;
           this.rob.s1 = "X";
         //if(this.ins2ss == ''){ 
           if((this.ins2c == 0) && (this.ins3c == 0)) {
             //this.robb.push(this.rob);
             
         }
         
           }else{
              if((this.ins1c == 0) && (this.v1)){
                this.rob.i1 = this.ins1ss;
                this.rob.s1 = "F";
                this.v1 = false;
          
                if((this.ins2c == 0) && (this.ins3c == 0) && (this.ins2ss == '') || (this.ins2c == 0) && (this.ins3c == 0) && (this.ins2ss != '')){
                  //this.robb.push(this.rob);
                }
                
              }
        
             }
      
         if ((this.ins1c == 0 && !this.v) && (this.rob.s1 != "F") && this.ins2c != 0){
            this.ins2c--;
            this.rob.i1 = this.rob.uf1;
            this.rob.s1 = "X";  

          }else {
            if((this.ins2c == 0) && (this.v2) && (this.robb[this.ciclos-1].i2 != this.ins2ss)){ //no debe entrar s2
                  this.rob.i1 = this.ins2ss;
                  this.rob.s1 = "F";
                  this.v2 = false;
                }
            }
            
        if((this.ins1c == 0 && !this.v1) && (this.ins2c == 0 && !this.v1) && (this.ins3c != 0)){
        this.ins3c--;
        this.rob.i1 = this.rob.uf1;
        this.rob.s1 = "X";
        } else if((this.ins3c == 0) && ("" != this.ins3ss) && (this.v3)){
          this.rob.i1 = this.ins3ss;
          this.rob.s1 = "F";
          this.v3 = false;
        }            //se pone en espera la instruccion en el rob
        else if(this.ins3c != 0 && (this.rob.e1 == this.ins3ss)){
          this.rob.i1 = this.rob.e1;
          this.rob.s1 = "I";
        }

        if((this.ins1c == 0 && !this.v) && (this.ins2c == 0 && !this.v2) && (this.ins3c == 0 && !this.v3) && (this.ins4c != 0 )){
          this.ins4c--;
          this.rob.i1 = this.rob.uf1;
          this.rob.s1 = "X";

          } else if((this.ins4c == 0) && ((this.robb[this.ciclos-1].i1 == this.ins4ss))  && ("" != this.ins4ss) && (this.v4)){
            this.rob.i1 = this.ins4ss;
            this.rob.s1 = "F";
            this.v4 = false;
          }
          else if(this.ins3c == 0 && this.ins4c != 0 && (this.rob.e1 == this.ins4ss) && (this.robb[this.ciclos-1].i2 != this.ins4ss)){
            this.rob.i1 = this.rob.e1;
            this.rob.s1 = "I";
          }

          if((this.ins1c == 0 && !this.v1) && (this.ins2c == 0 && !this.v2) && (this.ins3c == 0 && !this.v3) && (this.ins4c == 0 && !this.v4)
          && (this.ins5c != 0)){
            this.ins5c--;
            this.rob.i1 = this.rob.uf1;
            this.rob.s1 = "X";
            //
            } else if((this.ins5c == 0) && ((this.robb[this.ciclos-1].i1 == this.ins5ss) || (this.robb[this.ciclos-1].i2 == this.ins5ss)) && ("" != this.ins5ss) ){
              this.rob.i1 = this.ins5ss;
              this.rob.s1 = "F";
             // this.v5 = false;
            }

          

   } 
   if (this.rob.i2 == ''){
        if((this.rob.uf1 == this.rob.e1 || this.rob.uf1 != "") && ((this.ins2ss == this.rob.uf1) || (this.ins4ss == this.rob.uf1)) ){
          if (this.ins2c != 0){
            this.ins2c--;
            this.rob.i2 = this.rob.uf1;
            this.rob.s2 = "X";  

          }else if((this.ins2c == 0) && (this.ins2ss != "") && (this.v2)){
                  this.rob.i2 = this.ins2ss;
                  this.rob.s2 = "F";
                  this.v2 = false;

          }else if (this.ins4c != 0){
            this.ins4c--;
            this.rob.i2 = this.rob.uf1;
            this.rob.s2 = "X";  

          }else if (this.ins5c != 0){
            this.ins5c--;
            this.rob.i2 = this.rob.uf1;
            this.rob.s2 = "X";  
          }
         //le ponemos en espera al rob con la instruccion 
        }else if(this.ins2c != 0 && (this.rob.e1 == this.ins2ss)){
            this.rob.i2 = this.rob.e1;
            this.rob.s2 = "I";

        }else if(this.ins3c != 0 && (this.rob.e1 == this.ins3ss)){
          this.rob.i2 = this.rob.e1;
          this.rob.s2 = "I";
      }else if(this.ins4c != 0 && (this.rob.e1 == this.ins4ss)){
        this.rob.i2 = this.rob.e1;
        this.rob.s2 = "I";
    }
        
        else if ((this.ins2c == 0) && ("" != this.ins2ss) && (this.robb[this.ciclos-1].i2 == this.ins2ss) && (this.v2) ){
                  this.rob.i2 = this.ins2ss;
                  this.rob.s2 = "F";
                  this.v2= false;
        }else if ((this.ins4c == 0) && ("" != this.ins4ss) && (this.robb[this.ciclos-1].i2 == this.ins4ss) && (this.v4)){
          this.rob.i2 = this.ins4ss;
          this.rob.s2 = "F";
          this.v4 = false;
        }else if ((this.ins5c == 0) && ("" != this.ins5ss) &&  (this.robb[this.ciclos-1].i2 == this.ins5ss)){
          this.rob.i2 = this.ins5ss;
          this.rob.s2 = "F";
          //this.v5 = false;
        }
        
   }
 
  } 

    }
  }       





 // agregamos la cantidad de despacho, ER, UF
  agregarDesp(cantidadDespacho){
   this.cantidadDespacho = cantidadDespacho;
  }
  agregarEstReser(cantidadER){
   this.cantidadER = cantidadER;
  }
  agregarUFMultFunc(cantidadMultiFuncion){
    this.cantidadMultiFuncion = cantidadMultiFuncion;
  }
  agregarUFAritmetica(cantidadAritmetica){
    this.cantidadAritmetica = cantidadAritmetica;
  }

  agregarUFMemoria(cantidadMemoria){
    this.cantidadMemoria = cantidadMemoria;
  }

  agregarComponente( inst:Array<Instruccion>,  cant:Number, id:string ){
    let tr = document.createElement("tr");

    for(let i = 0; i < cant;i++){
        let td = document.createElement("td");

        if (i<inst.length){
            td.appendChild(document.createTextNode(inst[i].getId()));
            tr.appendChild(td);
        }
        else{
            td.appendChild(document.createTextNode("-"));
            tr.appendChild(td);
        }
    }

    document.getElementById(id).appendChild(tr);
}

agregarUF(uf){
  let tr = document.createElement("tr");
  for(let i = 0; i < uf.length;i++){

      let td = document.createElement("td");

      if (uf[i].getInstruccion()!= null){
          td.appendChild(document.createTextNode(uf[i].getInstruccion().getId()));
          tr.appendChild(td);
      }

      else
      {
          td.appendChild(document.createTextNode("-"));
          tr.appendChild(td);
      }
      
  }
  document.getElementById("tablaUnidadFuncional").appendChild(tr);
}

agregarROB(rob, cant:Number,id:string){
  let tr = document.createElement("tr");

  for (let i = 0; i < cant; i++){

      let td1 = document.createElement("td");
      let td2 = document.createElement("td");

      if (rob.getColumbaRob()[i].getInstruccion()!=null){

          if (rob.getColumbaRob()[i].getOtraInstruccion()==null){
            //le insgresamos la instruccion y el estado a la columna del rob
              td1.appendChild(document.createTextNode(rob.getColumbaRob()[i].getInstruccion().getId()))
              td2.appendChild(document.createTextNode(rob.getColumbaRob()[i].getInstruccion().getEstado()));  
          }
          tr.appendChild(td1);
          tr.appendChild(td2);
      }
      else{
          td1.appendChild(document.createTextNode("-"))
          td2.appendChild(document.createTextNode("-"));
          tr.appendChild(td1);
          tr.appendChild(td2);
      }
  }
  document.getElementById(id).appendChild(tr);
}


  public siguienteCiclo(){
    if (!this.procesador.termino()){
      this.procesador.siguienteCiclo();
      this.agregarFilaCiclos(this.procesador.getCiclo());
      //agregamos en la tabla con la cantidad de despacho
      this.agregarComponente(this.procesador.getDespacho().instruccion,this.cantidadDespacho,"tablaDespacho");
      //agregamos en la tabla con la cantidad de er
      this.agregarComponente(this.procesador.getER().instruccion,this.cantidadER, "tablaEstacionReserva");
      this.agregarUF(this.procesador.getUF());
      this.agregarROB(this.procesador.getROB(),this.sizeROB,"tablaROB");
    }
  }

  private saveCiclos(){
    for(let i=0 ; i< this.listInstrucciones.length; i++){
      for (let l =0 ; l < this.Instrucciones.length; l++)
        if (this.listInstrucciones[i].getTipo() == this.Instrucciones[l].tipo){
          this.listInstrucciones[i].setCiclos(this.Instrucciones[l].ciclo);
        }    
      }   
  }

  agregarFilaCiclos(ciclos:number) {  
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.appendChild(document.createTextNode(""+ciclos));
    tr.appendChild(td);
    document.getElementById("tablaCiclos").appendChild(tr);

}

private crearTablaComponente(tipo:string, num:number){
  let j = [];
  for (let i = 0; i < num; i++) {
    j.push(tipo+i);
  }
  this[tipo] = j;
}

private crearTablaUnidadFuncional(tipo:string, cantidadMultiFuncion:number, cantidadAritmetica:number, cantidadMemoria:number){
  let j = [];
  for (let i = 0; i < cantidadMultiFuncion; i++) {
    j.push(tipo + "MultiFunc" + i);
  }
  for (let i = 0; i < cantidadAritmetica; i++) {
    j.push(tipo + "Aritmetica" + i);
  }
  for (let i = 0; i < cantidadMemoria; i++) {
    j.push(tipo + "Memoria" +  i);
  }    
  this[tipo] = j;
}

private crearTablaRob(){
  const j = [];
  for (let i = 0; i < this.sizeROB; i++) {
        j.push('I');
        j.push('S');
  }

  this['ROB'] = j;

}


public ejecutar(){
  this.guardar();
  

  //seteamos la tabla de despacho pasandole la cantidad de despacho. 
  this.crearTablaComponente("Despacho",this.cantidadDespacho);
  //seteamos la tabla de la estacion de reserva
  this.crearTablaComponente("EstacionReserva",this.cantidadER);
  
  //seteamos la tabla de la unidad funcional
  this.crearTablaUnidadFuncional("UnidadFuncional",this.cantidadMultiFuncion,this.cantidadAritmetica,this.cantidadMemoria);

  //calculamos el tamaño del rob
  this.sizeROB = this.cantidadER + this.cantidadMultiFuncion + this.cantidadAritmetica + this.cantidadMemoria;

  //seteamos la tabla del rob
  this.crearTablaRob();
  
  //inicializamos el procesador super escalar con las intrucciones y el despacho, cantidad ER y el tamaño del rob
  this.procesador = new ProcesadorSuperEscalar(this.listInstrucciones,this.cantidadDespacho,this.cantidadER,this.sizeROB);

  //agregamos la unidad funcional al procesador
  this.procesador.agregarUF(this.cantidadMultiFuncion,this.cantidadAritmetica,this.cantidadMemoria);
  
}
}






