
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
loginForm=new FormGroup({
  name:new FormControl(''),
  email:new FormControl(''),
  password:new FormControl(''),
})

handleProfile(){
  console.log(this.loginForm.value);
}
reset(){
  this.loginForm.setValue({
    name:'',
    password:'',
    email:''
  })
}

}
