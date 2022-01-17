import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HttpClientModule} from '@angular/common/http';
import { HomePageRoutingModule } from './home-routing.module';
import { ComponentsModule } from './../components.module';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  imports:[
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HomePageRoutingModule
    
  ],

  declarations: [HomePage,FooterComponent]
})
export class HomePageModule {}
