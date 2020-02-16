import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashmodPage } from './dashmod.page';

describe('DashmodPage', () => {
  let component: DashmodPage;
  let fixture: ComponentFixture<DashmodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashmodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashmodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
