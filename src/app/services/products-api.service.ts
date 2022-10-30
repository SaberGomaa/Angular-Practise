import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsAPIService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts() : Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('http://localhost:3000/products') ;
  }

  getProductByCatID(catId : number): Observable<IProduct[]> | undefined {
    return this.httpClient.get<IProduct[]>('http://localhost:3000/products/?categoryId={{}}') ;
  }
  getProductByID(){

  }

  addNewProduct(newPrd : IProduct){

  }
  updateProduct(newPrd : IProduct){
    
  }
}
