import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
// import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly url = "http://localhost:3000";

  constructor(private httpClient: HttpClient, public router: Router) { }
  userLogin(user: any): Observable<any> {
    console.log(user);

    return this.httpClient.post(`${this.url}/users/login`, user);
  }
  userSignup(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}/users/register`, user);
  }
  getAllUser(): Observable<any> {

    return this.httpClient.get(`${this.url}/users/`);
  }

  deleteSingleUser(id: any) {
    return this.httpClient.delete<any>(
      `${this.url}/users/delete/${id}`
      // {
      //   headers: new HttpHeaders().set("Authorization", this.getToken()),
      // }
    );
  }
}

