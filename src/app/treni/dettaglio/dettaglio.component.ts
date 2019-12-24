import { Component, Input, OnInit } from '@angular/core';
import { Metro } from 'src/app/model/metro.model';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {

  @Input() treno: Metro;

  constructor() { }

  ngOnInit() {
  }

  chiudi(){
    this.treno= null;
  }

}
