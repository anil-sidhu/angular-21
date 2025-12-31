import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList(){
    return [
      {
        id:1,name:'Anil',email:"anil@test.com",city:'delhi',
      },
      {
        id:2,name:'Sam',email:"sam@test.com",city:'noida',
      },
      {
        id:3,name:'Peter',email:"peter@test.com",city:'gurgaon',
      },
      {
        id:4,name:'Bruce',email:"bruce@test.com",city:'banglore',
      },
      {
        id:5,name:'Tony',email:"tony@test.com",city:'delhi',
      }
    ]
  }
}
