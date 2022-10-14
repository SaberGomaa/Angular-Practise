import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces/IProduct';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{


  name:string = 'saber';
  age = 11;

  product : IProduct[] =[
    {Id : 1 , Name : 'p1' , Price : 20 ,Quantity : 5},
    {Id : 2 , Name : 'p2' , Price : 20 ,Quantity : 5},
    {Id : 3 , Name : 'p3' , Price : 20 ,Quantity : 5},

  ]

  userTestStatus = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
];

}
