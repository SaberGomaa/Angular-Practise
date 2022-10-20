import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('clientName') clientNameInp : ElementRef | null = null;

  constructor() {
    this.catList = [
      { Id: 1, name: 'Labtobs' },
      { Id: 2, name: 'Mobiles' },
      { Id: 3, name: 'TVs' }
    ];


  }

  updateTotalPrice(totalPrice : number){
    this.RecivedTotalPrice = totalPrice ;
  }

  ngOnInit(): void {
  }

}
