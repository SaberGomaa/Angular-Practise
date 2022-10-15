import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import {Discount} from 'src/app/Models/EDiscount'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{


  feedContent : string = "one&TwoWayBinding" ;// one&TwoWayBinding
  name:string = 'saber';
  age = 11;

  product : IProduct[] =[
    {Id : 1 , Name : 'p1' , Price : 20 ,Quantity : 5 , categoryId : 1 , imgUrl :""},
    {Id : 2 , Name : 'p2' , Price : 20 ,Quantity : 5, categoryId : 1 , imgUrl :""}
  ]

  public count = Discount.NoDiscount ;

}
