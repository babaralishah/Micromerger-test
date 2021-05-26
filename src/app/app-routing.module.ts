import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondModule } from './second/second.module';
import { IsLoginGuard } from './Services/guards/islogin.guard';
import { RedirectLoginGuard } from './Services/guards/redirectlogin.guard';

const routes: Routes = [{
  path: 'login',
  canActivate: [RedirectLoginGuard],
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
}, {
  path: 'signup',
  loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
}, {
  path: 'home',
  canActivate: [IsLoginGuard],
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
  canActivate: [RedirectLoginGuard],
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
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
