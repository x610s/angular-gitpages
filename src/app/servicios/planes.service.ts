import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

 // url2: string = 'https://angular-api-hotel.herokuapp.com/api/planes'
  url:string = 'http://localhost:8080/planes'
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' }) //tipo de respuesta
  constructor(private _http:HttpClient) { }



  getClientes(){
    return this._http.get(this.url, {headers: this.httpHeaders});
  }
  getClientesJson(): any {
   return this._http.get<any>(this.url, {headers: this.httpHeaders});
 }
}
