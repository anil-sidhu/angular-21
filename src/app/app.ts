
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [CommonModule,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
users=signal(['anil','peter','sam','bruce'])
newUser=signal('')

addNewUser(){
  this.users.update((data)=>([...data, this.newUser()]))
}
}
