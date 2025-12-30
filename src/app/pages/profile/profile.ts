import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  constructor(private route: ActivatedRoute) { }
  name=signal("");
  age=signal(0);
  id=signal(0);


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.name.set(params['name'])
      this.age.set(params['age'])
      this.id.set(params['id'])

    });
  }
} 
