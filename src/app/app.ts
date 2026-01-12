
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { UserList } from './components/user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [CommonModule, UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
 
}
