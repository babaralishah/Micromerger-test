import { Injectable } from "@angular/core";

import { ToastrService } from "ngx-toastr";
// import {
//   HttpClient,
//   HttpHeaders,
//   HttpErrorResponse,
// } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { Router } from "@angular/router";
// import { throwError } from "rxjs";
// import { catchError, map } from "rxjs/operators";
// import jwt_decode from "jwt-decode";import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalUserService {
  current_user: any;
  existing: any = [];
  constructor(private toastr: ToastrService) { }

  loginTheUser(user: any) {
    this.existing = localStorage.getItem('userData');
    this.existing = JSON.parse(this.existing);
    console.log(this.existing)
    console.log(user?.email);

    if (this.existing?.email == user?.email && this.existing?.password == user?.password) {

      this.toastr.success("Successfully Logged In", "Success", {
        timeOut: 5000,
      });
    }
    else {
      this.toastr.error("User doesnt exists", "Error", {
        timeOut: 5000,
      });
    }
  }

  saveTheNewUser(user: any) {
    console.log(user);
    // existing: any = [];
    this.existing = localStorage.getItem('userData');
    this.existing = JSON.parse(this.existing);
    // this.existing.push(user);
    // console.log(JSON.parse(JSON.stringify(this.existing)));

    console.log(this.existing);
    console.log(user);



    localStorage.setItem("userData", JSON.stringify(user));
    this.current_user = user;

  }
  // Set inventory form title
  setFormTitle(name: any) {
    // localStorage.setItem()
    localStorage.setItem("form_title", name);
    this.current_user = name;
  }
  // Get inventory form title
  getFormTitle() {
    return localStorage.getItem("form_title");
    // return this.current_user;
  }
  removeFormTitle() {
    this.current_user = null;
  }
}
