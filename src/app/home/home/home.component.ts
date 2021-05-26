import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
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
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private LocalUserService: LocalUserService,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getTheUserData();
  }
  getTheUserData() {
    this.authService.getAllUser().subscribe(
      (data) => {
        this.data = data?.data?.docs;
        console.log("data: ", data?.data?.docs);
        if (data?.data?.docs?.length === 0) {

          localStorage.removeItem("token");
          console.log("\nlogout\n");
          // this.router.navigateByUrl("login");
          window.location.reload();
        }
        const msg = data.message;
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
        }, 200);
      });
  }

  async getLazy1() {
    this.viewContainerRef.clear();
    const { EditUserComponent } = await import('../edit-user/edit-user/edit-user.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(EditUserComponent)
    );
  }

  setUser(user: any) {
    console.log(user);

    this.authService.setUser(user);
    this.router.navigateByUrl("/home/edit-user");
  }
}

