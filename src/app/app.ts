
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  userDetails:any=undefined
  addUser(data:NgForm){
    console.log(data);
    this.userDetails=data
    
  }
}
