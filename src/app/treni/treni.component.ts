import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treni',
  templateUrl: './treni.component.html',
  styleUrls: ['./treni.component.css']
})
export class TreniComponent implements OnInit {

  listametro = [];

  constructor() {
    this.listametro = [
      { idt: 'ASD', linea: 'Rossa', numchatting: 32, tempo: 125000 },
      { idt: 'AKE', linea: 'Gialla', numchatting: 29, tempo: 145000 },
      { idt: 'BFD', linea: 'Verde', numchatting: 47, tempo: 155000 }
    ];
  }

  ngOnInit() {
  }

}
