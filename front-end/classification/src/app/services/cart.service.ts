import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Product{
  

  id:number;
  name:string;
  price:number;
  amount:number;
  img:string;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
data:Product []=[
   {id:0,name:'Electric Planer Brandix KL370090G 300 Watts',price:500.99,amount:1,img :'product1.jpg'},

  
];

private cart=[];
private cartItemCount=new BehaviorSubject(0);


  constructor() { }
  getProducts(){
    return this.data;
  }
  getCart(){
    return this.data;
  }
  getCartItemCount(){
    return this.cartItemCount;
  }
  addProduct(product){
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
  
  decreaseProduct(product){
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
  
  removeProduct(product){
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
  }

