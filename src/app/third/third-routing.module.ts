import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ThirdTestcomp1Component } from './third-testcomp1/third-testcomp1.component';

const routes: Routes = [
  {
    path: '',
    component: ThirdTestcomp1Component
  },
  // {
  //   path: 'second',
  //   component: SecondTestcomp2Component
  // }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ThirdRoutingModule { }
