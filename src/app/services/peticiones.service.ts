import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class PeticionesService {
  public url = 'http://localhost:8080/MundoCredito/usuario/';
  constructor(
    private _http: Http
  ) {

  }

  getPrueba() {
    return "holi";
  }
  getArticulos() {
    return this._http.get(this.url)
      .map(res => res.json());
  }

}
