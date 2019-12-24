import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreniComponent } from './treni/treni.component';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: '', component: TreniComponent },
  { path: 'preferiti', component: PreferitiComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dettaglio/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
