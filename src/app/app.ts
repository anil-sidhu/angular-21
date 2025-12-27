
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userName=signal("Anil sidhu")
  userData=signal({
    college:'iet alwar',
    email:"anil@test.com"
  })

  get uName(){
    return this.userName();
  }
  set uName(val:string){
    this.userName.set(val)
  }

  get userCollege(){
    return this.userData().college
  }

   set userCollege(val){
     this.userData.update((item)=>({...item,college:val}))
  }

}
