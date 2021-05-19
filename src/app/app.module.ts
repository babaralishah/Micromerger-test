import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from "ngx-toastr";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { AppTestcomp1Component } from './app-testcomp1/app-testcomp1.component';
import { AppRoutingModule } from './app-routing.module';
import { SecondModule } from './second/second.module';
import { ThirdModule } from './third/third.module';
import { AppTestcomp2Component } from './app-testcomp2/app-testcomp2.component';
import { LocalUserService } from './Services/local-user-service/local-user.service';

@NgModule({
  declarations: [
    AppComponent,
    AppTestcomp1Component,
    AppTestcomp2Component,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SecondModule,
    ThirdModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    // AngularFontAwesomeModule
  ],
  providers: [LocalUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
