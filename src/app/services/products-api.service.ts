import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsAPIService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('http://localhost:3000/products');
  }

  getProductByCatID(catId: number): Observable<IProduct[]> {
    if (catId == 0) {
      return this.httpClient.get<IProduct[]>('http://localhost:3000/products');

    }
    else {
      // return this.httpClient.get<IProduct[]>('http://localhost:3000/products/?categoryId='+catId) ;
      return this.httpClient.get<IProduct[]>(`http://localhost:3000/products/?categoryId=${catId}`);
    }
  }
  getProductByID(id : number) :Observable<IProduct>{
    return this.httpClient.get<IProduct>(`http://localhost:3000/products/${id}`);
  }

  addNewProduct(newPrd: IProduct) {

  }
  updateProduct(newPrd: IProduct) {

  }
}
