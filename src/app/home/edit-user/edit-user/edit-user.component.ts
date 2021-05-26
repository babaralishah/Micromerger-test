import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from 'src/app/Services/Authentication-Service/authentication.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  registerForm!: FormGroup;
  user: any;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.initialize();
    this.getUser();
    if (this.user) {
      this.updatefields();
    }
  }
  updatefields() {

    this.registerForm.patchValue({ fullname: this.user?.fullname });
    this.registerForm.patchValue({ email: this.user?.email });
  }
  initialize() {
    if (!this.user) {
      this.registerForm = this.formBuilder.group({
        fullname: ["", Validators.required],
        email: ["", [Validators.required, Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),],],
      });
    }
    else {

      this.registerForm = this.formBuilder.group({
        fullname: ["", Validators.required],
        email: [
          "",
          [
            Validators.required,
            Validators.email,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
          ],
        ],
        password: ["", [Validators.minLength(6)]],
      });
    }
  }
  submitForm(): void {
    for (const i in this.registerForm.controls) {
      this.registerForm.controls[i].markAsDirty();
      this.registerForm.controls[i].updateValueAndValidity();
    }
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

  setUser(user: any) {
    this.authService.setUser(user);
  }

  getUser() {
    this.user = this.authService.getUser();
  }
  updateUser() {

    this.authService.updateUser(this.user._id, this.registerForm.value)
      .subscribe((data: any) => {
        console.log("signup data: ", data);
        const msg = data.message;
        const code = data.code;

        if (code === 200) {
          this.toastr.success(msg, "Success", {
            timeOut: 5000,
          });
          this.router.navigateByUrl("/home");
        }
      },
        (error) => {
          console.log(error.error.message);

          this.toastr.error(error.error.message, "Error", {
            timeOut: 5000,
          });
          setTimeout(() => {
            this.registerForm.reset();
          }, 1000);
          setTimeout(() => {
            this.router.navigateByUrl("/home");
          }, 1000);
        }
      );
  }
}