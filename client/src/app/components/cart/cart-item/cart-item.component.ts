import { Component, Input } from '@angular/core';
import { ShareService } from '../../../services/share.service';
import { cartItem } from '../../../models/models';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() public cartItem!: cartItem;

  constructor(private cartSer: CartService) {}
  decrease() {
    this.cartItem.quantity > 0
      ? (this.cartItem.quantity -= 1)
      : (this.cartItem.quantity = 0);
    this.cartSer.updateQuantity(this.cartItem._id!, this.cartItem.quantity);
    this.cartSer.calculateTotal();
  }
  increase() {
    this.cartItem.quantity += 1;
    this.cartSer.updateQuantity(this.cartItem._id!, this.cartItem.quantity);
    this.cartSer.calculateTotal();
  }
  delItem() {
    this.cartSer.delItem(this.cartItem);
  }
}
