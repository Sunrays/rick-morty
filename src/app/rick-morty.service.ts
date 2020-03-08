import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiResponse } from './response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  apiURL: string ="https://rickandmortyapi.com/api/character/";

  constructor(private http: HttpClient) { }


  public fetchDetails() : Observable<apiResponse>{
    return this.http.get<apiResponse>(this.apiURL);
  }
}
