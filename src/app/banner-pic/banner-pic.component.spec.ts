import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPicComponent } from './banner-pic.component';

describe('BannerPicComponent', () => {
  let component: BannerPicComponent;
  let fixture: ComponentFixture<BannerPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
