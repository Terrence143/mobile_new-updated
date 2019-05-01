import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetregPage } from './petreg.page';

describe('PetregPage', () => {
  let component: PetregPage;
  let fixture: ComponentFixture<PetregPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetregPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetregPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
