import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session23Component } from './session23.component';

describe('Session23Component', () => {
  let component: Session23Component;
  let fixture: ComponentFixture<Session23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Session23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Session23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
