import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  speed=signal(0);
  fruit=signal('apple')
  color="black"

  constructor(){
    effect(()=>{
      if(this.speed()>0 && this.speed()<80){
        this.color='green'
      }
      if(this.speed()>=80 && this.speed()<120){
        this.color='orange'
      }
      if(this.speed()>=120 ){
        this.color='red'
        
      }
    console.log("speed :",this.speed());
   
      
    })
    effect(()=>{
      console.log(this.fruit());
      
    })
  }

  increaseSpeed(){
    this.speed.set(this.speed()+10)
  }

  changeFruit(){
    this.fruit.set('banana')
  }
}
