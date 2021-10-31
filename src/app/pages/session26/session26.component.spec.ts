import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session26Component } from './session26.component';

describe('Session26Component', () => {
  let component: Session26Component;
  let fixture: ComponentFixture<Session26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
