import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { ToastrService } from "ngx-toastr";
// import {
//   HttpClient,
//   HttpHeaders,
//   HttpErrorResponse,
// } from "@angular/common/http";
import { Observable } from "rxjs";
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
  constructor(private toastr: ToastrService,
    private router: Router,) { }

  loginTheUser(user: any): Observable<any> {
    this.existing = localStorage.getItem('userData');
    this.existing = JSON.parse(this.existing);
    console.log(this.existing)
    console.log(user?.email);
    let status: any;
    if (this.existing?.email == user?.email && this.existing?.password == user?.password) {
      status = true;
      this.toastr.success("Successfully Logged In", "Success", {
        timeOut: 5000,
      });
      this.router.navigateByUrl("/home");
      return (status);
    }
    else {
      this.toastr.error("User doesnt exists", "Error", {
        timeOut: 5000,
      });
      status = false;
      return (status);
    }
  }

  saveTheNewUser(user: any) {
    console.log(user);
    // existing: any = [];
    this.existing = localStorage.getItem('userData');
    this.existing = JSON.parse(this.existing);

    console.log(this.existing);
    console.log(user);

    localStorage.setItem("userData", JSON.stringify(user));
    this.current_user = user;
  }
  getTheUserData() {
    this.existing = localStorage.getItem('userData');
    this.existing = JSON.parse(this.existing);
    return this.existing;
  }

}
