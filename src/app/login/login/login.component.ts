import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { LocalUserService } from 'src/app/Services/local-user-service/local-user.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // validateForm!: FormGroup;
  submitted = false;
  loginForm!: FormGroup;
  currentUser: any;
  constructor(
    private LocalUserService: LocalUserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,) {
    console.log("hey");

  }
  submitForm(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
  }


  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),],],
      password: ["", [Validators.required, Validators.minLength(5)]]
    });
  }
  loginUser() {
    this.submitForm();
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.currentUser = this.LocalUserService.getTheUserData();
    if (this.currentUser?.email == this.loginForm.value?.email && this.currentUser?.password == this.loginForm.value?.password) {

      this.toastr.success("Successfully Logged In", "Success", {
        timeOut: 5000,
      });
      this.router.navigateByUrl("/home");
    }
    else {
      this.toastr.error("User doesnt exists", "Error", {
        timeOut: 5000,
      });
    }

  }
}
