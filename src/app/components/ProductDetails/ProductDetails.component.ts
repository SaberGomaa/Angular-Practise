import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './../../Models/iproduct';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private currId: number = 0;

  private prdIDs : number [] = [] ;

  currPrd: IProduct | undefined = undefined;

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private location: Location,
    private router : Router) { }

  ngOnInit() {
    this.prdIDs = this.productService.getAllProducsIDs();
    // this.currId = Number(this.activatedRoute.snapshot.paramMap.get("ProductId"));
    // this.currPrd = this.productService.getProductById(this.currId);

    //observable
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.currId = Number(paramMap.get("ProductId"));
      this.currPrd = this.productService.getProductById(this.currId);
    })

  }

  goBack() {
    this.location.back();
  }

  preProduct() {
    let currIndex = this.prdIDs.findIndex((val) => val == this.currId);
    if(currIndex != 0){
      this.currId = this.prdIDs[currIndex-1] ;
      this.router.navigate(['/Products' , this.currId])
    }
  } 

  nextProduct() {
    let currIndex = this.prdIDs.findIndex((val) => val == this.currId);
    if(currIndex < this.prdIDs.length-1){
      this.currId = this.prdIDs[currIndex+1] ;
      this.router.navigate(['/Products' , this.currId])
      
    }
  }

  isFirstProduct() : boolean{
    return this.currId == this.prdIDs[0];
  }
  isLastProduct() : boolean{
    return this.currId == this.prdIDs[this.prdIDs.length-1];
  }
}
