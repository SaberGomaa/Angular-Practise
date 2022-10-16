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

  constructor() { 
    this.proList = [
      {Id : 1 , Name : 'MacBook' , Price : 450 ,Quantity : 5 , categoryId : 1 , imgUrl :"https://avatars.githubusercontent.com/u/75697438?v=4"},
      {Id : 2 , Name : 'LabDell' , Price : 520 ,Quantity : 0, categoryId : 1 , imgUrl :"https://avatars.githubusercontent.com/u/75697438?v=4"} ,
      {Id : 10 , Name : 'OPPO' , Price : 20 ,Quantity : 1, categoryId : 2 , imgUrl :"https://avatars.githubusercontent.com/u/75697438?v=4"} ,
      {Id : 4 , Name : 'Realme' , Price : 240 ,Quantity : 25, categoryId : 2 , imgUrl :"https://avatars.githubusercontent.com/u/75697438?v=4"} 
    ]
  }

  dateNow : Date = new Date();

  ngOnInit(): void {
  }

}
