import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
height= signal(100);
width=signal(20);
area= computed(()=> this.height()*this.width())
constructor(){
  effect(()=>{
    // console.log("area is :", this.area());
    console.log("is updating?");
  
  })
}

handleHeight(){
  this.height.set(this.height()+10)
  // this.area= this.height*this.width;
}

}
