import { NzFormModule } from 'ng-zorro-antd/form';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ToastrModule } from "ngx-toastr";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { HighlightDirective } from '../Directives/highlight.directive';


@NgModule({
  declarations: [
    LoginComponent,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NzGridModule,
    ToastrModule.forRoot(),
    NzButtonModule,
    NzFormModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ScrollingModule,
    DragDropModule,
    NzInputModule
  ]
})
export class LoginModule { }
