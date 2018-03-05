import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

// Components
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './product-form/product-form.component';

// Services
import { ProductsService } from './products.service';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';

// Pipes
import { OrderByPipe } from './order-by.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFormComponent,
    CategoriesComponent,
    CategoryComponent,
    OrderByPipe
  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
