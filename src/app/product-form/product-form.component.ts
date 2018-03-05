import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../../product';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor() { }

  tab: boolean = true;

  newProduct: Products = {
    'title': '',
    'weight': null
  }
  @Input() product: Products;
  @Output() productEdited = new EventEmitter<Products>();


  defWeight: number

  editProduct(prod){
    if (this.product.weight !== this.defWeight){
      this.productEdited.emit(prod)
    } else {
      this.productEdited.emit(null)
    }
  }
  // createProduct(){
  //   this.productCreated.emit(this.newProduct)
  // }
  ngOnInit() {
    this.defWeight = this.product.weight
  }

}
