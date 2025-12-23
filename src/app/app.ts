
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
headingColor= signal("green");
headingSize=signal(40);
homeActive=false;
contactActive=false;
aboutActive=true;
bigText=signal(false)
error =true

updateColor(){
  this.headingColor.set("orange")
  this.headingSize.set(20);
  this.error=!this.error
  

}
}
