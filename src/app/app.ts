
import { CommonModule } from '@angular/common';
import {  Component, signal} from '@angular/core';
import { ProductService } from './services/product-service';
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  productData:any=signal("");
 constructor(private productService:ProductService){}


loadData(){
let data = this.productService.getProducts();
  console.log(data);
  this.productData.set(data)
  
}
}
