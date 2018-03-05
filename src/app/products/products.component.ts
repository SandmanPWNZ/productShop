import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../products.service'
import { Category, Products } from '../../product';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  
  @Input() products: Products[];

  @Output() weightChanged = new EventEmitter();

  editableProduct: Products[];
  sort: string = 'weight'
  asc: boolean = true
  constructor(private _prodService: ProductsService) { }

  newProduct = {
    'title': '',
    'weight': 0
  }

  addProduct(cat){
    console.log(cat);
    cat.push(this.newProduct)
  }

  editProduct(product){
    this.editableProduct = product;
    console.log(this.editableProduct);
  }
  saveProduct(prod){
    this.editableProduct = null;
    if(prod !== null ){
      this.weightChanged.emit(prod);
    }
  }
  makeCategory(newProduct, product){
    console.log('newProd:', newProduct)
    console.log('Prod - new Cat:', product)
  }
  
  ngOnInit() {
    console.log(this.products)
    // debugger;
  }

}
