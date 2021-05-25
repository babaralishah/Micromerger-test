import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user/edit-user.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'edit-user',
    component: EditUserComponent
  },

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
