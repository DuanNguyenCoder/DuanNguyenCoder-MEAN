import { Component } from '@angular/core';
import { product } from '../../../models/models';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss',
})
export class ListProductComponent {
  dataMock: product[] = [
    { _id: '1', name: 'product1', price: 1, des: 'good good', url: 'url 1' },
    { _id: '2', name: 'product2', price: 2, des: 'good good', url: 'url 1' },
    { _id: '3', name: 'product3', price: 1, des: 'good good', url: 'url 1' },
    { _id: '4', name: 'product4', price: 1, des: 'good good', url: 'url 1' },
    { _id: '5', name: 'product5', price: 1, des: 'good good', url: 'url 1' },
  ];
  constructor() {}
}
