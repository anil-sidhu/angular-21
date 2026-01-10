import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  apiURL="https://dummyjson.com/products"
  constructor(private http:HttpClient){

  }
  getProducts(){
    return this.http.get<any>(this.apiURL)
  }
  
}
