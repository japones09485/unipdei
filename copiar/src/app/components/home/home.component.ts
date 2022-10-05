import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  load:boolean = false;
 

  constructor() {
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    }, 2000);
   
  }

}
