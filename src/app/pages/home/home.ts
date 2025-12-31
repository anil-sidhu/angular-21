import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public route:Router){}
userData=signal({name:'anil',age:29,id:1})

goToProfile(){
  this.route.navigate(['profile'],{
    queryParams:{
      id:10,
      name:'peter',
      age:40
    }
  })

}
}
