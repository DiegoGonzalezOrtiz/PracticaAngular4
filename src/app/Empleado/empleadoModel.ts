export class Empleado{
/*  public nombre:string;
  public edad:number;
  constructor(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
  }*/


  constructor(
      public nombre:string,
      public edad:number,
      public cargo:string,
      public contratado:boolean
  ){}

  public toString(){
    return " nombre: "+this.nombre+
            " edad: "+this.edad+
            " cargo: "+this.cargo+
            " contratado: "+this.contratado;
  }

  public traduceContratado(){
    return (this.contratado)?'Si':'No';
  }
}
