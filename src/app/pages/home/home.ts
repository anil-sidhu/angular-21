import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(public router:Router){}

  goToProfile(){
    this.router.navigate(['profile'],{
      queryParams:{
        name:"sam",
        age:20,
        id:10
      }
    })
  }
}
