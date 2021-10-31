import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session24Component } from './session24.component';

describe('Session24Component', () => {
  let component: Session24Component;
  let fixture: ComponentFixture<Session24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
