import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicklocPage } from './pickloc.page';

describe('PicklocPage', () => {
  let component: PicklocPage;
  let fixture: ComponentFixture<PicklocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicklocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicklocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
