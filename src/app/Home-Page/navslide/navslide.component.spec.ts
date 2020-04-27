import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavslideComponent } from './navslide.component';

describe('NavslideComponent', () => {
  let component: NavslideComponent;
  let fixture: ComponentFixture<NavslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
