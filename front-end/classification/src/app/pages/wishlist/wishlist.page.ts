import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Product, WishlistService } from 'src/app/services/wishlist.service';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  code: any;
  products: any;
  subParams: any;
  Wishlist: Product[] = [];
  constructor(private wishlistService: WishlistService, private modalCtrl: ModalController, private alertCtrl: AlertController) {}
  



  ngOnInit() {
    this.Wishlist=this.wishlistService.getWishlist();
  }
  decreaseCartItem(product) {
    this.wishlistService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.wishlistService.addProductWish(product);
  }
 
  removeCartItem(product) {
    this.wishlistService.removeProduct(product);
  }
}
