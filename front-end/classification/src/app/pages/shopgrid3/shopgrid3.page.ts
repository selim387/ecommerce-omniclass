import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


//import { DynamicScriptLoaderService } from '../../services/dynamic-script-loader-service.service';
//import '../../../assets/templates/js/price_slider';
//import { get } from 'scriptjs';

declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-shopgrid3',
  templateUrl: './shopgrid3.page.html',
  styleUrls: ['./shopgrid3.page.scss'],
})
export class Shopgrid3Page implements OnInit {

  
  constructor() {
    
    
  }

  ionViewWillEnter(){

    $('#general').remove();
    $('#price_slider').remove();

    $('body').append('<script id="general" async src="assets/templates/js/general.js"></script>'); 
    $('head').append('<script id="price_slider" async src="assets/templates/js/price_slider.js"></script>'); 

  }

  myInit(){
    
    $('head').append('<script async src="assets/templates/js/general.js"></script>'); 

    //$('head').append('<script async src="assets/templates/js/price_slider.js"></script>');
    //$('head').append('<script async src="assets/templates/js/sidebar_handler.js"></script>'); 

  }

  ngOnInit() {
    
  } 
}
