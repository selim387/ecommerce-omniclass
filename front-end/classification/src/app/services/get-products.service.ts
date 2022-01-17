import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(private dataService: DataService) { 
   }

   get_all_products(){
    this.dataService.get_products('*').subscribe(res =>
      {
        return res;
      });
   }
}
