import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLicenseplatenumberComponent } from './input-licenseplatenumber.component';

describe('InputLicenseplatenumberComponent', () => {
  let component: InputLicenseplatenumberComponent;
  let fixture: ComponentFixture<InputLicenseplatenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputLicenseplatenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLicenseplatenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
