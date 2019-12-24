import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  link_menu_1:string;
  link_menu_2:string;
  link_menu_3:string;
  lista_news:Array<string>;
  lista_newsJson = [];

  constructor() { 
    
    this.link_menu_1 = 'Treni';
    this.link_menu_2 = 'Preferiti';
    this.link_menu_3 = 'Login';
    
    this.createNews();
    this.createJson();

  }


  ngOnInit() {
  }

  private createNews(){
    this.lista_news = new Array<string>();
    this.lista_news.push('Titolo1');
    this.lista_news.push('Titolo2');
    this.lista_news.push('Titolo3');
    this.lista_news.push('Titolo4'); 
  }

  private createJson(){
    this.lista_newsJson = [
      {
        titolo: 'Titolo1Json',
        descrizione: 'Descrizione1Json'
      },
      {
        titolo: 'Titolo2Json',
        descrizione: 'Descrizione2Json'
      },
      {
        titolo: 'Titolo3Json',
        descrizione: 'Descrizione3Json'
      },
      {
        titolo: 'Titolo4Json',
        descrizione: 'Descrizione4Json'
      }
  ];
  }

}
