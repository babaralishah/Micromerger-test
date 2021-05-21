import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";

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
    // console.log(this.existing);

    if (this.existing == null) {
      let existing: any = [];
      existing[0] = user;
      this.existing = existing[0]
      // this.existing = user;
      console.log(this.existing);
      console.log(existing);
      localStorage.setItem("userData", JSON.stringify(existing));

    }
    else {
      this.existing.push(user)
      console.log(this.existing);
      localStorage.setItem("userData", JSON.stringify(this.existing));

    }
    // this.existing.fullname = user.fullname;
    // this.existing.email = user.email;
    // this.existing.password = user.password;
    // console.log(this.existing);
    // console.log(user);

    // this.current_user = user;
  }
  getTheUserData() {
    this.existing = localStorage.getItem('userData');
    this.existing = JSON.parse(this.existing);
    console.log(this.existing);

    return this.existing;
  }

}
