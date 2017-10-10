import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public titulo='Pagina de contacto de la web';
  public parametro;
  
  constructor( 
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
   
  ngOnInit() {
    //Funcion de callback =>
    /*** Recive los parametros*/
    this._route.params.forEach((params: Params) => {
        this.parametro=params['page'];
    });
  }
  
  public redirigir(){
    this._router.navigate(['/contacto','holi :3']);// te redirige a otra pagina con parametros por get
  }
   public redirigir2(){
    this._router.navigate(['/']);// Te redirige a otra pagina
  }

}
