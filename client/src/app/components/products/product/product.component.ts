import { Component, Input, OnInit } from '@angular/core';

import { ProductService } from '../../../api/product.service';
import { product } from '../../../models/models';
import { CartService } from '../../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() productData!: product;

  constructor(
    private proSer: ProductService,
    private cartSer: CartService,
    private toast: ToastrService
  ) {}

  buy() {
    this.toast.success('everything is broken', 'Major Error', {
      timeOut: 3000,
      progressAnimation: 'increasing',
    });
    const { cate, stock, ...cartItem } = this.productData;
    this.cartSer.addItem({ quantity: 1, ...cartItem });
    console.log(this.cartSer.getList());
  }
}
