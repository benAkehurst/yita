import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterListPage } from './master-list.page';

describe('MasterListPage', () => {
  let component: MasterListPage;
  let fixture: ComponentFixture<MasterListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
