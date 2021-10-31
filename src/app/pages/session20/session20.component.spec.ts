import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session20Component } from './session20.component';

describe('Session20Component', () => {
  let component: Session20Component;
  let fixture: ComponentFixture<Session20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
