import { Injectable } from '@angular/core';
import { cartItem, product } from '../models/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // private list: cartItem[] = [];
  private cartSubject = new BehaviorSubject<cartItem[]>([]);
  private totalPrice = new BehaviorSubject<number>(0);
  private countItem = new BehaviorSubject<number>(0);
  constructor() {}

  getList() {
    return this.cartSubject;
  }
  addItem(product: cartItem) {
    let list = this.cartSubject.value;
    let index = list.findIndex((e) => e._id == product._id);
    if (index > -1) {
      list[index].quantity += 1;
    } else {
      list.push(product);
    }
    this.countItem.next(this.countItem.value + 1);
    this.calculateTotal();
    this.cartSubject.next(list);
  }
  delItem(product: cartItem) {
    console.log(product);
    let list = this.cartSubject.value;
    let newList = list.filter((e) => e._id != product._id);

    this.cartSubject.next(newList);
    this.calculateTotal();
  }
  updateQuantity(productId: string, quantity: number) {
    let list = this.cartSubject.value;
    let index = list.findIndex((e) => e._id == productId);
    list[index].quantity = quantity;
    this.cartSubject.next(list);
  }
  calculateTotal() {
    let list = this.cartSubject.value;
    this.totalPrice.next(
      list.reduce((total, i) => {
        return total + i.price * i.quantity;
      }, 0)
    );
  }
  getTotalPrice() {
    return this.totalPrice;
  }

  getQuantityItem() {
    return this.countItem;
  }
}
