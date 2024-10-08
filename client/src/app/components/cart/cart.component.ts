import { Component } from '@angular/core';
import { ShareService } from '../../services/share.service';
import { CartService } from '../../services/cart.service';
import { cartItem } from '../../models/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  public totalPrice!: number;
  public cartList!: cartItem[];

  constructor(cartSer: CartService) {
    cartSer.getList().subscribe((res) => (this.cartList = res));

    cartSer.getTotalPrice().subscribe((value) => (this.totalPrice = value));
  }
}
