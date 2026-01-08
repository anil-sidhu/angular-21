import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
@Input() count=0;

// ngOnChanges(){
//   console.warn("ngOnChanges");
  
// }

// ngOnDestroy(){
//   console.warn("ngOnDestroy");
  
// }


}
