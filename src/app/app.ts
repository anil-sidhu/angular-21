
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet,ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
 
}
