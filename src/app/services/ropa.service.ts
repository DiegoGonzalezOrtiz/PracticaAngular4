import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  public nombre_prenda="Pantalones vaqueros";
  public coleccion_ropa=['pantalones blancos', 'camisa roja'];
  constructor() { }

  
  prueba(nombre_prenda){
    return nombre_prenda;
  }
  
    
    public addRopa(prenda){
    this.coleccion_ropa.push(prenda);
    return this.getRopa();
  }
  public getRopa():Array<String>{
    return this.coleccion_ropa
    }
  deleteRopa(index:number){
    this.coleccion_ropa.splice(index,1);
    this.getRopa();
  }
}


