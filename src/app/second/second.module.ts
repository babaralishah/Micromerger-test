import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondTestcomp1Component } from './second-testcomp1/second-testcomp1.component';
import { SecondTestcomp2Component } from './second-testcomp2/second-testcomp2.component';
import { SecondRoutingModule } from './second-routing.module';



@NgModule({
  declarations: [
    SecondTestcomp1Component,
    SecondTestcomp2Component
  ],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
