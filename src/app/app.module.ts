import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickMortyDetailsComponent } from './rick-morty-details/rick-morty-details.component';
import { RickMortyService } from './rick-morty.service';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './rick-morty-details/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RickMortyDetailsComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RickMortyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
