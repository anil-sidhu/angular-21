
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-root',
  imports:[CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title=signal("code step by step")
  name=signal("");

  amount=10000;
  date="8-24-2025";
  mobile="samsung"
  today= new Date()
  user=signal({name:'anil',age:29,email:"code@test.com"})
}
 