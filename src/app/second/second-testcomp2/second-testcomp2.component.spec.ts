import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTestcomp2Component } from './second-testcomp2.component';

describe('SecondTestcomp2Component', () => {
  let component: SecondTestcomp2Component;
  let fixture: ComponentFixture<SecondTestcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTestcomp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTestcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
