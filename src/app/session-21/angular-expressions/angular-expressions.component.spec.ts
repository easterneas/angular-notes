import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExpressionsComponent } from './angular-expressions.component';

describe('AngularExpressionsComponent', () => {
  let component: AngularExpressionsComponent;
  let fixture: ComponentFixture<AngularExpressionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularExpressionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularExpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
