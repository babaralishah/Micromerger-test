import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/Services/Authentication-Service/authentication.service';
import { LocalUserService } from 'src/app/Services/local-user-service/local-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  deleteId: any;
  user: any;

  constructor(
    private LocalUserService: LocalUserService,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getTheUserData();
  }
  getTheUserData() {
    // this.data = this.LocalUserService.getTheUserData();
    this.authService.getAllUser().subscribe(
      (data) => {
        this.data = data?.data?.docs;
        console.log("data: ", data?.data?.docs);
        const msg = data.message;

        // if (data.userData._id) {
        // this.toastr.success(msg, "Success", {
        //   timeOut: 5000,
        // });

        this.router.navigateByUrl("/home");
        // }
      },
      (error) => {
        console.log(error.error.message);
        this.toastr.error(error.error.message, "Error", {
          timeOut: 5000,
        });
      }
    );
    console.log(this.data);

  }
  deleteUser(user: any) {
    console.log(user);

    this.authService
      .deleteSingleUser(user?._id)
      .subscribe((data) => {
        console.log(data);
        this.toastr.success(data?.message, "Success", {
          timeOut: 5000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      });

  }

  openModal() {
    const buttonModal = document.getElementById("openModalButton")
    console.log('buttonModal', buttonModal)
    buttonModal.click()
  }

}

