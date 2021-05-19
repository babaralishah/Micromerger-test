import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTestcomp1Component } from './app-testcomp1/app-testcomp1.component';
import { AppRoutingModule } from './app-routing.module';
import { SecondModule } from './second/second.module';
import { ThirdModule } from './third/third.module';
import { AppTestcomp2Component } from './app-testcomp2/app-testcomp2.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTestcomp1Component,
    AppTestcomp2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecondModule,
    ThirdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
