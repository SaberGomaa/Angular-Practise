import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from './../products.service';
import { ProductsAPIService } from './../../services/products-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit, OnChanges {

  productTrackBy(index: number, item: IProduct) {
    return item.Id;
  }

  //proList: IProduct[];
  proListOfCat: IProduct[] = [];

  prdList: IProduct[] = [];

  @Output() onTotalPriceChange: EventEmitter<number>;

  @Input() recivedSelCatId: number = 0;

  orderTotalPrice: number = 0;

  constructor(private ProService: ProductsService, private router: Router,
    private APITestProduct: ProductsAPIService) {
    this.onTotalPriceChange = new EventEmitter<number>();

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.recivedSelCatId);
    this.proListOfCat = this.ProService.getProductByCatId(this.recivedSelCatId);
  }

  updateOrderTotalPrice(amount: number, Quantity: number) {
    this.orderTotalPrice += (amount * Quantity);
    //Emit Event 
    this.onTotalPriceChange.emit(this.orderTotalPrice);
  }

  dateNow: Date = new Date();

  ngOnInit(): void {
    // this.proListOfCat = this.ProService.getAllProducts();

    // this.APITestProduct.getAllProducts().subscribe((prdList => {
    //   this.prdList = prdList ;
    // }));

    this.APITestProduct.getAllProducts().subscribe({
      next : (data) => {
        this.prdList = data ;
      }
    })
  }

  openProductDetails(Id: number) {
    this.router.navigate(['/Products', Id]);
  }

}