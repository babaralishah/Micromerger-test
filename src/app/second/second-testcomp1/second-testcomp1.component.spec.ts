import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTestcomp1Component } from './second-testcomp1.component';

describe('SecondTestcomp1Component', () => {
  let component: SecondTestcomp1Component;
  let fixture: ComponentFixture<SecondTestcomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTestcomp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTestcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
