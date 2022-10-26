import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderMasterComponent } from './components/order-master/order-master.component';
import { NotFoundComponent } from './components/NotFound/NotFound.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
const routes: Routes = [
  // First Match wins strategy
  //Default path
  { path: '', redirectTo: '/Main', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Main', component: MainLayoutComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Order', component: OrderMasterComponent },

  // Wild-card path
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
