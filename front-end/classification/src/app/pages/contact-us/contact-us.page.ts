import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  code: any;
  products: any;
  subParams: any;

  constructor() {}
  async ionViewWillEnter(){

    $('#general').remove();
    $('#price_slider').remove();
    $('head').append('<script id="general" async src="assets/templates/js/general.js"></script>'); 
    $('head').append('<script id="price_slider" async src="assets/templates/js/price_slider.js"></script>'); 
    $('head').append('<script>svg4everybody();</script>');
    $('head').append('<script  async src="https://www.googletagmanager.com/gtag/js?id=UA-97489509-6"></script>'); 
    $('head').append('<script> window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag(\'js\', new Date()); gtag(\'config\', \'UA-97489509-6\'); </script>');
   }



  ngOnInit() {

  }

}
