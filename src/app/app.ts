
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Footer } from './footer/footer';


@Component({
  selector: 'app-root',
  imports: [CommonModule,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
