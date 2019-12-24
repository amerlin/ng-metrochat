import {Metro} from './../model/metro.model'
import { Component, OnInit } from '@angular/core';
import { LISTAMETRO} from './../dati/metro_remoti';

@Component({
  selector: 'app-treni',
  templateUrl: './treni.component.html',
  styleUrls: ['./treni.component.css']
})
export class TreniComponent implements OnInit {

  listametro : Metro[];

  constructor() {
    this.listametro = [];
  }

  //eseguito una sola volta, dopo il costruttore
  ngOnInit() {
    this.listametro = LISTAMETRO;
  }

}
