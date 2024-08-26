import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AddProductComponent } from './components/modals/add-product/add-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { ProductComponent } from './components/manage/product/product.component';
import { LandingComponent } from './components/landing/landing.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'product', component: ProductComponent },
      { path: '', component: LandingComponent },
      { path: 'phone', component: ListProductComponent },
      { path: 'cart', component: CartComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
