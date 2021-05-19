import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTestcomp1Component } from './app-testcomp1.component';

describe('AppTestcomp1Component', () => {
  let component: AppTestcomp1Component;
  let fixture: ComponentFixture<AppTestcomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTestcomp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTestcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
