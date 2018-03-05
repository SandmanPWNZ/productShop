import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products, Category } from '../../product';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private _prodService: ProductsService) { }

  categories: Array<Category>

  getProducts(){
    let data = this._prodService.getProducts().subscribe(products => this.formatProducts(products[0]));
  }
  
  formatProducts(products){
    
    var calcWeight = function(arr) {
      var totalWeight = 0
      arr.forEach(el => {
        totalWeight += el.weight;
      });
      return totalWeight;
    }

    var mapObject = function(object){
      var productino = Object.keys(object).map(function(key){
        // console.log(key + ":" +Object.keys(object[key]).length)
        
        if( !(object[key] instanceof Array)){
          return {
            'title': key,
            'products': null,
            'weight': calcWeight(mapObject(object[key])),
            'subCategory': mapObject(object[key]),
            'hide': false
          };
        } else {

          let subCat = object[key].forEach(element => {
            var subCats = {}
            for(let i = 0; i <= Object.keys(element).length; i++){
              // if(Object.values(element)[i] instanceof Array){
                // console.log(Object.keys(element)[i], ':', Object.values(element)[i] instanceof Array)
                
                return Object.values(element)[i] instanceof Array ? subCats[i] = (Object.values(element)[i]) : null ;
              // }
            }
            console.log('subCats:', subCats)
            return subCats
            // console.log('is the 1st element array?:',Object.keys(element))
          });

          return {
            'title': key,
            'products': object[key],
            'weight': calcWeight(object[key]),
            'subCategory': typeof subCat === "object" ? mapObject(subCat) : null,
            // 'subCategory': subCat,
            'hide': false
          };
        }
      });

      return productino
    }
    this.categories = mapObject(products);
    // console.log(this.categories)
  
  };
  ngOnInit() {
    this.getProducts()
  }

}
