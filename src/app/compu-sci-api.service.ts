import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FamousPeople, Person } from './interfaces/famousPeople';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompuSciAPIService {
  apiUrl = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

  constructor(private http:HttpClient) { }

  getFamousPeople()
  {
    return this.http.get<FamousPeople>(`${this.apiUrl}`);
  }
}
