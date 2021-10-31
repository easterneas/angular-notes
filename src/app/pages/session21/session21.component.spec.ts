import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session21Component } from './session21.component';

describe('Session21Component', () => {
  let component: Session21Component;
  let fixture: ComponentFixture<Session21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
