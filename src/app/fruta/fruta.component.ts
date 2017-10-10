import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent{
  public nombre_componente='Componente de fruta';
  public lista_frutas='Naranja,Manzana, Pera y Sandia';
}
