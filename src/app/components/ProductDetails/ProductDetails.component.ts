import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './../../Models/iproduct';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // private productId: number = 0;

  prd: IProduct | undefined= undefined;

  constructor(private activatedRoute: ActivatedRoute , 
    private productService : ProductsService ,
    private location : Location) { }

  ngOnInit() {
    // this.productId = Number(this.activatedRoute.snapshot.paramMap.get("ProductId"));
    this.prd = this.productService.getProductById(Number(this.activatedRoute.snapshot.paramMap.get("ProductId")));
    // alert(this.productId);
  }

  goBack(){
    this.location.back();
  }

}
