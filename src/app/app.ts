
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
isLogin= signal(true)
users=signal(["anil","same","peter","bruce"])
pColor="red"

}
