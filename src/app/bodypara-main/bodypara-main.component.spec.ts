import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyparaMainComponent } from './bodypara-main.component';

describe('BodyparaMainComponent', () => {
  let component: BodyparaMainComponent;
  let fixture: ComponentFixture<BodyparaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyparaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyparaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
