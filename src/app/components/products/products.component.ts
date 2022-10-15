import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  proList : IProduct[] ;

  constructor() { 
    this.proList = [
      {Id : 1 , Name : 'p1' , Price : 20 ,Quantity : 5 , categoryId : 1 , imgUrl :""},
      {Id : 2 , Name : 'p2' , Price : 20 ,Quantity : 5, categoryId : 1 , imgUrl :""} 
    ]
  }

  ngOnInit(): void {
  }

}
