import { Injectable } from '@angular/core';
import { cartItem, product } from '../models/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private list: cartItem[] = [];
  private cartSubject = new BehaviorSubject<cartItem[]>(this.list);
  private totalPrice = new BehaviorSubject<number>(0);
  constructor() {}

  getList() {
    return this.list;
  }
  addItem(product: cartItem) {
    let index = this.list.findIndex((e) => e._id == product._id);
    if (index > -1) {
      this.list[index].quantity += 1;
    } else {
      this.list.push(product);
    }
    this.calculateTotal();
    this.cartSubject.next(this.list);
  }
  delItem(product: cartItem) {
    this.list.filter((e) => {
      e._id != product._id;
    });
    this.cartSubject.next(this.list);
  }
  updateQuantity(productId: string, quantity: number) {
    let index = this.list.findIndex((e) => e._id == productId);
    this.list[index].quantity = quantity;
    this.cartSubject.next(this.list);
  }
  calculateTotal() {
    this.totalPrice.next(
      this.list.reduce((total, i) => total + i.price * i.quantity, 0)
    );
  }
  getTotalPrice() {
    return this.totalPrice;
  }
}
