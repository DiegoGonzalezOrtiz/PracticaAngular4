import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holi',
  templateUrl: './holi.component.html',
  styleUrls: ['./holi.component.css']
})
export class HoliComponent implements OnInit {
public administrador =true;
  public texto="hello";
  constructor() { }

  ngOnInit() {
  }
  cambiar(){
    if(this.administrador){
      this.administrador=false;
    }else
      {
      this.administrador=true
    }
  }
  
  recibirDatos(event){
    console.log(event);
    this.texto=event.texto;
  }

}
