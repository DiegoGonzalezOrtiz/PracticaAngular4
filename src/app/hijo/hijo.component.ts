import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit{
  public title:string;
  @Input() p1:string;
  @Input('texto') p2:string;
  
  @Output() desde_el_hijo= new EventEmitter();
  
  constructor() {
    this.title="Soy el hijo xD"
  
   }
  ngOnInit() {
    this.enviar();
  }
  enviar(){
    this.desde_el_hijo.emit({ nombre: 'Diego Gonzalez',
                              web:'www.diegoGonzalez.com',
                              hello: 'hola',
                              texto: this.p2});
  }

  
}
