import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisternewPage } from './registernew.page';

describe('RegisternewPage', () => {
  let component: RegisternewPage;
  let fixture: ComponentFixture<RegisternewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisternewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisternewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
