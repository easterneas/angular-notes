import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLifecycleComponent } from './angular-lifecycle.component';

describe('AngularLifecycleComponent', () => {
  let component: AngularLifecycleComponent;
  let fixture: ComponentFixture<AngularLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
