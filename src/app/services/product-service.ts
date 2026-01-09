import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(){
    console.log("service called");

  }

  getProducts(){
    return [
      {id:1,name:'Mobile',price:1000},
      {id:2,name:'Laptop',price:5000},
      {id:3,name:'machine',price:3000},
      {id:4,name:'watch',price:500},

    ]
  }
}
