import { PlanesService } from './../servicios/planes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  planes:[] =[];
  planesAny:any[] =[]
  constructor(private _http:PlanesService) {
    this._http.getClientes().subscribe((data:any) =>{
        this.planesAny= data;
    })
  }

  ngOnInit(): void {
  }

}
