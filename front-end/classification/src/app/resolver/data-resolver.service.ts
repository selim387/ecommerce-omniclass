import { Injectable } from '@angular/core';
import { Data } from './../services/data.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any> {
 
  constructor(private data: Data) { }
 
  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('id');
    return this.data.getData(id);
  }
}