import { Component, OnInit } from '@angular/core';
import { ICategory } from './../../Models/icategory';

@Component({
  selector: 'order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit {

  catList: ICategory[];

  selectedCatId : number = 0 ;
  RecivedTotalPrice : number = 0 ;


  constructor() {
    this.catList = [
      { Id: 1, name: 'Labtobs' },
      { Id: 2, name: 'Mobiles' },
      { Id: 3, name: 'TVs' }
    ];
  }

  ngOnInit(): void {
  }

}
