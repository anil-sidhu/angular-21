import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data =10;
  count= signal(0)

  constructor(){
    effect(()=>{
      // console.log("this is data",this.data);
      console.log("this is count",this.count())
      if(this.count()==10){
        this.count.set(0)
      }
      
    })
  }

  updateData(){
    this.data++
  }

  updateCount(){
    this.count.set(this.count()+1)
  }
}
