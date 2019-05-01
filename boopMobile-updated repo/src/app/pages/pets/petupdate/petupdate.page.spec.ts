import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetupdatePage } from './petupdate.page';

describe('PetupdatePage', () => {
  let component: PetupdatePage;
  let fixture: ComponentFixture<PetupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
