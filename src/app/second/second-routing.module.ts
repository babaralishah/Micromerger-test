import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecondTestcomp1Component } from './second-testcomp1/second-testcomp1.component';
import { SecondTestcomp2Component } from './second-testcomp2/second-testcomp2.component';

const routes: Routes = [
  {
    path: '',
    component: SecondTestcomp1Component
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
export class SecondRoutingModule {

}
