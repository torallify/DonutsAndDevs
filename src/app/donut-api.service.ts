import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donuts, Donut } from './interfaces/donuts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutAPIService {
  apiUrl = 'https://grandcircusco.github.io/demo-apis/donuts.json';

  constructor(private http:HttpClient) { }

  getDonuts()
  {
    return this.http.get<Donuts>(`${this.apiUrl}`);
  }

}
