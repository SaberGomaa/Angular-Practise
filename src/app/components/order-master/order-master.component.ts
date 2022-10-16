import { Component, OnInit } from '@angular/core';
import { ICategory } from './../../Models/icategory';

@Component({
  selector: 'order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit {

  catList: ICategory[];

  constructor() {
    this.catList = [
      { Id: 1, name: 'Labtobs' },
      { Id: 2, name: 'Mobiles' },
    ];
  }

  ngOnInit(): void {
  }

}
