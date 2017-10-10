import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [PeticionesService]
})
export class CochesComponent implements OnInit {
  public coche: Coche;
  public coches: Array<Coche>
  constructor(
      private _peticionesService: PeticionesService
  ) {
      this.coche=new Coche("","","");
      this.coches=[
        new Coche("ford","1236","rojo"),
        new Coche("chevrolet","126","asdf")
      ];
   }
    
  ngOnInit() {
    this._peticionesService.getArticulos()
      .subscribe(
        result => {
          console.log(result);
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
        }
    
    );
  }
  
  onSubmit(){
    this.coches.push(this.coche);
    this.coche=new Coche("","","");
  }

}
