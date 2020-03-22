import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyParaComponent } from './body-para.component';

describe('BodyParaComponent', () => {
  let component: BodyParaComponent;
  let fixture: ComponentFixture<BodyParaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyParaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
