import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data:any = 20

  updateData(val:number,user:string){
    
    this.data=val
    console.log(user);

    console.log(this.sum(10,20));
    
    
  }

  sum(a:number,b:number):number{
    return a+b
  }

  handleEvent(event:PointerEvent | Event | MouseEvent){
    console.log(event);
    
  }
 
  
}
