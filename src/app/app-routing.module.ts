import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RickMortyDetailsComponent } from './rick-morty-details/rick-morty-details.component';


const routes: Routes = [
  {path: '', component: RickMortyDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
