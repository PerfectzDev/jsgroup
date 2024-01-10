import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PartnersComponent} from "./components/partners/partners.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'partners', component: PartnersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
