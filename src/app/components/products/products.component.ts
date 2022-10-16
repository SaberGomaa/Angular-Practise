import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productTrackBy(index : number , item : IProduct) {
    return item.Id;
  }

  proList : IProduct[] ;

  recivedSelCatId : number = 0 ;

  orderTotalPrice : number = 0 ;

  constructor() { 
    this.proList = [
      {Id : 1 , Name : 'MacBook' , Price : 450 ,Quantity : 5 , categoryId : 1 , imgUrl :"https://avatars.githubusercontent.com/u/75697438?v=4"},
      {Id : 2 , Name : 'LabDell' , Price : 520 ,Quantity : 2, categoryId : 1 , imgUrl :"https://avatars.githubusercontent.com/u/75697438?v=4"} ,
      {Id : 10 , Name : 'OPPO' , Price : 20 ,Quantity : 1, categoryId : 2 , imgUrl :"https://avatars.githubusercontent.com/u/75697438?v=4"} ,
      {Id : 45 , Name : 'Realme' , Price : 80 ,Quantity : 12, categoryId : 2 , imgUrl :"https://avatars.githubusercontent.com/u/75697438?v=4"} ,
      {Id : 20 , Name : 'LG TV' , Price : 120 ,Quantity : 10, categoryId : 3 , imgUrl :"https://avatars.githubusercontent.com/u/75697438?v=4"} ,
      {Id : 41 , Name : 'Samsung TV ' , Price : 210 ,Quantity : 5, categoryId : 3 , imgUrl :"https://avatars.githubusercontent.com/u/75697438?v=4"} 
    ]
  }

  updateOrderTotalPrice(amount: number , Quantity : number){
    this.orderTotalPrice += (amount*Quantity);
  }

  dateNow : Date = new Date();

  ngOnInit(): void {
  }

}
