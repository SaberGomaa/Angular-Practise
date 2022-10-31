import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from './../Models/icategory';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryAPIService {

  constructor(private httpClient : HttpClient) { 

  }
  getAllCat() : Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(`${environment.baseAddressForAPI}/Categories`);
  }
}
