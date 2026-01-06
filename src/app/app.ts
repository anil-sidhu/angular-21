
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
@Component({
  selector: 'app-root',
  imports: [CommonModule, Field],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  loginModel = signal({
    email: 'abc',
    password: '123'
  })
  loginForm = form(this.loginModel)
  login() {
    console.log(this.loginForm.email().value());
    console.log(this.loginForm.password().value());

  }
  reset() {
    this.loginForm.email().value.set('')
   this.loginForm.password().value.set('')

  }
}
