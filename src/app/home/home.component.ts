import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
  public titulo="Pagina principal";
  public lista_ropa:Array<String>;
  public prenda:String;
  public fecha;
  constructor(
    private _ropaService: RopaService
    
  ) { 
    this.fecha=new Date();
  }

  ngOnInit() {
    console.log(this._ropaService.prueba(this.lista_ropa));
    this.lista_ropa=this ._ropaService.getRopa();
  }
  guardarPrenda(){
     this.lista_ropa=this._ropaService.addRopa(this.prenda);
    this.prenda="";
  }
  eliminar(index){
    this ._ropaService.deleteRopa(index);
  }
}