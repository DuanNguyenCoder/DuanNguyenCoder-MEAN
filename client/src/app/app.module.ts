import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// component
import { AppComponent } from './app.component';

// material module

import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AddProductComponent } from './components/modals/add-product/add-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { ProductComponent } from './components/products/product/product.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ListProductComponent,
    DashboardComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
  ],
  imports: [
    MatListModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatSlideToggleModule,
  ],

  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
