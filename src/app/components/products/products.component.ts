import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from './../products.service';

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

  @Output() onTotalPriceChange: EventEmitter<number>;

  @Input() recivedSelCatId: number = 0;

  orderTotalPrice: number = 0;

  constructor(private ProService : ProductsService) {
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
    this.proListOfCat = this.ProService.getProductByCatId(this.recivedSelCatId);
  }

}