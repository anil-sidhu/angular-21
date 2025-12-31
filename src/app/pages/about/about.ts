import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  userName=signal('');
  age=signal('');

constructor(public route:ActivatedRoute){}

ngOnInit(){
this.route.params.subscribe((params)=>{
console.log(params);
this.userName.set(params['name'])
this.age.set(params['age'])


})
}
}
