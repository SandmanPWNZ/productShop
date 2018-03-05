import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PRODUCTS as Producto } from '../assets/mock/mock-products'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
// import 'rxjs/add/operator/map';

// import { Products } from '../product'

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  getProducts(): Observable<any[]>{

    return of( Producto )

  }

}
