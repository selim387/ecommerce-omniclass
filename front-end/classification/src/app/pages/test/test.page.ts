import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data-service.service';
import { Data } from '../../services/data.service';
import { Storage } from '@ionic/storage';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})

export class TestPage implements OnInit {
  searched_products: any;
  code: any;
  products: any;
  subParams: any;
  sent_data: any;
  all_products: any;

  constructor(private storage: Storage, private data: Data, private route: ActivatedRoute, private router: Router, private dataService: DataService) {    
    this.code = null;
    //route.params.subscribe(val => this.myInit());
  }

  async ionViewWillEnter(){

   $('#general').remove();
   $('#price_slider').remove();
   $('head').append('<script id="general" async src="assets/templates/js/general.js"></script>'); 
   $('head').append('<script id="price_slider" async src="assets/templates/js/price_slider.js"></script>'); 
   $('head').append('<script>svg4everybody();</script>');
   $('head').append('<script  async src="https://www.googletagmanager.com/gtag/js?id=UA-97489509-6"></script>'); 
   $('head').append("<script> window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'UA-97489509-6'); </script>");
  }

  async ngOnInit() {
    
    if (this.route.snapshot.data['special']) {
      this.code = this.route.snapshot.data['special'];
    } else{
      this.code = this.route.snapshot.params['id'];
    }

    this.storage.get('all').then((val) => {
      this.all_products = val;
    });

    if( this.code === '*' ){
      console.log( this.all_products );
      this.products = this.all_products;
    }else{
      this.dataService.get_products(this.code).subscribe(res =>
        {
          this.products = res;
          console.log( this.products );
        });
    }


    /* this.dataService.get_products(this.code).subscribe(res =>
      {
        this.products = res;
        
        if( this.code !== '*' ){
          this.dataService.get_products('*').subscribe(res =>
            {
              this.all_products = res;
            });
            
        }else{ 
          this.all_products = this.products;
        }
      }); */    
  } 
 
    onKey(value) { 
    this.searched_products = this.search(value);
    }


    search(value: string) { 
      let filter = value.toLowerCase();
      return this.all_products.filter( product => product.product_name.toLowerCase().startsWith(filter));
    }
/* private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    //'jquery', 'bootstrap', 'owl.carousel', 'tooltip', 
    this.dynamicScriptLoader.load('main').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }  */

}
