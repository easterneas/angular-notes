import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session25Component } from './session25.component';

describe('Session25Component', () => {
  let component: Session25Component;
  let fixture: ComponentFixture<Session25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
