import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  reactiveForm: FormGroup;
  selectedFiles!: File[];

  constructor(private modalRef: MatDialogRef<AddProductComponent>) {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null),
      des: new FormControl(null),
      price: new FormControl(null),
      cate: new FormControl(null),
      stock: new FormControl(null),
      img: new FormControl(null),
    });
  }
  close() {
    this.modalRef.close();
  }

  submit() {
    // if (this.selectedFiles.length > 0) {
    //   const formData = new FormData();
    //   this.selectedFiles.forEach((file) => {
    //     formData.append('images', file, file.name);
    //   });
    // }
    console.log(this.reactiveForm);
  }
  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    this.selectedFiles = Array.from(files);
  }
}
