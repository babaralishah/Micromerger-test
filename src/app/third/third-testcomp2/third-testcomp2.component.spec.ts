import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTestcomp2Component } from './third-testcomp2.component';

describe('ThirdTestcomp2Component', () => {
  let component: ThirdTestcomp2Component;
  let fixture: ComponentFixture<ThirdTestcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdTestcomp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTestcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
