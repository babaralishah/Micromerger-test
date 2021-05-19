import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-testcomp1',
  templateUrl: './third-testcomp1.component.html',
  styleUrls: ['./third-testcomp1.component.css']
})
export class ThirdTestcomp1Component implements OnInit {

  constructor() {
    console.log("i am ThirdTestcomp1Component ");
  }

  ngOnInit(): void {

  }

}
