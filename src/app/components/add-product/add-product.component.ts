import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct } from './../../Models/iproduct';
import { ProductsAPIService } from './../../services/products-api.service';
import { Router } from '@angular/router';
import { CategoryAPIService } from './../../services/category-api.service';
import { ICategory } from './../../Models/icategory';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit, OnChanges {

  catList: ICategory[] = [];

  newProduct: IProduct = {} as IProduct;

  constructor(private prodSerAPI: ProductsAPIService,
    private router: Router
    , private catService: CategoryAPIService) {
    // this.newProduct = {
    //   imgUrl: ''
    //   , Name: 'test',
    //   Price: 120,
    //   Quantity: 50,
    //   categoryId: 1
    // }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.catService.getAllCat().subscribe((data) => {
      this.catList = data;
    })
  }

  ngOnInit(): void {
    this.catService.getAllCat().subscribe((data) => {
      this.catList = data;
    })
  }

  saveProduct() {
    this.prodSerAPI.addNewProduct(this.newProduct).subscribe((data) => {
      this.router.navigate(['/Products']);
    });
  }

}
