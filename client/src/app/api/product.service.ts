import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { product } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  getList(): Observable<product[]> {
    return this.http.get<product[]>(this.baseUrL + 'product');
  }
}
