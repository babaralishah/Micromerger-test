import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalUserService } from 'src/app/Services/local-user-service/local-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(
    private LocalUserService: LocalUserService,
    private toastr: ToastrService,
    private router: Router,) { }

  ngOnInit(): void {
    this.getTheUserData();
  }
  getTheUserData() {
    this.data = this.LocalUserService.getTheUserData();
    console.log(this.data);

  }
}
