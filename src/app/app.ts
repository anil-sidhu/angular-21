
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
email=new FormControl("default@test.com")
password=new FormControl("12345")

login(){
  console.log(this.email.value,this.password.value);
}

reset(){
  this.email.setValue("");
  this.password.setValue("");

}

}
