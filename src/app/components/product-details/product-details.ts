import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../services/products';
import { Product } from '../../services/productDatType';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
   productData=signal<Product| undefined>(undefined)
constructor(private route:ActivatedRoute, private products:Products){

}
ngOnInit(){
  let productId =this.route.snapshot.paramMap.get('id');
  this.products.getProducts().subscribe((data)=>{
    console.log(data.products);
    data.products.filter((item)=>{
      if(item.id.toString()==productId){
        console.log(item);
        this.productData.set(item)
      }
    })
    
  })
  
}
}
