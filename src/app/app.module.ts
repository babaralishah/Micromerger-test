import { NzButtonModule } from 'ng-zorro-antd/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from "ngx-toastr";
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(en);

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


    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule
    // AngularFontAwesomeModule
  ],
  providers: [LocalUserService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
