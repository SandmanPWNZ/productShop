import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../product' 
@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
  @Input()
  category: Category[];
  showProducts: Function;

  constructor() { }

  sort: string = 'weight'
  asc: boolean = true

  ngOnInit() {
    console.log(this.category)
  }

}
