

import { CartService } from './../services/cart.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { BehaviorSubject } from 'rxjs';
import { WishlistService } from '../services/wishlist.service';


 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
 
  cart = [];
  Wishlist=[];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  WishlistItemCount: BehaviorSubject<number>;

 
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(private cartService: CartService, private modalCtrl: ModalController,private WishlistService: WishlistService) {}
 
  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.products=this.WishlistService.getProducts();
    this.WishlistItemCount=this.WishlistService.getWishlistItemCount();
    this.Wishlist=this.WishlistService.getWishlist();
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
 
 }
 addtoWishlist(product){
   this.WishlistService.addProductWish(product);
 }
  openCart() {
  

  //let modal = await this.modalCtrl.create({
    //component: CartPageModule,
   // cssClass: 'cart-modal'
 // });
  
 // modal.present();
}
}