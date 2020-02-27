import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChekoutPage } from './chekout.page';

describe('ChekoutPage', () => {
  let component: ChekoutPage;
  let fixture: ComponentFixture<ChekoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChekoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChekoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
