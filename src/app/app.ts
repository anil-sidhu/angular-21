
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Products } from './services/products';
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  productData:any=signal("")
  constructor(private productService:Products){

  }
  ngOnInit(){
    this.productService.getProducts().subscribe((data)=>{
      console.log(data.products);
      this.productData.set(data.products)
      
    })
  }
 
}
