import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from './user-data-type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url="http://localhost:3000/users"
  constructor(private http:HttpClient){

  }
  getUsers(){
    return this.http.get<users[]>(this.url)
  }
}
