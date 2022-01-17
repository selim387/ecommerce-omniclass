import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from  './auth/auth.module';
import { DataService } from './services/data-service.service';
import { IonicStorageModule } from '@ionic/storage';
import { CartPageModule } from './pages/cart/cart.module';
import { WishlistPageModule } from './pages/wishlist/wishlist.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [    IonicStorageModule.forRoot(), BrowserModule, IonicModule.forRoot(), AppRoutingModule, WishlistPageModule ,CartPageModule, HttpClientModule, BrowserAnimationsModule, AuthModule],
  providers: [
    DataService,
  
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
