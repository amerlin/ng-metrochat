import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TreniComponent } from './treni/treni.component';
import { MmssPipe } from './mmss.pipe';
import { NotizieComponent } from './notizie/notizie.component';
import { MetroComponent } from './metro/metro.component';
import { DettaglioComponent } from './treni/dettaglio/dettaglio.component';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TreniComponent,
    MmssPipe,
    NotizieComponent,
    MetroComponent,
    DettaglioComponent,
    PreferitiComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
