import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ICategory } from './../../Models/icategory';
import { ProductsComponent } from './../products/products.component';

@Component({
  selector: 'order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})

export class OrderMasterComponent implements OnInit , AfterViewInit {

  catList: ICategory[];

  selectedCatId : number = 0 ;
  RecivedTotalPrice : number = 0 ;

  // @ViewChild('clientName') clientNameInp : ElementRef | null = null;
  // @ViewChild('clientName') clientNameInp : ElementRef | undefined = undefined;
  // @ViewChild('clientName') clientNameInp? : ElementRef ;

  // If sure that Obj Not null ...
  // @ViewChild('clientName') clientNameInp : ElementRef = {} as ElementRef;

  //Non-null assertion operator
  @ViewChild('clientName') clientNameInp! : ElementRef ; // tell Compiler that Obj will never = null  


  ///
  @ViewChild(ProductsComponent) PrdCom! : ProductsComponent ;


  constructor() {
    this.catList = [
      { Id: 1, name: 'Labtobs' },
      { Id: 2, name: 'Mobiles' },
      { Id: 3, name: 'TVs' }
    ];
    //  this.clientNameInp?.nativeElement // Must Allow null if used null or undefined '?'

    // this.clientNameInp.nativeElement   
  }
  ngAfterViewInit(): void {
    this.clientNameInp.nativeElement.style.backgroundColor = '#ebf';
    this.clientNameInp.nativeElement.value = 'Your Name';

  }

  updateTotalPrice(totalPrice : number){
    this.RecivedTotalPrice = totalPrice ;
  }

  ngOnInit(): void {
    console.log(this.catList);
  }

}
