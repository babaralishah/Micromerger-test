import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from 'src/app/Services/Authentication-Service/authentication.service';
import { LocalUserService } from 'src/app/Services/local-user-service/local-user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  submitted = false;
  registerForm!: FormGroup;
  constructor(
    private LocalUserService: LocalUserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.initialize();
  }
  submitForm(): void {
    for (const i in this.registerForm.controls) {
      this.registerForm.controls[i].markAsDirty();
      this.registerForm.controls[i].updateValueAndValidity();
    }
  }
  initialize() {
    this.registerForm = this.formBuilder.group({
      fullname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),],],
      password: ["", [Validators.required, Validators.minLength(5)]]
    });
  }
  registerUser() {
    this.submitForm();
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.userSignup(this.registerForm.value).subscribe(
      (data) => {
        console.log("signup data: ", data);
        const msg = data.message;
        this.toastr.success(msg, "Success", {
          timeOut: 5000,
        });
        this.router.navigateByUrl("/home");
      },
      (error) => {
        console.log(error.error.message);
        this.toastr.error(error.error.message, "Error", {
          timeOut: 5000,
        });
      }
    );

  }
  get f() {
    return this.registerForm.controls;
  }

}
