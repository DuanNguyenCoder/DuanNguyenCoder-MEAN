import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../../modals/add-product/add-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  constructor(public modal: MatDialog) {}
  openModalProduct(): void {
    this.modal.open(AddProductComponent, {
      enterAnimationDuration: '300ms',
      disableClose: true,
      // data: {name: this.name, animal: this.animal}
    });
  }
}
