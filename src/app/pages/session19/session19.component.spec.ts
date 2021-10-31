import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session19Component } from './session19.component';

describe('Session19Component', () => {
  let component: Session19Component;
  let fixture: ComponentFixture<Session19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
