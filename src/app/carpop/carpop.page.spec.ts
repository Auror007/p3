import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpopPage } from './carpop.page';

describe('CarpopPage', () => {
  let component: CarpopPage;
  let fixture: ComponentFixture<CarpopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
