
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatBadgeModule, MatCardModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
 
}
