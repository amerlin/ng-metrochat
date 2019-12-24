import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Metro } from '../model/metro.model';

@Component({
  selector: 'app-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css']
})
export class MetroComponent implements OnInit {

  //dati che mi arrivano dal parent
  @Input() datiIn: Metro;
  @Input() oraAttuale: number;
  trenoSelezionato: Metro;

  @Output() inPartenza = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    let x = setInterval(() => { this.inPartenza.emit('bella giornata') }, 10000);
  }



}
