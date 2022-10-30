import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderMasterComponent } from './components/order-master/order-master.component';
import { NotFoundComponent } from './components/NotFound/NotFound.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './components/ProductDetails/ProductDetails.component';
import { AddProductComponent } from './components/add-product/add-product.component';


const routes: Routes = [
  // First Match wins strategy

  {
    path: '', component: MainLayoutComponent, children: [
      //Default path
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      { path: 'Home', component: HomeComponent },
      { path: 'AddProduct', component: AddProductComponent },
      { path: 'EditProduct/:Id', component: AddProductComponent },
      { path: 'Products', component: ProductsComponent },
      { path: 'Products/:Id', component: ProductDetailsComponent },
      { path: 'Order', component: OrderMasterComponent },

    ]
  },

  // Wild-card path
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
