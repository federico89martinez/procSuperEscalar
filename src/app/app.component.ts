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

  ins1ss: string = '';
  ins1c: number = 0;

  ins2ss: string = '';
  ins2c:number = 0;

  ins3ss: string = '';
  ins3c:number = 0;

  v : boolean = true;
  v1: boolean = true;
  v2: boolean = true;
  entra3: boolean = true;
  entra9: boolean = true;

  ciclosAdd: number = 3;
  ciclosSubd: number = 5;
  ciclosMuld: number = 4;
  ciclosDiv: number = 1;


  agregarDespacho(){
    if(this.ciclos == -1){      
       
       this.ins1ss=this.instrucciones2[this.i].ss;
       this.ins1c =this.instrucciones2[this.i].c;
       this.instrucciones2.splice(this.i,1);
       this.rob.d1=this.ins1ss;
       this.rob.uf1='';      
       this.ciclos++;
       if(this.instrucciones2.length == 0){
       //this.robb.push(this.rob); 
       }

       if(this.instrucciones2.length != 0){
        this.ins2ss=this.instrucciones2[this.i].ss;
        this.ins2c= this.instrucciones2[this.i].c
        this.rob.d2=this.ins2ss;
        this.instrucciones2.splice(this.i,1);
        this.rob.uf2='';
        //this.robb.push(this.rob); 
       }
    }
     if(this.ciclos > 0) {
       if(this.instrucciones2.length != 0){
        this.ins3ss=this.instrucciones2[this.i].ss;
        this.ins3c=this.instrucciones2[this.i].c;
        this.rob.d1=this.ins3ss;
        this.instrucciones2.splice(this.i,1);
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
       if(this.ins3ss != ''){
        if((this.robb[this.ciclos-1].e1 == this.robb[this.ciclos-1].uf1 ) && (this.ins3ss != this.robb[this.ciclos-1].uf1)){
           this.rob.e1=this.ins3ss;
           if((this.rob.i1 == '') || (this.rob.i2 == '') || (this.rob.i3 == '')){
            if(this.rob.i1 == '' ){}
            if(this.rob.i2 == '' ){}
            if(this.rob.i3 == '' ){this.rob.i3=this.ins3ss; this.rob.s3="I"; this.rob.e1=this.ins3ss; console.log('e1')}

           }
        }
        /* else{if(this.robb[this.ciclos-1].e1 != this.robb[this.ciclos-1].uf1){
          if(this.rob.i3 == '' ){this.rob.i3=this.ins3ss; this.rob.s3="I"; this.rob.e1=this.ins3ss};
        } */

        
      }
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
    }

  }
  

  agregarRob(){
    if (this.ciclos > 0) {

     if(this.rob.i1 == '') {
       
       if(this.ins1c != 0){
        this.ins1c--;
        this.rob.i1 = this.rob.uf1;
        this.rob.s1 = "X";
      //if(this.ins2ss == ''){ 
        if((this.ins2c == 0) && (this.ins3c == 0)) {
          //this.robb.push(this.rob);
          console.log('entra1')
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
           
          //this.robb.push(this.rob);
          console.log('entra3')
          
          
        }
        else{
        if((this.ins2c == 0) && (this.v1)){
          this.rob.i2 = this.ins2ss;
          this.rob.s2 = "F";
          this.v1=false;
          if(this.rob.s2 == "F"){
            if((this.ins3ss == '')&&(this.ins2c != 0)){
            //this.robb.push(this.rob);
            console.log('entra4')
            }
            if((this.ins3ss == '')&&(this.ins1c == 0)){
              console.log('entra5')
              //this.robb.push(this.rob);
              }
              /* if(this.ins3ss != ''){
                console.log('entra6')
                this.robb.push(this.rob);
              } */
          
          }
          
      } 

        }
     }

       if((this.rob.i1 == '') || (this.rob.i2 == '') || (this.rob.i3 == '')){
        if(this.rob.i1 == '' ){
          if((this.ins3ss == this.rob.uf1)  && (this.ins3c != 0) && (this.ins1c != 0)){
            this.rob.i1=this.ins3ss;
            this.rob.i1="X";
            this.ins3c--;
            //this.robb.push(this.rob);
            console.log('entra7')
              
          }
          
        }
        if(this.rob.i2 == '' ){
          if((this.ins3ss == this.rob.uf1)  && (this.ins3c != 0) && (this.ins1c != 0)){
            this.rob.i2=this.ins3ss;
            this.rob.s2="X";
            this.ins3c--;
            //this.robb.push(this.rob);
            console.log('entra8')
            
              
          }
          
        }



       if(this.rob.i3 == '' ){
         if((this.ins3ss == this.rob.uf1) && (this.ins3c != 0) || (this.ins3ss == this.rob.uf2) && (this.ins3c != 0) ){
           this.rob.i3=this.ins3ss;
           this.rob.s3="X";
           this.ins3c--;
           
           //this.robb.push(this.rob);
           console.log('entra9')
           
             
         }
        
          else{
          if((this.ins3c == 0) && (this.v2) && (this.ins3ss != '')){
            
          this.rob.i3 = this.ins3ss;
          this.rob.s3 = "F";
          this.v2=false;
          if(this.rob.s3 == "F"){
            
            //this.robb.push(this.rob);
            console.log('entra10')
          
            
          }
        }
      }
    }
        if((this.ins3c != 0) && (this.ins3ss != this.rob.uf1) && (this.ins3ss != this.rob.uf2)){
              this.rob.i3 = this.ins3ss;
              this.rob.s3 = "I";
        }
      } 
         

       
     

    }
  }

  
  
  siguienteCiclo(){
    this.rob = new Object;

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


