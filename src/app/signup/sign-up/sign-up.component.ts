import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { LocalUserService } from 'src/app/Services/local-user-service/local-user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  constructor(
    private LocalUserService: LocalUserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.registerForm = this.formBuilder.group({
      fullname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),],],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  registerUser() {

    console.log(this.registerForm.value);
    this.LocalUserService.saveTheNewUser(this.registerForm.value);

  }
}
