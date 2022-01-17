import { Component, OnDestroy, OnInit } from '@angular/core';
//import { main } from '../../../assets/templates/js/main';
//import * as $ from "jquery";
import { Product, CartService } from './../../services/cart.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
cart:Product[]=[];
constructor(private cartService: CartService, private modalCtrl: ModalController) { }

ngOnInit() {
  this.cart = this.cartService.getCart();
}

decreaseCartItem(product) {
  this.cartService.decreaseProduct(product);
}

increaseCartItem(product) {
  this.cartService.addProduct(product);
}

removeCartItem(product) {
  this.cartService.removeProduct(product);
}

getTotal() {
  return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
}



 
}
