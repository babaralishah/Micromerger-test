import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from './Services/Authentication-Service/authentication.service';
import { LocalUserService } from './Services/local-user-service/local-user.service';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  constructor(
    public LocalUserService: LocalUserService,
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private authService: AuthenticationService,
    private toastr: ToastrService,
    private router: Router,
  ) { }
  async getLazy1() {
    this.viewContainerRef.clear();
    const { AppTestcomp1Component } = await import('./app-testcomp1/app-testcomp1.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(AppTestcomp1Component)
    );
  }

  async getLazy2() {
    this.viewContainerRef.clear();
    const { AppTestcomp2Component } = await import('./app-testcomp2/app-testcomp2.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(AppTestcomp2Component)
    );
  }

  isLogin() {
    const token = this.authService.getToken();
    return token;
  }

  logout() {
    localStorage.removeItem("token");
    // localStorage.removeItem("userData");
    this.toastr.success("Logged Out", "Success", {
      timeOut: 5000,
    });
    console.log("\nlogout\n");
    this.router.navigateByUrl("login");
  }
}
