import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { LocalUserService } from 'src/app/Services/local-user-service/local-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private LocalUserService: LocalUserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) {
    console.log("hey");

  }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),],],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  loginUser() {

    console.log(this.loginForm.value);
    this.LocalUserService.loginTheUser(this.loginForm.value);

  }
}
