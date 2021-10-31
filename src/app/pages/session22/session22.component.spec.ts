import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session22Component } from './session22.component';

describe('Session22Component', () => {
  let component: Session22Component;
  let fixture: ComponentFixture<Session22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
