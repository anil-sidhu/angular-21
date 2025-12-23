
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users=signal(["Anil","Sam","Peter","Bruce"])
  usersDetail=signal([
    { id:1, name:"Anil", surname:"sidhu", email:"anil@test.com"},
    { id:2, name:"sam", surname:"singh", email:"sam@test.com"},
    { id:3, name:"Peter", surname:"parker", email:"peter@test.com"},
    { id:4, name:"bruce", surname:"wayen", email:"bruce@test.com"},

  ])
}
