import { element } from 'protractor';
import { PlanesService } from './../servicios/planes.service';
import { Component, OnInit } from '@angular/core';
import { Plan } from '../servicios/plan';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  planesAny:Plan;
  constructor(private _http:PlanesService) {

  }

  ngOnInit(): void {

    this._http.getPlan(1).subscribe( data => {
        this.planesAny=data;
    })

  }

}
