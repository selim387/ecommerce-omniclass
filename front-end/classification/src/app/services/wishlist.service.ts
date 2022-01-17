import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Product{

  id:number;
  name:string;
  price:number;
  amount:number;
}
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
 
data:Product []=[
   {id:0,name:'Electric Planer Brandix KL370090G 300 Watts',price:500.99,amount:1},
  
];

private Wishlist=[];
private WishlistItemCount=new BehaviorSubject(0);




  constructor() { }
  getProducts(){
    return this.data;
  }
  getWishlist(){
    return this.data;
  }
  getWishlistItemCount(){
    return this.WishlistItemCount;
  }
  addProductWish(product){
    let added = false;
      for (let p of this.Wishlist) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.Wishlist.push(product);
    }
    this.WishlistItemCount.next(this.WishlistItemCount.value + 1);
  }
  
  decreaseProduct(product){
    for (let [index, p] of this.Wishlist.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.Wishlist.splice(index, 1);
        }
      }
    }
    this.WishlistItemCount.next(this.WishlistItemCount.value - 1);
  }
  
  removeProduct(product){
    for (let [index, p] of this.Wishlist.entries()) {
      if (p.id === product.id) {
        this.WishlistItemCount.next(this.WishlistItemCount.value - p.amount);
        this.Wishlist.splice(index, 1);
      }
    }
  }
  }

