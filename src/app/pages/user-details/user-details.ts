import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  userData:any=signal("");
constructor(public userService:UserService,public route:ActivatedRoute){}
ngOnInit(){
  const data =this.userService.userList();
  this.route.params.subscribe((params)=>{
    const filteredData= data.filter((item)=>item.id==params['id'])
     this.userData.set(filteredData[0])
  })
 
}
}
 