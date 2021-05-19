import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondModule } from './second/second.module';

const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
}, {
  path: 'signup',
  loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
}, {
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
},
{
  path: 'second',
  loadChildren: () => import('./second/second.module').then(m => m.SecondModule)
},
{
  path: 'third',
  loadChildren: () => import('./third/third.module').then(m => m.ThirdModule)
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
