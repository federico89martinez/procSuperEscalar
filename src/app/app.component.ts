import { Component } from '@angular/core';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { InstantiateExpr } from '@angular/compiler';
import { Instru } from 'src/app/models/instruccion';
import { In } from 'src/app/models/instruccion';
import { Ins } from 'src/app/models/instruccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'procSuperEscalar';

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

  dst: string;
  op1:string;
  op2: string;

  r0;r2;r4;r6;r8: string;

  

  c: number;
  ciclos:number=-1;

  instruccion : any  [] = new Array();

  instrucciones2 : any [] = new Array();
  
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
    d1:'', d2: '', e1: '',e2: '',e3: '',e4: '',uf1: '',uf2: '',
    i1: '',s1: '',i2: '',s2: '',i3: '',s3: '',i4: '',s4: '',i5: '',s5: '',i6: '',s6: ''
  };

  
  
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

 agregarStd(std){
   this.ciclosStd=std;
 }

 agregarLdd(ldd){
   this.ciclosLdd=ldd;
 }


  
  agregarInst(ins){
    if( ins == 0 ) this.ins = "ADD";
    if( ins == 1) this.ins = "SUBD";
    if( ins == 2) this.ins = "MULD";
    if( ins == 3) this.ins = "DIV";
    if( ins == 4) this.ins = "STD";
    if( ins == 5) this.ins = "LDD";
     
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
  v5: boolean = true;
  v6: boolean = true;
  v7: boolean = true;
  v8: boolean = true;
  v9: boolean = true;

  ciclosAdd: number = 1;
  ciclosSubd: number = 1;
  ciclosMuld: number = 1;
  ciclosDiv: number = 1;
  ciclosStd: number = 1;
  ciclosLdd: number = 6;


  quedaste71: boolean = false;
  quedaste72: boolean = false;
  quedaste73: boolean = false;
  quedaste74: boolean = false;
  quedaste75: boolean = false;
  quedaste76: boolean = false;

  quedaste81: boolean = false;
  quedaste82: boolean = false;
  quedaste83: boolean = false;
  quedaste84: boolean = false;
  quedaste85: boolean = false;
  quedaste86: boolean = false;

  quedaste91: boolean = false;
  quedaste92: boolean = false;
  quedaste93: boolean = false;
  quedaste94: boolean = false;
  quedaste95: boolean = false;
  quedaste96: boolean = false;



  agregarDespacho(){
    if(this.ciclos == -1){      
       
       this.ins1ss=this.instrucciones2[this.i].ss;
       this.ins1c =this.instrucciones2[this.i].c;
       this.instrucciones2.splice(this.i,1);
       this.rob.d1=this.ins1ss;
       this.rob.uf1='';      
       this.ciclos++;
       /* if(this.instrucciones2.length == 0){
       this.robb.push(this.rob); 
       } */

       if(this.instrucciones2.length != 0){
        this.ins2ss=this.instrucciones2[this.i].ss;
        this.ins2c= this.instrucciones2[this.i].c
        this.rob.d2=this.ins2ss;
        this.instrucciones2.splice(this.i,1);
        this.rob.uf2='';
        //this.robb.push(this.rob); 
       }
    }
     if((this.ciclos > 0) && (this.ciclos < 2)) {
       if(this.instrucciones2.length != 0){
        this.ins3ss=this.instrucciones2[this.i].ss;
        this.ins3c=this.instrucciones2[this.i].c;
        this.rob.d1=this.ins3ss;
        this.instrucciones2.splice(this.i,1);
       }
       if(this.instrucciones2.length != 0){
        this.ins4ss=this.instrucciones2[this.i].ss;
        this.ins4c=this.instrucciones2[this.i].c;
        this.rob.d2=this.ins4ss;
        this.instrucciones2.splice(this.i,1);
       }
       
    } 
    if((this.ciclos > 1) && (this.ciclos < 3)){
      if(this.instrucciones2.length != 0){
        
        this.ins5ss=this.instrucciones2[this.i].ss;
        this.ins5c=this.instrucciones2[this.i].c;
        this.rob.d1=this.ins5ss;
        this.instrucciones2.splice(this.i,1);
       }
       if(this.instrucciones2.length != 0){
        
        this.ins6ss=this.instrucciones2[this.i].ss;
        this.ins6c=this.instrucciones2[this.i].c;
        this.rob.d2=this.ins6ss;
        this.instrucciones2.splice(this.i,1);
       }
    }
    if((this.ciclos > 2) && (this.ciclos < 4)){
      if(this.instrucciones2.length != 0){
        
        this.ins7ss=this.instrucciones2[this.i].ss;
        this.ins7c=this.instrucciones2[this.i].c;
        this.rob.d1=this.ins7ss;
        this.instrucciones2.splice(this.i,1);
       }
       if(this.instrucciones2.length != 0){
        
        this.ins8ss=this.instrucciones2[this.i].ss;
        this.ins8c=this.instrucciones2[this.i].c;
        this.rob.d2=this.ins8ss;
        this.instrucciones2.splice(this.i,1);
       }
    }

    if((this.ciclos > 3) && (this.ciclos < 5) ){
      if(this.instrucciones2.length != 0){
        this.ins9ss=this.instrucciones2[this.i].ss;
        this.ins9c=this.instrucciones2[this.i].c;
        this.instrucciones2.splice(this.i,1);
        
        /* if(this.rob.d1 == ''){
        this.ins9ss=this.instrucciones2[this.i].ss;
        this.ins9c=this.instrucciones2[this.i].c;
        this.rob.d1=this.ins9ss;
        this.instrucciones2.splice(this.i,1);
        }else {if (this.robb[this.ciclos-1].d2 == ''){
           this.ins9ss=this.instrucciones2[this.i].ss;
          this.ins9c=this.instrucciones2[this.i].c;
          this.rob.d2=this.ins9ss;
          this.instrucciones2.splice(this.i,1); 
        }} */
       }
    }
    

  
  }
     
         

  

  
  agregarER(){
   if(this.ciclos > 0) {    
     
     if((this.robb[this.ciclos-1].uf1 == '') && (this.ins1c != 0)){
      this.rob.e1=this.ins1ss;
    }
    if((this.robb[this.ciclos-1].uf2 == '') && (this.ins2c != 0)){
      this.rob.e2=this.ins2ss;
    }

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

      /* if((this.ins8ss != '') && (this.ins8c != 0 )){
        if((this.robb[this.ciclos-1].e1 == this.robb[this.ciclos-1].uf1) 
        || (this.robb[this.ciclos-1].e2 == this.robb[this.ciclos-1].uf1) 
        || (this.robb[this.ciclos-1].e3 == this.robb[this.ciclos-1].uf1)
        || (this.robb[this.ciclos-1].e4 == this.robb[this.ciclos-1].uf1)  
        && (this.ins8ss != this.robb[this.ciclos-1].uf1)){
          if(this.rob.i1 == '' ){this.rob.e2=this.ins8ss; }
        }
      } */
      
    }

    

    }
    
  }

  
  

  agregarUf1(){
    if (this.ciclos > 0) {
       if(this.ins1c != 0){
       this.rob.uf1 = this.ins1ss;
       
      }
      if(this.ins2c != 0){
        this.rob.uf2 = this.ins2ss;
      } 
  }
  if (this.ciclos > 1){

      if((this.ins1c == 0) || (this.ins2c == 0)){
        if(this.ins3c != 0){
 
         if( (this.rob.uf1 == '') && (this.robb[this.ciclos-1].uf1 == this.ins3ss) && (this.ins3c!=0) ) {
          this.rob.uf1 = this.ins3ss;
         }else
         {
           if((this.rob.uf2 == '') && (this.robb[this.ciclos-1].uf2 == this.ins3ss) && (this.ins3c!=0)){
           this.rob.uf2 = this.ins3ss;}
           else{
             if((this.rob.uf1 == '') && (this.ins3c != 0)){
              this.rob.uf1 = this.ins3ss;
             }else{
              if((this.rob.uf2 == '') && (this.ins3c != 0)){
              this.rob.uf2 = this.ins3ss;}
             }
           }
         }
         }
      }
      if((this.ins1c == 0) || (this.ins2c == 0) || (this.ins3c == 0)){

        if(this.ins4c != 0){
 
          if( (this.rob.uf1 == '') && (this.robb[this.ciclos-1].uf1 == this.ins4ss) && (this.ins4c!=0) ) {
           this.rob.uf1 = this.ins4ss;
          }else
          {
            if((this.rob.uf2 == '') && (this.robb[this.ciclos-1].uf2 == this.ins4ss) && (this.ins4c!=0)){
            this.rob.uf2 = this.ins4ss;}
            else{
              if((this.rob.uf1 == '') && (this.ins4c != 0)){
               this.rob.uf1 = this.ins4ss;
              }else{
               if((this.rob.uf2 == '') && (this.ins4c != 0)){
               this.rob.uf2 = this.ins4ss;}
              }
            }
          }
          }


      }
      if((this.ins1c == 0) || (this.ins2c == 0) || (this.ins3c == 0) || (this.ins4c == 0)){

        if(this.ins5c != 0){
 
          if( (this.rob.uf1 == '') && (this.robb[this.ciclos-1].uf1 == this.ins5ss) && (this.ins5c!=0) ) {
           this.rob.uf1 = this.ins5ss;
          }else
          {
            if((this.rob.uf2 == '') && (this.robb[this.ciclos-1].uf2 == this.ins5ss) && (this.ins5c!=0)){
            this.rob.uf2 = this.ins5ss;}
            else{
              if((this.rob.uf1 == '') && (this.ins5c != 0)){
               this.rob.uf1 = this.ins5ss;
              }else{
               if((this.rob.uf2 == '') && (this.ins5c != 0)){
               this.rob.uf2 = this.ins5ss;}
              }
            }
          }
          }


      }
      if((this.ins1c == 0) || (this.ins2c == 0) || (this.ins3c == 0) || (this.ins4c == 0) || (this.ins5c == 0)){

        if(this.ins6c != 0){
 
          if( (this.rob.uf1 == '') && (this.robb[this.ciclos-1].uf1 == this.ins6ss) && (this.ins6c!=0) ) {
           this.rob.uf1 = this.ins6ss;
          }else
          {
            if((this.rob.uf2 == '') && (this.robb[this.ciclos-1].uf2 == this.ins6ss) && (this.ins6c!=0)){
            this.rob.uf2 = this.ins6ss;}
            else{
              if((this.rob.uf1 == '') && (this.ins6c != 0)){
               this.rob.uf1 = this.ins6ss;
              }else{
               if((this.rob.uf2 == '') && (this.ins6c != 0)){
               this.rob.uf2 = this.ins6ss;}
              }
            }
          }
          }


      }
      if((this.ins1c == 0) || (this.ins2c == 0) || (this.ins3c == 0) || (this.ins4c == 0) || (this.ins5c == 0)
      || (this.ins6c == 0)){

        if(this.ins7c != 0){
 
          if( (this.rob.uf1 == '') && (this.robb[this.ciclos-1].uf1 == this.ins7ss) && (this.ins7c!=0) ) {
           this.rob.uf1 = this.ins7ss;
          }else
          {
            if((this.rob.uf2 == '') && (this.robb[this.ciclos-1].uf2 == this.ins7ss) && (this.ins7c!=0)){
            this.rob.uf2 = this.ins7ss;}
            else{
              if((this.rob.uf1 == '') && (this.ins7c != 0)){
               this.rob.uf1 = this.ins7ss;
              }else{
               if((this.rob.uf2 == '') && (this.ins7c != 0)){
               this.rob.uf2 = this.ins7ss;}
              }
            }
          }
          }


      }
      if((this.ins1c == 0) || (this.ins2c == 0) || (this.ins3c == 0) || (this.ins4c == 0) || (this.ins5c == 0)
      || (this.ins6c == 0) ||  (this.ins7c == 0)){

        if(this.ins8c != 0){
 
          if( (this.rob.uf1 == '') && (this.robb[this.ciclos-1].uf1 == this.ins8ss) && (this.ins8c!=0) ) {
           this.rob.uf1 = this.ins8ss;
          }else
          {
            if((this.rob.uf2 == '') && (this.robb[this.ciclos-1].uf2 == this.ins8ss) && (this.ins8c!=0)){
            this.rob.uf2 = this.ins8ss;}
            else{
              if((this.rob.uf1 == '') && (this.ins8c != 0)){
               this.rob.uf1 = this.ins8ss;
              }else{
               if((this.rob.uf2 == '') && (this.ins8c != 0)){
               this.rob.uf2 = this.ins8ss;}
              }
            }
          }
          }


      }
      if((this.ins1c == 0) || (this.ins2c == 0) || (this.ins3c == 0) || (this.ins4c == 0) || (this.ins5c == 0)
      || (this.ins6c == 0) ||  (this.ins7c == 0) || (this.ins8c == 0)){

        if(this.ins9c != 0){
 
          if( (this.rob.uf1 == '') && (this.robb[this.ciclos-1].uf1 == this.ins9ss) && (this.ins9c!=0) ) {
           this.rob.uf1 = this.ins9ss;
          }else
          {
            if((this.rob.uf2 == '') && (this.robb[this.ciclos-1].uf2 == this.ins9ss) && (this.ins9c!=0)){
            this.rob.uf2 = this.ins9ss;}
            else{
              if((this.rob.uf1 == '') && (this.ins9c != 0)){
               this.rob.uf1 = this.ins9ss;
              }else{
               if((this.rob.uf2 == '') && (this.ins9c != 0)){
               this.rob.uf2 = this.ins9ss;}
              }
            }
          }
          }


      }

    }

  }

  analizar7(){
    if((this.rob.i1 == '') || (this.rob.i2 == '')  || (this.rob.i3 == '') || (this.rob.i4 == '') ||
          (this.rob.i5 == '') || (this.rob.i6 == '')){
            if((this.rob.i1 == '') && (this.quedaste71 == false)){
            this.rob.i1 = this.ins7ss;
            this.rob.s1 = "I";
            this.quedaste72=true;
            this.quedaste73=true;
            this.quedaste74=true;
            this.quedaste75=true;
            this.quedaste76=true;
        }else{if((this.rob.i2 == '') && (this.quedaste72 == false)){
          this.rob.i2 = this.ins7ss;
          this.rob.s2 = "I";
          this.quedaste71=true;
          this.quedaste73=true;
          this.quedaste74=true;
          this.quedaste75=true;
          this.quedaste76=true;
      }else{if((this.rob.i3 == '') && (this.quedaste73 == false)){
          this.rob.i3 = this.ins7ss;
          this.rob.s3 = "I";
          this.quedaste71=true;
          this.quedaste72=true;
          this.quedaste74=true;
          this.quedaste75=true;
          this.quedaste76=true;
    }else {if ((this.rob.i4 == '') && (this.quedaste74 == false)){
      this.rob.i4 = this.ins7ss;
      this.rob.s4 = "I";
      this.quedaste71=true;
      this.quedaste72=true;
      this.quedaste73=true;
      this.quedaste75=true;
      this.quedaste76=true;
    }else {if((this.rob.i5 == '') && (this.quedaste75 == false)){
      this.rob.i5 = this.ins7ss;
      this.rob.s5 = "I";
      this.quedaste71=true;
      this.quedaste72=true;
      this.quedaste73=true;
      this.quedaste74=true;
      this.quedaste76=true;
    }else {if ((this.rob.i6 == '') && (this.quedaste76 == false)){
      this.rob.i6 = this.ins7ss;
      this.rob.s6 = "I";
      this.quedaste71=true;
      this.quedaste72=true;
      this.quedaste73=true;
      this.quedaste74=true;
      this.quedaste75=true;

    }} }}}}
          }
  }

  analizar8(){
    if((this.rob.i1 == '') || (this.rob.i2 == '')  || (this.rob.i3 == '') || (this.rob.i4 == '') ||
    (this.rob.i5 == '') || (this.rob.i6 == '')){
      if((this.rob.i1 == '') && (this.quedaste81 == false)){
        this.rob.i1 = this.ins8ss;
        this.rob.s1 = "I";
        this.quedaste82=true;
        this.quedaste83=true;
        this.quedaste84=true;
        this.quedaste85=true;
        this.quedaste86=true;
      }else {if((this.rob.i2 == '')  && (this.quedaste82 == false)){
                this.rob.i2 = this.ins8ss;
                this.rob.s2 = "I";
                this.quedaste81=true;
                this.quedaste83=true;
                this.quedaste84=true;
                this.quedaste85=true;
                this.quedaste86=true;
             }else{if((this.rob.i3 == '')  && (this.quedaste83 == false)){
                      this.rob.i3 = this.ins8ss;
                      this.rob.s3 = "I";
                      this.quedaste81=true;
                      this.quedaste82=true;
                      this.quedaste84=true;
                      this.quedaste85=true;
                      this.quedaste86=true;
             }else {if((this.rob.i4 == '')  && (this.quedaste84 == false)){
                      this.rob.i4 = this.ins8ss;
                      this.rob.s4 = "I";
                      this.quedaste81=true;
                      this.quedaste82=true;
                      this.quedaste83=true;
                      this.quedaste85=true;
                      this.quedaste86=true;
             }else {if((this.rob.i5 == '')  && (this.quedaste85 == false)){
                      this.rob.i5 = this.ins8ss;
                      this.rob.s5 = "I";
                      this.quedaste81=true;
                      this.quedaste82=true;
                      this.quedaste83=true;
                      this.quedaste84=true;
                      this.quedaste86=true;
             }else {if ((this.rob.i6 == '')  && (this.quedaste86 == false)){
                    this.rob.i6 = this.ins8ss;
                    this.rob.s6 = "I";
                    this.quedaste81=true;
                    this.quedaste82=true;
                    this.quedaste83=true;
                    this.quedaste84=true;
                    this.quedaste85=true;
             } }} }}}
       }
  }

  analizar9(){
    if((this.rob.i1 == '') || (this.rob.i2 == '')  || (this.rob.i3 == '') || (this.rob.i4 == '') || (this.rob.i5=='')
          || (this.rob.i6 == '') ){
    if((this.rob.i1 == '') && (this.quedaste91 == false)){
      this.rob.i1 = this.ins9ss;
      this.rob.s1 = "I";
      this.quedaste92=true;
      this.quedaste93=true;
      this.quedaste94=true;
      this.quedaste95=true;
      this.quedaste96=true;
    }else {if((this.rob.i2 == '')  && (this.quedaste92 == false)){
              this.rob.i2 = this.ins9ss;
              this.rob.s2 = "I";
              this.quedaste91=true;
              this.quedaste93=true;
              this.quedaste94=true;
              this.quedaste95=true;
              this.quedaste96=true;
           }else{if((this.rob.i3 == '')  && (this.quedaste93 == false)){
                    this.rob.i3 = this.ins9ss;
                    this.rob.s3 = "I";
                    this.quedaste91=true;
                    this.quedaste92=true;
                    this.quedaste94=true;
                    this.quedaste95=true;
                    this.quedaste96=true;
           }else {if((this.rob.i4 == '')  && (this.quedaste94 == false)){
                    this.rob.i4 = this.ins9ss;
                    this.rob.s4 = "I";
                    this.quedaste91=true;
                    this.quedaste92=true;
                    this.quedaste93=true;
                    this.quedaste95=true;
                    this.quedaste96=true;
           }else {if((this.rob.i5 == '')  && (this.quedaste95 == false)){
                    this.rob.i5 = this.ins9ss;
                    this.rob.s5 = "I";
                    this.quedaste91=true;
                    this.quedaste92=true;
                    this.quedaste93=true;
                    this.quedaste94=true;
                    this.quedaste96=true;
           }else {if ((this.rob.i6 == '')  && (this.quedaste96 == false)){
                  this.rob.i6 = this.ins9ss;
                  this.rob.s6 = "I";
                  this.quedaste91=true;
                  this.quedaste92=true;
                  this.quedaste93=true;
                  this.quedaste94=true;
                  this.quedaste95=true;
           } }} }}}
          }
  }
  

  agregarRob(){
    if (this.ciclos > 0) {

     if(this.rob.i1 == '') {
       
       if(this.ins1c != 0){
        this.ins1c--;
        this.rob.i1 = this.rob.uf1;
        this.rob.s1 = "X";
        console.log('entra1')
      //if(this.ins2ss == ''){ 
        if((this.ins2c == 0) && (this.ins3c == 0)) {
          //this.robb.push(this.rob);
          
      }
      

    }else{
      if((this.ins1c == 0) && (this.v)){
        this.rob.i1 = this.ins1ss;
        this.rob.s1 = "F";
        this.v = false;
  
        if((this.ins2c == 0) && (this.ins3c == 0) && (this.ins2ss == '') || (this.ins2c == 0) && (this.ins3c == 0) && (this.ins2ss != '')){
          console.log('entra2')
          //this.robb.push(this.rob);
        }
        
      }

    }
  }
  
    if((this.rob.i2 == '' ) && (this.ins2ss != '')){
        if(this.ins2c != 0){
          this.ins2c--;
          this.rob.i2= this.rob.uf2;
          this.rob.s2= "X";
          console.log('entra3')
          
          
        }
        else{
        if((this.ins2c == 0) && (this.v1)){
          this.rob.i2 = this.ins2ss;
          this.rob.s2 = "F";
          this.v1=false;
        } 

        }
     }

       if((this.rob.i1 == '') || (this.rob.i2 == '') || (this.rob.i3 == '') || (this.rob.i4 == '') || (this.rob.i5 == '')){
        if(this.rob.i1 == '' ){
          if((this.ins3ss == this.rob.uf1)  && (this.ins3c != 0) && (this.ins1c != 0)){
            this.rob.i1=this.ins3ss;
            this.rob.i1="X";
            this.ins3c--;
            console.log('entra7')
              
          }
          
        }
        if(this.rob.i2 == '' ){
          if((this.ins3ss == this.rob.uf1)  && (this.ins3c != 0) && (this.ins1c != 0)){
            this.rob.i2=this.ins3ss;
            this.rob.s2="X";
            this.ins3c--;
            console.log('entra8')
            
              
          }
          
        }

     ///////instruccion 3
     if(this.ciclos > 1){
       if(this.rob.i3 == '' ){
         if((this.ins3ss == this.rob.uf1) && (this.ins3c != 0) || (this.ins3ss == this.rob.uf2) && (this.ins3c != 0) ){
           this.rob.i3=this.ins3ss;
           this.rob.s3="X";
           this.ins3c--;
           console.log('entra9')
          }
          
          else{
          if((this.ins3c == 0) && (this.v2) && (this.ins3ss != '')){
            
              this.rob.i3 = this.ins3ss;
              this.rob.s3 = "F";
              this.v2=false;
            console.log('entra10')
        }}}}
       ///////instruccion 4
        if(this.ciclos>1){
        if(this.rob.i4 == '' ){
          if((this.ins4ss == this.rob.uf1) && (this.ins4c != 0) && (this.ins4ss !='') || 
          (this.ins4ss == this.rob.uf2) && (this.ins4c != 0) && (this.ins4ss !='') ){
            this.rob.i4=this.ins4ss;
            this.rob.s4="X";
            this.ins4c--;
            console.log('entra11')
           }
          else{
        if((this.ins4c == 0) && (this.v3) && (this.ins4ss != '')){
            
          this.rob.i4 = this.ins4ss;
          this.rob.s4 = "F";
          this.v3=false;
            console.log('entra12')
        }
      }
    }}
    ///////instruccion 5
    if(this.ciclos>1){
      if(this.rob.i5 == '' ){
        if((this.ins5ss == this.rob.uf1) && (this.ins5c != 0) && (this.ins5ss !='') || 
        (this.ins5ss == this.rob.uf2) && (this.ins5c != 0) && (this.ins5ss !='') ){
          this.rob.i5=this.ins5ss;
          this.rob.s5="X";
          this.ins5c--;
          console.log('entra13')
         }
        else{
      if((this.ins5c == 0) && (this.v4) && (this.ins5ss != '')){
          
        this.rob.i5 = this.ins5ss;
        this.rob.s5 = "F";
        this.v4=false;
          console.log('entra14')
      }
    }
  }}
  ///////instruccion 6
  if(this.ciclos>1){
    if(this.rob.i6 == '' ){
      if((this.ins6ss == this.rob.uf1) && (this.ins6c != 0) && (this.ins6ss !='') || 
      (this.ins6ss == this.rob.uf2) && (this.ins6c != 0) && (this.ins6ss !='') ){
        this.rob.i6=this.ins6ss;
        this.rob.s6="X";
        this.ins6c--;
        console.log('entra15')
       }
      else{
    if((this.ins6c == 0) && (this.v5) && (this.ins6ss != '')){
        
      this.rob.i6 = this.ins6ss;
      this.rob.s6 = "F";
      this.v5=false;
        console.log('entra12')
    }
  }
}}

///////instruccion 7
if(this.ciclos>1){
  if((this.rob.i1 == '' ) || (this.rob.i2 == '' ) || (this.rob.i3 == '' ) || (this.rob.i4 == '' ) || (this.rob.i5 == '' ) ||
  (this.rob.i6 == '' ) ){
    if((this.ins7ss == this.rob.uf1) && (this.ins7c != 0) && (this.ins7ss !='') || 
    (this.ins7ss == this.rob.uf2) && (this.ins7c != 0) && (this.ins7ss !='') ){
      if((this.rob.i1 == '' )  && (this.quedaste71 == false)){  
      this.rob.i1=this.ins7ss;
      this.rob.s1="X";
      this.ins7c--;
      console.log('entra15')
      }else{if((this.rob.i2 == '' ) && (this.quedaste72 == false)){ 
      this.rob.i2=this.ins7ss;
      this.rob.s2="X";
      this.ins7c--; }
      else {if((this.rob.i3 == '' ) && ((this.quedaste73 == false))){
      this.rob.i3=this.ins7ss;
      this.rob.s3="X";
      this.ins7c--}
      else {if ((this.rob.i4 == '' ) && ((this.quedaste74 == false))){
      this.rob.i4=this.ins7ss;
      this.rob.s4="X";
      this.ins7c--}
       else {if((this.rob.i5 == '' ) && ((this.quedaste75 == false))){
        this.rob.i5=this.ins7ss;
      this.rob.s5="X";
      this.ins7c--
       }else{if ((this.rob.i6 == '' ) && ((this.quedaste76 == false))){
        this.rob.i6=this.ins7ss;
        this.rob.s6="X";
        this.ins7c--
       }} }}}}
     }
    else{
      if((this.ins7c == 0) && (this.v6) && (this.ins7ss != '')){
        if((this.rob.i1 == '' ) || (this.rob.i2 == '' ) || (this.rob.i3 == '' ) || (this.rob.i4 == '' ) || (this.rob.i5 == '' ) ||
        (this.rob.i6 == '' )){
          if((this.rob.i1 == '' ) && (this.quedaste71 == false)){
                this.rob.i1 = this.ins7ss;
                this.rob.s1 = "F";
                this.v6=false;
                  console.log('entra12')
          }
        else{if((this.rob.i2 == '' ) && (this.quedaste72 == false)){
                  this.rob.i2 = this.ins7ss;
                  this.rob.s2 = "F";
                   this.v6=false;}
                  else {if((this.rob.i3 == '' ) && (this.quedaste73 == false)){
                  this.rob.i3 = this.ins7ss;
                  this.rob.s3 = "F";
                   this.v6=false;
                  }else {if ((this.rob.i4 == '' ) && (this.quedaste74 == false)){
                    this.rob.i4 = this.ins7ss;
                    this.rob.s4 = "F";
                    this.v6=false;
                  }else {if ((this.rob.i5 == '' ) && (this.quedaste75 == false)){
                    this.rob.i5 = this.ins7ss;
                    this.rob.s5 = "F";
                    this.v6=false;
                  } else{if ((this.rob.i6 == '' ) && (this.quedaste76 == false)){
                    this.rob.i6 = this.ins7ss;
                    this.rob.s6 = "F";
                    this.v6=false;
                  }}}}}}
  }
}
    }}}
       ///////instruccion 8
    if(this.ciclos>1){
      if((this.rob.i1 == '' ) || (this.rob.i2 == '' ) || (this.rob.i3 == '' ) || (this.rob.i4 == '' ) || (this.rob.i5 == '' ) ||
      (this.rob.i6 == '' ) ){
        if((this.ins8ss == this.rob.uf1) && (this.ins8c != 0) && (this.ins8ss !='') || 
        (this.ins8ss == this.rob.uf2) && (this.ins8c != 0) && (this.ins8ss !='') ){
          if((this.rob.i1 == '' ) && (this.quedaste81 == false)){
          this.rob.i1=this.ins8ss;
          this.rob.s1="X";
          this.ins8c--;
          console.log('entra15')
          }else{if((this.rob.i2 == '') && (this.quedaste82 == false)){ 
          this.rob.i2=this.ins8ss;
          this.rob.s2="X";
          this.ins8c--; }
          else {if((this.rob.i3 == '') && (this.quedaste83 == false) ){
          this.rob.i3=this.ins8ss;
          this.rob.s3="X";
          this.ins8c--}
          else {if((this.rob.i4 == '') && (this.quedaste84 == false)){
          this.rob.i4=this.ins8ss;
          this.rob.s4="X";
          this.ins8c--}  
          else{if ((this.rob.i5 == '') && (this.quedaste85 == false)) {
          this.rob.i5=this.ins8ss;
          this.rob.s5="X";
          this.ins8c--  }
          else{if ((this.rob.i6 == '') && (this.quedaste86 == false)){
          this.rob.i6=this.ins8ss;
          this.rob.s6="X";
          this.ins8c--}   
          }}}}}
         }
        else{
          if((this.ins8c == 0) && (this.v7) && (this.ins8ss != '')){
            if((this.rob.i1 == '' ) || (this.rob.i2 == '' ) || (this.rob.i3 == '' ) || (this.rob.i4 == '' ) || (this.rob.i5 == '' ) ||
            (this.rob.i6 == '' )){
              if((this.rob.i1 == '' ) && (this.quedaste81 == false)){
                    this.rob.i1 = this.ins8ss;
                    this.rob.s1 = "F";
                    this.v7=false;
                    console.log('entra12')
              }
            else{if((this.rob.i2 == '' ) && (this.quedaste82 == false)){
                      this.rob.i2 = this.ins8ss;
                      this.rob.s2 = "F";
                       this.v7=false;
                       }else {if((this.rob.i3 == '' ) && (this.quedaste83 == false)){
                       this.rob.i3 = this.ins8ss;
                       this.rob.s3 = "F";
                        this.v7=false;}
                        else {if ((this.rob.i4 == '' ) && (this.quedaste84 == false)){
                          this.rob.i4 = this.ins8ss;
                          this.rob.s4 = "F";
                           this.v7=false;
                        }else {if ((this.rob.i5 == '' ) && (this.quedaste85 == false)){
                          this.rob.i5 = this.ins8ss;
                          this.rob.s5 = "F";
                           this.v7=false;
                        }else {if ((this.rob.i6 == '' ) && (this.quedaste86 == false)){
                          this.rob.i6 = this.ins8ss;
                          this.rob.s6 = "F";
                           this.v7=false;

                        } } }}}}
      }
    }
        }}}

        ////instruccion 9
        if(this.ciclos>1){
          if((this.rob.i1 == '' ) || (this.rob.i2 == '' ) || (this.rob.i3 == '' ) || (this.rob.i4 == '' ) || (this.rob.i5 == '' ) ||
          (this.rob.i6 == '' ) ){
            if((this.ins9ss == this.rob.uf1) && (this.ins9c != 0) && (this.ins9ss !='') || 
            (this.ins9ss == this.rob.uf2) && (this.ins9c != 0) && (this.ins9ss !='') ){
              if((this.rob.i1 == '' ) && (this.quedaste91 == false)){
              this.rob.i1=this.ins9ss;
              this.rob.s1="X";
              this.ins9c--;
              
              }else{if((this.rob.i2 == '') && (this.quedaste92 == false)){ 
              this.rob.i2=this.ins9ss;
              this.rob.s2="X";
              this.ins9c--; }
              else {if((this.rob.i3 == '') && (this.quedaste93 == false) ){
              this.rob.i3=this.ins9ss;
              this.rob.s3="X";
              this.ins9c--}
              else {if((this.rob.i4 == '') && (this.quedaste94 == false)){
              this.rob.i4=this.ins9ss;
              this.rob.s4="X";
              this.ins9c--}  
              else{if ((this.rob.i5 == '') && (this.quedaste95 == false)) {
              this.rob.i5=this.ins9ss;
              this.rob.s5="X";
              this.ins9c--  }
              else{if ((this.rob.i6 == '') && (this.quedaste96 == false)){
              this.rob.i6=this.ins9ss;
              this.rob.s6="X";
              this.ins9c--}   
              }}}}}
             }
            else{
              if((this.ins9c == 0) && (this.v8) && (this.ins9ss != '')){
                if((this.rob.i1 == '' ) || (this.rob.i2 == '' ) || (this.rob.i3 == '' ) || (this.rob.i4 == '' ) || (this.rob.i5 == '' ) ||
                (this.rob.i6 == '' )){
                  if((this.rob.i1 == '' ) && (this.quedaste91 == false)){
                        this.rob.i1 = this.ins9ss;
                        this.rob.s1 = "F";
                        this.v8=false;
                        
                  }
                else{if((this.rob.i2 == '' ) && (this.quedaste92 == false)){
                          this.rob.i2 = this.ins9ss;
                          this.rob.s2 = "F";
                           this.v8=false;
                           }else {if((this.rob.i3 == '' ) && (this.quedaste93 == false)){
                           this.rob.i3 = this.ins9ss;
                           this.rob.s3 = "F";
                            this.v8=false;}
                            else {if ((this.rob.i4 == '' ) && (this.quedaste94 == false)){
                              this.rob.i4 = this.ins9ss;
                              this.rob.s4 = "F";
                               this.v8=false;
                            }else {if ((this.rob.i5 == '' ) && (this.quedaste95 == false)){
                              this.rob.i5 = this.ins9ss;
                              this.rob.s5 = "F";
                               this.v8=false;
                            }else {if ((this.rob.i6 == '' ) && (this.quedaste96 == false)){
                              this.rob.i6 = this.ins9ss;
                              this.rob.s6 = "F";
                               this.v8=false;
    
                            } } }}}}
          }
        }
            }}}

    
      
    
       if(this.ciclos>1){
         if((this.ins3c != 0) && (this.ins3ss != this.rob.uf1) && (this.ins3ss != this.rob.uf2) ){
              this.rob.e1= this.ins3ss;
              this.rob.i3 = this.ins3ss;
              this.rob.s3 = "I";
              console.log('entra13')
        }
        if((this.ins4c != 0) && (this.ins4ss != this.rob.uf1) && (this.ins4ss != this.rob.uf2) ){
          this.rob.e2= this.ins4ss;
          this.rob.i4 = this.ins4ss;
          this.rob.s4 = "I";
          console.log('entra14')
    }}
    if(this.ciclos > 2){
    if((this.ins5c != 0) && (this.ins5ss != this.rob.uf1) && (this.ins5ss != this.rob.uf2) ){
        this.rob.e3= this.ins5ss;
      this.rob.i5 = this.ins5ss;
      this.rob.s5 = "I";
      console.log('entra15')
        }
        if((this.ins6c != 0) && (this.ins6ss != this.rob.uf1) && (this.ins6ss != this.rob.uf2) ){
          this.rob.e4= this.ins6ss;
          this.rob.i6 = this.ins6ss;
          this.rob.s6 = "I";
          console.log('entra16')
        }
      }


      ///////instruccion 7
      if(this.ciclos > 3){
        if((this.ins7c != 0) && (this.ins7ss != this.rob.uf1) && (this.ins7ss != this.rob.uf2) ){
          if((this.rob.e1 == '') || (this.rob.e2 == '')  || (this.rob.e3 == '') || (this.rob.e4 == '')){
            if((this.rob.e1 == '')){
          this.rob.e1= this.ins7ss;
          this.analizar7();
          /* if((this.rob.i1 == '') || (this.rob.i2 == '')  || (this.rob.i3 == '') || (this.rob.i4 == '') ||
          (this.rob.i5 == '') || (this.rob.i6 == '')){
            if((this.rob.i1 == '') && (this.quedaste71 == false)){
            this.rob.i1 = this.ins7ss;
            this.rob.s1 = "I";
            this.quedaste72=true;
            this.quedaste73=true;
            this.quedaste74=true;
            this.quedaste75=true;
            this.quedaste76=true;
        }else{if((this.rob.i2 == '') && (this.quedaste72 == false)){
          this.rob.i2 = this.ins7ss;
          this.rob.s2 = "I";
          this.quedaste71=true;
          this.quedaste73=true;
          this.quedaste74=true;
          this.quedaste75=true;
          this.quedaste76=true;
      }else{if((this.rob.i3 == '') && (this.quedaste73 == false)){
          this.rob.i3 = this.ins7ss;
          this.rob.s3 = "I";
          this.quedaste71=true;
          this.quedaste72=true;
          this.quedaste74=true;
          this.quedaste75=true;
          this.quedaste76=true;
    }else {if ((this.rob.i4 == '') && (this.quedaste74 == false)){
      this.rob.i4 = this.ins7ss;
      this.rob.s4 = "I";
      this.quedaste71=true;
      this.quedaste72=true;
      this.quedaste73=true;
      this.quedaste75=true;
      this.quedaste76=true;
    }else {if((this.rob.i5 == '') && (this.quedaste75 == false)){
      this.rob.i5 = this.ins7ss;
      this.rob.s5 = "I";
      this.quedaste71=true;
      this.quedaste72=true;
      this.quedaste73=true;
      this.quedaste74=true;
      this.quedaste76=true;
    }else {if ((this.rob.i6 == '') && (this.quedaste76 == false)){
      this.rob.i6 = this.ins7ss;
      this.rob.s6 = "I";
      this.quedaste71=true;
      this.quedaste72=true;
      this.quedaste73=true;
      this.quedaste74=true;
      this.quedaste75=true;

    }} }}}}
          } */
            }else {if((this.rob.e2 == '')){
              this.rob.e2= this.ins7ss;
              this.analizar7();
              /* if((this.rob.i1 == '') || (this.rob.i2 == '')  || (this.rob.i3 == '') ){
                if((this.rob.i1 == '') && (this.quedaste71 == false)){
                  this.rob.i1 = this.ins7ss;
                  this.rob.s1 = "I";
                  this.quedaste72=true;
                  this.quedaste73=true;
                  this.quedaste74=true;
                  this.quedaste75=true;
                  this.quedaste76=true;
              }else{if((this.rob.i2 == '') && (this.quedaste72 == false)){
                this.rob.i2 = this.ins7ss;
                this.rob.s2 = "I";
                this.quedaste71=true;
                this.quedaste73=true;
                this.quedaste74=true;
                this.quedaste75=true;
                this.quedaste76=true;
            }else{if((this.rob.i3 == '') && (this.quedaste73 == false)){
                this.rob.i3 = this.ins7ss;
                this.rob.s3 = "I";
                this.quedaste71=true;
                this.quedaste72=true;
                this.quedaste74=true;
                this.quedaste75=true;
                this.quedaste76=true;
          }else {if ((this.rob.i4 == '') && (this.quedaste74 == false)){
            this.rob.i4 = this.ins7ss;
            this.rob.s4 = "I";
            this.quedaste71=true;
            this.quedaste72=true;
            this.quedaste73=true;
            this.quedaste75=true;
            this.quedaste76=true;
          }else {if((this.rob.i5 == '') && (this.quedaste75 == false)){
            this.rob.i5 = this.ins7ss;
            this.rob.s5 = "I";
            this.quedaste71=true;
            this.quedaste72=true;
            this.quedaste73=true;
            this.quedaste74=true;
            this.quedaste76=true;
          }else {if ((this.rob.i6 == '') && (this.quedaste76 == false)){
            this.rob.i6 = this.ins7ss;
            this.rob.s6 = "I";
            this.quedaste71=true;
            this.quedaste72=true;
            this.quedaste73=true;
            this.quedaste74=true;
            this.quedaste75=true;
      
          }} }}}}
              } */
            }else {if (this.rob.e3 == ''){
              this.rob.e3= this.ins7ss;
              this.analizar7();
            }else{if (this.rob.e4 == ''){
              this.rob.e4= this.ins7ss;
              this.analizar7();
            }}}
          }
          }
        }
       ///////instruccion 8
        if((this.ins8c != 0) && (this.ins8ss != this.rob.uf1) && (this.ins8ss != this.rob.uf2) ){
          if((this.rob.e1 == '') || (this.rob.e2 == '')  || (this.rob.e3 == '') || (this.rob.e4 == '')){
            if((this.rob.e1 == '')){
                this.rob.e1= this.ins8ss;
                this.analizar8();
         /*  if((this.rob.i1 == '') || (this.rob.i2 == '')  || (this.rob.i3 == '') || (this.rob.i4 == '') ||
          (this.rob.i5 == '') || (this.rob.i6 == '')){
            if((this.rob.i1 == '') && (this.quedaste81 == false)){
              this.rob.i1 = this.ins8ss;
              this.rob.s1 = "I";
              this.quedaste82=true;
              this.quedaste83=true;
              this.quedaste84=true;
              this.quedaste85=true;
              this.quedaste86=true;
            }else {if((this.rob.i2 == '')  && (this.quedaste82 == false)){
                      this.rob.i2 = this.ins8ss;
                      this.rob.s2 = "I";
                      this.quedaste81=true;
                      this.quedaste83=true;
                      this.quedaste84=true;
                      this.quedaste85=true;
                      this.quedaste86=true;
                   }else{if((this.rob.i3 == '')  && (this.quedaste83 == false)){
                            this.rob.i3 = this.ins8ss;
                            this.rob.s3 = "I";
                            this.quedaste81=true;
                            this.quedaste82=true;
                            this.quedaste84=true;
                            this.quedaste85=true;
                            this.quedaste86=true;
                   }else {if((this.rob.i4 == '')  && (this.quedaste84 == false)){
                            this.rob.i4 = this.ins8ss;
                            this.rob.s4 = "I";
                            this.quedaste81=true;
                            this.quedaste82=true;
                            this.quedaste83=true;
                            this.quedaste85=true;
                            this.quedaste86=true;
                   }else {if((this.rob.i5 == '')  && (this.quedaste85 == false)){
                            this.rob.i5 = this.ins8ss;
                            this.rob.s5 = "I";
                            this.quedaste81=true;
                            this.quedaste82=true;
                            this.quedaste83=true;
                            this.quedaste84=true;
                            this.quedaste86=true;
                   }else {if ((this.rob.i6 == '')  && (this.quedaste86 == false)){
                          this.rob.i6 = this.ins8ss;
                          this.rob.s6 = "I";
                          this.quedaste81=true;
                          this.quedaste82=true;
                          this.quedaste83=true;
                          this.quedaste84=true;
                          this.quedaste85=true;
                   } }} }}}
             } */
             }else {if((this.rob.e2 == '') ){
                      
                       this.rob.e2= this.ins8ss;
                       this.analizar8();
                    /* if((this.rob.i1 == '') || (this.rob.i2 == '')  || (this.rob.i3 == '') ){
                        if((this.rob.i1 == '')  && (this.quedaste81 == false)){
                           this.rob.i1 = this.ins8ss;
                           this.rob.s1 = "I";
                           this.quedaste82=true;
                           this.quedaste83=true;
                           this.quedaste84=true;
                           this.quedaste85=true;
                           this.quedaste86=true;
                           }
                   else { if ((this.rob.i2 == '')  && (this.quedaste82 == false)){
                             this.rob.i2 = this.ins8ss;
                             this.rob.s2 = "I";
                             this.quedaste81=true;
                             this.quedaste83=true;
                             this.quedaste84=true;
                             this.quedaste85=true;
                             this.quedaste86=true;
                             }else{ if ((this.rob.i3 == '')  && (this.quedaste83 == false)){
                                    this.rob.i3 = this.ins8ss;
                                    this.rob.s3 = "I";
                                    this.quedaste81=true;
                                    this.quedaste82=true;
                                    this.quedaste84=true;
                                    this.quedaste85=true;
                                    this.quedaste86=true;
                             }else {if ((this.rob.i4 == '')  && (this.quedaste84 == false)){
                                    this.rob.i4 = this.ins8ss;
                                    this.rob.s4 = "I";
                                    this.quedaste81=true;
                                    this.quedaste82=true;
                                    this.quedaste83=true;
                                    this.quedaste85=true;
                                    this.quedaste86=true;
                             }else{if ((this.rob.i5 == '')  && (this.quedaste85 == false)){
                                    this.rob.i5 = this.ins8ss;
                                    this.rob.s5 = "I";
                                    this.quedaste81=true;
                                    this.quedaste82=true;
                                    this.quedaste83=true;
                                    this.quedaste84=true;
                                    this.quedaste86=true;
                             }else {if ((this.rob.i6 == '')  && (this.quedaste86 == false)){
                                    this.rob.i6 = this.ins8ss;
                                    this.rob.s6 = "I";
                                    this.quedaste81=true;
                                    this.quedaste82=true;
                                    this.quedaste83=true;
                                    this.quedaste84=true;
                                    this.quedaste85=true;
                             }} } }}
                        }
              } */
            } else {if ((this.rob.e3 == '') && (this.rob.e1 != this.ins8ss) && (this.rob.e2 != this.ins8ss) ){
              
                        this.rob.e3= this.ins8ss;
                       this.analizar8();
            }else {if ((this.rob.e4 == '') && (this.rob.e1 != this.ins8ss) && (this.rob.e2 != this.ins8ss)  ){
                        this.rob.e4= this.ins8ss;
                       this.analizar8();
            }}}
          }
          }
        }

        ///// intruccion 9
        if((this.ins9c != 0) && (this.ins9ss != this.rob.uf1) && (this.ins9ss != this.rob.uf2) ){
          if((this.rob.e1 == '') || (this.rob.e2 == '')  || (this.rob.e3 == '') ||  (this.rob.e4 == '') ){
            if((this.rob.e1 == '') ){
          this.rob.e1= this.ins9ss;
          this.analizar9();
          //if((this.rob.i1 == '') || (this.rob.i2 == '')  || (this.rob.i3 == '') || (this.rob.i4 == '') || (this.rob.i5=='')
          //|| (this.rob.i6 == '') ){
            
            /* if((this.rob.i1 == '') && (this.quedaste91 == false)){
              this.rob.i1 = this.ins9ss;
              this.rob.s1 = "I";
              this.quedaste92=true;
              this.quedaste93=true;
              this.quedaste94=true;
              this.quedaste95=true;
              this.quedaste96=true;
            }else {if((this.rob.i2 == '')  && (this.quedaste92 == false)){
                      this.rob.i2 = this.ins9ss;
                      this.rob.s2 = "I";
                      this.quedaste91=true;
                      this.quedaste93=true;
                      this.quedaste94=true;
                      this.quedaste95=true;
                      this.quedaste96=true;
                   }else{if((this.rob.i3 == '')  && (this.quedaste93 == false)){
                            this.rob.i3 = this.ins9ss;
                            this.rob.s3 = "I";
                            this.quedaste91=true;
                            this.quedaste92=true;
                            this.quedaste94=true;
                            this.quedaste95=true;
                            this.quedaste96=true;
                   }else {if((this.rob.i4 == '')  && (this.quedaste94 == false)){
                            this.rob.i4 = this.ins9ss;
                            this.rob.s4 = "I";
                            this.quedaste91=true;
                            this.quedaste92=true;
                            this.quedaste93=true;
                            this.quedaste95=true;
                            this.quedaste96=true;
                   }else {if((this.rob.i5 == '')  && (this.quedaste95 == false)){
                            this.rob.i5 = this.ins9ss;
                            this.rob.s5 = "I";
                            this.quedaste91=true;
                            this.quedaste92=true;
                            this.quedaste93=true;
                            this.quedaste94=true;
                            this.quedaste96=true;
                   }else {if ((this.rob.i6 == '')  && (this.quedaste96 == false)){
                          this.rob.i6 = this.ins9ss;
                          this.rob.s6 = "I";
                          this.quedaste91=true;
                          this.quedaste92=true;
                          this.quedaste93=true;
                          this.quedaste94=true;
                          this.quedaste95=true;
                   } }} }}} */
             //}
             }else {if((this.rob.e2 == '')){
                       this.rob.e2= this.ins9ss;
                       this.analizar9();
                    /* if((this.rob.i1 == '') || (this.rob.i2 == '')  || (this.rob.i3 == '') ){
                        if((this.rob.i1 == '')  && (this.quedaste91 == false)){
                           this.rob.i1 = this.ins9ss;
                           this.rob.s1 = "I";
                           this.quedaste92=true;
                           this.quedaste93=true;
                           this.quedaste94=true;
                           this.quedaste95=true;
                           this.quedaste96=true;
                           }
                   else { if ((this.rob.i2 == '')  && (this.quedaste92 == false)){
                             this.rob.i2 = this.ins9ss;
                             this.rob.s2 = "I";
                             this.quedaste91=true;
                             this.quedaste93=true;
                             this.quedaste94=true;
                             this.quedaste95=true;
                             this.quedaste96=true;
                             }else{ if ((this.rob.i3 == '')  && (this.quedaste93 == false)){
                                    this.rob.i3 = this.ins9ss;
                                    this.rob.s3 = "I";
                                    this.quedaste91=true;
                                    this.quedaste92=true;
                                    this.quedaste94=true;
                                    this.quedaste95=true;
                                    this.quedaste96=true;
                             }else {if ((this.rob.i4 == '')  && (this.quedaste94 == false)){
                                    this.rob.i4 = this.ins9ss;
                                    this.rob.s4 = "I";
                                    this.quedaste91=true;
                                    this.quedaste92=true;
                                    this.quedaste93=true;
                                    this.quedaste95=true;
                                    this.quedaste96=true;
                             }else{if ((this.rob.i5 == '')  && (this.quedaste95 == false)){
                                    this.rob.i5 = this.ins9ss;
                                    this.rob.s5 = "I";
                                    this.quedaste91=true;
                                    this.quedaste92=true;
                                    this.quedaste93=true;
                                    this.quedaste94=true;
                                    this.quedaste96=true;
                             }else {if ((this.rob.i6 == '')  && (this.quedaste96 == false)){
                                    this.rob.i6 = this.ins9ss;
                                    this.rob.s6 = "I";
                                    this.quedaste91=true;
                                    this.quedaste92=true;
                                    this.quedaste93=true;
                                    this.quedaste94=true;
                                    this.quedaste95=true;
                             }} } }}
                        }
              } */
            }else {if((this.rob.e3 == '')){
              this.rob.e3= this.ins9ss;
              this.analizar9();
           /* if((this.rob.i1 == '') || (this.rob.i2 == '')  || (this.rob.i3 == '') || (this.rob.i4 == '') || (this.rob.i5 == '')
           || (this.rob.i6 == '') ){
               if((this.rob.i1 == '')  && (this.quedaste91 == false)){
                  this.rob.i1 = this.ins9ss;
                  this.rob.s1 = "I";
                  this.quedaste92=true;
                  this.quedaste93=true;
                  this.quedaste94=true;
                  this.quedaste95=true;
                  this.quedaste96=true;
                  }
          else { if ((this.rob.i2 == '')  && (this.quedaste92 == false)){
                    this.rob.i2 = this.ins9ss;
                    this.rob.s2 = "I";
                    this.quedaste91=true;
                    this.quedaste93=true;
                    this.quedaste94=true;
                    this.quedaste95=true;
                    this.quedaste96=true;
                    }else{ if ((this.rob.i3 == '')  && (this.quedaste93 == false)){
                           this.rob.i3 = this.ins9ss;
                           this.rob.s3 = "I";
                           this.quedaste91=true;
                           this.quedaste92=true;
                           this.quedaste94=true;
                           this.quedaste95=true;
                           this.quedaste96=true;
                    }else {if ((this.rob.i4 == '')  && (this.quedaste94 == false)){
                           this.rob.i4 = this.ins9ss;
                           this.rob.s4 = "I";
                           this.quedaste91=true;
                           this.quedaste92=true;
                           this.quedaste93=true;
                           this.quedaste95=true;
                           this.quedaste96=true;
                    }else{if ((this.rob.i5 == '')  && (this.quedaste95 == false)){
                           this.rob.i5 = this.ins9ss;
                           this.rob.s5 = "I";
                           this.quedaste91=true;
                           this.quedaste92=true;
                           this.quedaste93=true;
                           this.quedaste94=true;
                           this.quedaste96=true;
                    }else {if ((this.rob.i6 == '')  && (this.quedaste96 == false)){
                           this.rob.i6 = this.ins9ss;
                           this.rob.s6 = "I";
                           this.quedaste91=true;
                           this.quedaste92=true;
                           this.quedaste93=true;
                           this.quedaste94=true;
                           this.quedaste95=true;
                    }} } }}
               }
     } */
   }else {if (this.rob.e4 == ''){
    this.rob.e4= this.ins9ss;
    this.analizar9();
   }}
          }
          }
        }
      }


      }
       
    }
         

       
     

    }

    if(this.ciclos > 3){

      if(this.ins7ss != ''){
        if((this.rob.e1 != this.ins7ss) && (this.rob.e2 != this.ins7ss) && (this.rob.e3 != this.ins7ss)
        && (this.rob.e4 != this.ins7ss) && (this.rob.e1 != '') && (this.rob.e2 != '') && (this.rob.e3 != '') && (this.rob.e4 != '')){
          this.rob.d1=this.ins7ss;
        }
      }

      if(this.ins8ss != ''){
        if((this.rob.e1 != this.ins8ss) && (this.rob.e2 != this.ins8ss) && (this.rob.e3 != this.ins8ss)
        && (this.rob.e4 != this.ins8ss) && (this.rob.e1 != '') && (this.rob.e2 != '') && (this.rob.e3 != '') && (this.rob.e4 != '')){
          this.rob.d2=this.ins8ss;
        }
      }

      if((this.ins9ss != '') && (this.robb[this.ciclos-1].d1 != this.robb[this.ciclos-1].e1) && (this.robb[this.ciclos-1].d1 != this.robb[this.ciclos-1].e2)
      && (this.robb[this.ciclos-1].d1 != this.robb[this.ciclos-1].e3) && (this.robb[this.ciclos-1].d1 != this.robb[this.ciclos-1].e4)){
        if((this.rob.e1 != this.ins9ss) && (this.rob.e2 != this.ins9ss) && (this.rob.e3 != this.ins9ss)
        && (this.rob.e4 != this.ins9ss) && (this.rob.e1 != '') && (this.rob.e2 != '') && (this.rob.e3 != '') && (this.rob.e4 != '')){
          this.rob.d1=this.ins9ss;
        }
      }
    }
  }

  
  //creamos un nuevo objeto para el siguiente cilo
  siguienteCiclo(){
    this.rob = new Object;

    this.rob.e1='';
    this.rob.e2='';
    this.rob.e3='';
    this.rob.e4='';
    this.rob.uf1='';
    this.rob.uf2='';
    this.rob.i1='';
    this.rob.s1='';
    this.rob.i2='';
    this.rob.s2='';
    this.rob.i3='';
    this.rob.s3='';
    this.rob.i4='';
    this.rob.s4='';
    this.rob.i5='';
    this.rob.s5='';
    this.rob.i6='';
    this.rob.s6='';

    this.agregarDespacho();
    this.agregarER();
    this.agregarUf1();
    this.agregarRob();
    this.robb.push(this.rob);
    
    
    this.ciclos++;
    console.log(this.ciclos)

  }



}


