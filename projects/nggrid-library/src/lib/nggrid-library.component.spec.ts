import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGGridLibraryComponent } from './nggrid-library.component';

describe('NGGridLibraryComponent', () => {
  let component: NGGridLibraryComponent;
  let fixture: ComponentFixture<NGGridLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGGridLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGGridLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
