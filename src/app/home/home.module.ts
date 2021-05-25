import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { EditUserComponent } from './edit-user/edit-user/edit-user.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ToastrModule } from "ngx-toastr";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    HomeComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    NzFormModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ScrollingModule,
    DragDropModule,
    NzInputModule
  ]
})
export class HomeModule { }
