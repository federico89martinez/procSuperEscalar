import { Component } from '@angular/core';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { InstantiateExpr } from '@angular/compiler';
import { Instru } from 'src/app/models/instruccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'procSuperEscalar';


  s:string;
  ins: string;
  add: string;
  subd: string;
  muld: string;
  div: string;

  dst: string;
  op1:string;
  op2: string;

  r0;r2;r4;r6;r8: string;

  ciclosAdd: string;
  ciclosSubd: string;
  ciclosMuld: string;
  ciclosDiv: string;

  instruccion : any  [] = new Array();

  
   public valido: boolean = false;
   public validar1: boolean = false;

  
  
  instru : Instru ={
    
    i: '',
    d: '',
    op1: '',
    op2: ''
  };

  //instrucciones:  Instru [];

  
  
  constructor(){ }

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


  
  agregarInst(ins){
    if( ins == 0 ) this.ins = "ADD";
    if( ins == 1) this.ins = "SUBD";
    if( ins == 2) this.ins = "MULD";
    if( ins == 3) this.ins = "DIV";
     
  }

  

  agregarDst(dst){
    if(dst == 0) this.dst= "r0"; 
    if(dst == 2) this.dst= "r2";
    if(dst == 4) this.dst= "r4";
    if(dst == 6) this.dst= "r6";
    if(dst == 8) this.dst= "r8";

     
  }

  agregarOp1(op1){
    if(op1 == 0)this.op1= "r0";
    if(op1 == 2)this.op1= "r2"; 
    if(op1 == 4) this.op1= "r4";
    if(op1 == 6) this.op1= "r6";
    if(op1 == 8) this.op1= "r8";

  }

  agregarOp2(op2){
    if(op2 == 0) this.op2= "r0";
    if(op2 == 2) this.op2= "r2";
    if(op2 == 4) this.op2= "r4";
    if(op2 == 6) this.op2= "r6";
    if(op2 == 8) this.op2= "r8";


  }

  deleteIns(ins){
    for (let i=0; i< this.instruccion.length; i++){
      if(ins == this.instruccion[i]){
        this.instruccion.splice(i,1);
      }
      
    }
  }

  mostrarIns(){
    
     //seteamos el objeto
    this.instru = new Object;
    this.instru.i=this.ins;
    this.instru.d=this.dst;
    this.instru.op1=this.op1;
    this.instru.op2=this.op2;

    //ingresamos al arreglo el objeto
    this.instruccion.push(this.instru);
    this.valido=false;
    

  }
}

