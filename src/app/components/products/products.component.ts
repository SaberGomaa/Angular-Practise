import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit, OnChanges {

  productTrackBy(index: number, item: IProduct) {
    return item.Id;
  }

  proList: IProduct[];
  proListOfCat: IProduct[] = [];

  @Output() onTotalPriceChange : EventEmitter<number> ;

  @Input() recivedSelCatId: number = 0;

  orderTotalPrice: number = 0;

  constructor() {
    this.onTotalPriceChange = new EventEmitter<number>();
    this.proList = [
      { Id: 1, Name: 'MacBook', Price: 450, Quantity: 5, categoryId: 1, imgUrl: "https://avatars.githubusercontent.com/u/75697438?v=4" },
      { Id: 2, Name: 'LabDell', Price: 520, Quantity: 2, categoryId: 1, imgUrl: "https://avatars.githubusercontent.com/u/75697438?v=4" },
      { Id: 10, Name: 'OPPO', Price: 20, Quantity: 1, categoryId: 2, imgUrl: "https://avatars.githubusercontent.com/u/75697438?v=4" },
      { Id: 45, Name: 'Realme', Price: 80, Quantity: 12, categoryId: 2, imgUrl: "https://avatars.githubusercontent.com/u/75697438?v=4" },
      { Id: 20, Name: 'LG TV', Price: 120, Quantity: 10, categoryId: 3, imgUrl: "https://avatars.githubusercontent.com/u/75697438?v=4" },
      { Id: 41, Name: 'Samsung TV ', Price: 210, Quantity: 5, categoryId: 3, imgUrl: "https://avatars.githubusercontent.com/u/75697438?v=4" }
    ]
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.recivedSelCatId == 0) {
      this.proListOfCat = this.proList;
    }
    else {
      this.proListOfCat = this.proList.filter(p => p.categoryId == this.recivedSelCatId);
    }
  }

  updateOrderTotalPrice(amount: number, Quantity: number) {
    this.orderTotalPrice += (amount * Quantity);
    //Emit Event 
    this.onTotalPriceChange.emit(this.orderTotalPrice);
  }

  dateNow: Date = new Date();

  ngOnInit(): void {
  }

}
