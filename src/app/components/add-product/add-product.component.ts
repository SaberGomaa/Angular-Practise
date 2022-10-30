import { Component, OnInit } from '@angular/core';
import { IProduct } from './../../Models/iproduct';
import { ProductsAPIService } from './../../services/products-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {


  newProduct: IProduct = {} as IProduct;

  constructor(private prodSerAPI: ProductsAPIService,
    private router: Router) {
    this.newProduct = {
      imgUrl: ''
      , Name: 'test',
      Price: 120,
      Quantity: 50,
      categoryId: 1
    }
  }

  ngOnInit(): void {
  }

  saveProduct() {
    this.prodSerAPI.addNewProduct(this.newProduct).subscribe((data) => {
      this.router.navigate(['/Products']);
    });
  }

}
