import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { users } from '../../services/user-data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  usersData = signal<users[] | undefined>(undefined)
  constructor(private userService: UserService, private router:Router) { }
  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.usersData.set(data)

    })
  }

  deleteUser(id: number | undefined) {

    if (id) {
      this.userService.deleteUser(id).subscribe((resp) => {
        if (resp) {
          this.getUser()
        }
      })
    }

  }
  editUser(id:number | undefined){
    this.router.navigate([`edit/${id}`])
    // console.log(id);
    
  }
}
