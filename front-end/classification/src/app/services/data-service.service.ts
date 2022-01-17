import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from './cart.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  searchOption = []
  public productsData: Product[];

  constructor(private http: HttpClient) { }
  get_products(omni_code: string) {
    return this.http.
      get("http://localhost:8080/products/" + omni_code);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/products/*");
  }

  filteredListOptions(): Array<Product> {
    let products = this.productsData;

    let filteredProductsList = [];
    for (let product of products) {
      for (let options of this.searchOption) {
        if (options.product_name === product.name) {
          filteredProductsList.push(product);
        }
      }
    }
    console.log(filteredProductsList); 
    return filteredProductsList;
  }
}