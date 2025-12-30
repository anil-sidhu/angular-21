
import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
count=signal(0)
constructor(){
  effect(()=>{
    console.log("count val is :");
    
  })
}
}
