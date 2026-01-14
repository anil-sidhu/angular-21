
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [CommonModule,MatSlideToggleModule,MatButtonModule,MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
 
}
