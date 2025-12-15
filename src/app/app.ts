import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  // template:`<h1>inline Template {{name}}<h1>`,
  styleUrl: './app.css'
})
export class App {
 name="Anil sidhu"
 email="anil@test.com"
 getName(a:number,b:number){
  return a+b;
 }
}
 