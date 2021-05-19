import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTestcomp1Component } from './third-testcomp1.component';

describe('ThirdTestcomp1Component', () => {
  let component: ThirdTestcomp1Component;
  let fixture: ComponentFixture<ThirdTestcomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdTestcomp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTestcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
