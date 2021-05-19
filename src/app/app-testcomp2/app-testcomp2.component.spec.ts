import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTestcomp2Component } from './app-testcomp2.component';

describe('AppTestcomp2Component', () => {
  let component: AppTestcomp2Component;
  let fixture: ComponentFixture<AppTestcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTestcomp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTestcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
