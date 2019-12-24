import { Component, OnInit, Input } from '@angular/core';
import { Metro } from '../model/metro.model';

@Component({
  selector: 'app-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css']
})
export class MetroComponent implements OnInit {

  //dati che mi arrivano dal parent
  @Input() datiIn: Metro;

  constructor() { }

  ngOnInit() {
  }

}
