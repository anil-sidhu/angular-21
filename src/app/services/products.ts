import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productsAPIResponse } from './productDatType';

@Injectable({
  providedIn: 'root',
})
export class Products {
  name:string="anil"
  num:number=10
  apiURL="https://dummyjson.com/products"
  constructor(private http:HttpClient){

  }
  getProducts(){
    return this.http.get<productsAPIResponse>(this.apiURL)
  }
  
}
