import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdTestcomp1Component } from './third-testcomp1/third-testcomp1.component';
import { ThirdTestcomp2Component } from './third-testcomp2/third-testcomp2.component';
import { ThirdRoutingModule } from './third-routing.module';



@NgModule({
  declarations: [
    ThirdTestcomp1Component,
    ThirdTestcomp2Component
  ],
  imports: [
    CommonModule,
    ThirdRoutingModule
  ]
})
export class ThirdModule { }
