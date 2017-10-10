import { Component } from '@angular/core';
import { Empleado } from './empleadoModel'
@Component({
    selector: 'Empleado',
    templateUrl: './Empleado.component.html'
})

export class EmpleadoComponent{
  public color;
  public backgroundcolor;
  public empleado:Empleado;
  public empleadosList:Array<Empleado>;
  public nombre_componente='Componente de Empleado';
  public lista_Empleados:String='Diego,Franco, Dennis y Jaime';
  public numero:number=7;
  public bool:boolean=true;
  public texto:String;
  public lista:Array<any>=['Carpintero',true,3];
  private comodin:any='Cualquier cosa =D';

  constructor(){
    this.empleado=new Empleado('holi',45,'lala',true);
    this.empleadosList=[
      new Empleado('holi',45,'lala',true),
      new Empleado('hi',25,'lala',false),
      new Empleado('kha?',42,'lala',true)

    ];
    console.log(this.empleado);
    console.log(this.comodin);
    console.log(this.lista);
    this.comodin=['LALA',true,3];


  }
  public cambiar(valor){
    this.empleadosList[2].contratado=!valor;

  }
  holaMundo(nombre){
    nombre="juan";
    var uno:number=2;
    console.log(nombre);
    console.log(uno);
    if(uno==2){
      let uno:number=5;
      console.log(uno);
    }
    if(uno==2){
      var uno:number=3;
      console.log(uno);
    }
    console.log(uno);
  }

  ngOnInit(){
    this.holaMundo("holi");
    console.log(this.comodin);
  }
  public setColor(backgroundcolor,color){
    this.color=color;
    this.backgroundcolor=backgroundcolor;
  }
  public log(){
    console.log(this.texto);
  }
  

}
