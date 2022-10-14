import { Component, OnInit } from '@angular/core';

export interface IProduct {
  Id:number
  Name : string
  Quantity : number
  Price : number
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{


  name:string = 'saber';
  age = 11;

  product : IProduct[] =[
    {Id : 1 , Name : 'meet' , Price : 20 ,Quantity : 5},
  ]

  lang = ['arbaic','english','german'];

  userTestStatus = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
];

}
