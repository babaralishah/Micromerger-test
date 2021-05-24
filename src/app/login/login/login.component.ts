import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { LocalUserService } from 'src/app/Services/local-user-service/local-user.service';
import { Router } from "@angular/router";
import { AuthenticationService } from 'src/app/Services/Authentication-Service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() appHighlight = '';
  // validateForm!: FormGroup;
  color = 'yellow';
  isUserFound: boolean = true;
  submitted = false;
  loginForm!: FormGroup;
  currentUser: any;
  userData: any;
  constructor(
    private LocalUserService: LocalUserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthenticationService) {
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
      password: ["", [Validators.required
        // , Validators.minLength(5)
      ]]
    });
  }

  loginUser() {
    this.submitForm();
    this.authService.userLogin(this.loginForm.value).subscribe(
      (data) => {
        console.log("Subscribed Data: ", data);
        const msg = data.message;
        const token = data.token;
        const email = this.loginForm.value.email;
        this.userData = data;
        console.log("UserData", this.userData);

        this.toastr.success(msg, "Success", {
          timeOut: 5000,
        });
        this.router.navigate(["/home"]);
      },
      // (error) => {
      //   console.error(error.error.message);
      //   this.errorMessage = error;
      //   this.toastr.error(error.error.message, "Error", {
      //     timeOut: 5000,
      //   });
      // }
    );
  }

  // loginUser() {
  //   this.submitForm();
  //   this.submitted = true;
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   console.log(this.loginForm.value);
  //   this.currentUser = this.LocalUserService.getTheUserData();
  //   for (let i = 0; i < this.currentUser.length; i++) {
  //     if (this.currentUser[i]?.email == this.loginForm.value?.email && this.currentUser[i]?.password == this.loginForm.value?.password) {
  //       this.toastr.success("Successfully Logged In", "Success", {
  //         timeOut: 5000,
  //       });

  //       console.log(this.isUserFound);
  //       this.isUserFound = true;
  //       this.router.navigateByUrl("/home");
  //     }
  //     else if (i == this.currentUser.length) {

  //       this.toastr.error("User doesnt exists!!", "Error", {
  //         timeOut: 5000,
  //       });
  //     }
  //   }
  //   {
  //   }

  // }
}


