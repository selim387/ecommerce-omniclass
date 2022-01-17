import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

    constructor(private httpClient: HttpClient) {
      /* this.httpClient.get('http://localhost:8080/omti/hey').subscribe(response  => {
        console.log('GET Response:', response);
        }); */   
      }
      
      login = {
        email: '',
        password: ''
      };

      logForm(form) {
        this.httpClient.get('/users/login').subscribe(response  => {
          console.log('GET Response:', response);
          });
      }

  ngOnInit() {
  }

  ionViewWillEnter(){

    $('#general').remove();
    $('#price_slider').remove();
    $('body').append('<script id="general" async src="assets/templates/js/general.js"></script>'); 
    $('head').append('<script id="price_slider" async src="assets/templates/js/price_slider.js"></script>'); 

  }

}
