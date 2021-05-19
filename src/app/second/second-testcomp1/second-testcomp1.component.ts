import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-testcomp1',
  templateUrl: './second-testcomp1.component.html',
  styleUrls: ['./second-testcomp1.component.css']
})
export class SecondTestcomp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("i am SecondTestcomp1Component ");

  }

}
