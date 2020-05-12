import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataResponseComponent } from './data-response.component';

describe('DataResponseComponent', () => {
  let component: DataResponseComponent;
  let fixture: ComponentFixture<DataResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
