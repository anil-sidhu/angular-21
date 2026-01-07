
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, Field, form, maxLength, minLength, required } from '@angular/forms/signals';
@Component({
  selector: 'app-root',
  imports: [CommonModule, Field],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  loginModel = signal({
    email: '',
    password: ''
  })
  loginForm = form(this.loginModel,(field)=>{
    required(field.email,{message:"please enter email address"});
    minLength(field.email,5,{message:"please enter valid email"});
    email(field.email,{message:"please enter valid email address"});

    required(field.password,{message:"please enter a password email"});
    minLength(field.password,5,{message:"please enter valid password"});
    maxLength(field.password,10,{message:"please enter valid password"});

  })
  login() {
    console.log(this.loginForm.email().value());
    console.log(this.loginForm.password().value());

  }
  reset() {
    this.loginForm.email().value.set('')
   this.loginForm.password().value.set('')

  }
}
