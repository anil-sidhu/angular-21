
import { CommonModule } from '@angular/common';
import { afterEveryRender, afterNextRender, Component} from '@angular/core';
import { Child } from './child/child';
@Component({
  selector: 'app-root',
  imports: [CommonModule,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  name="anil"
  count=0;
  showChild=true
constructor(){
  // console.warn("constructor");
  // this.name="sid"

  afterNextRender(()=>{
    console.warn("first re-render");
    
  })

  afterEveryRender(()=>{
    console.warn("every re-render");

  })
  
}
// ngOnInit(){
//   console.warn("ngOnInit");
//   this.name="sidhu"
  
// }

// ngDoCheck(){
//   console.warn("ngDoCheck");
  
// }

updateName(){
  this.name="Peter"
}

updateCounter(){
  this.count++
}
toggle(){
  this.showChild=!this.showChild
}
}
