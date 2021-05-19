import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
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
}
