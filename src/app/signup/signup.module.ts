import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupRoutingModule } from './signup-routing.module';



@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }
