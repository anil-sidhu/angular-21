import { Component, signal } from '@angular/core';
import { Product } from '../../services/productDatType';
import { Products } from '../../services/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
 productData=signal<Product[]| undefined>(undefined)
  constructor(private productService:Products){

  } 
  ngOnInit(){
    this.productService.getProducts().subscribe((data)=>{
      console.log(data.products);
      this.productData.set(data.products)
      
    })
  }
}
 