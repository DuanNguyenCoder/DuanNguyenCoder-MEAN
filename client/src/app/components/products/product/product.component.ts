import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../api/product.service';
import { product } from '../../../models/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  productData?: product[];

  constructor(private proSer: ProductService) {}

  ngOnInit(): void {
    this.proSer.getList().subscribe((res) => {
      this.productData = res;
      console.log(res);
    });
  }
}
