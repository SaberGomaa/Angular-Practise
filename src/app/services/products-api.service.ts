import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { IProduct } from 'src/app/Models/iproduct';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsAPIService {

  private httpOptions ;

  constructor(private httpClient: HttpClient) { 
    this.httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        // Authorization : 'Token'
      }) 
    }
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.baseAddressForAPI}/products`);
  }

  getProductByCatID(catId: number): Observable<IProduct[]> {
    if (catId == 0) {
      return this.httpClient.get<IProduct[]>(`${environment.baseAddressForAPI}/products`);
      // .pipe(
      //   retry(3),
      //   catchError((err)=>{})
      // );

    }
    else {
      // return this.httpClient.get<IProduct[]>('http://localhost:3000/products/?categoryId='+catId) ;
      return this.httpClient.get<IProduct[]>(`${environment.baseAddressForAPI}/products/?categoryId=${catId}`);
    }
  }
  getProductByID(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${environment.baseAddressForAPI}/products/${id}`);
  }

  addNewProduct(newPrd: IProduct) : Observable<IProduct>{
    return this.httpClient.post<IProduct>(`${environment.baseAddressForAPI}/products`, JSON.stringify(newPrd),this.httpOptions);

  }
  updateProduct(newPrd: IProduct) {

  }
}
