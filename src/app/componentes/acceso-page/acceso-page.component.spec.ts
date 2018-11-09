import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoPageComponent } from './acceso-page.component';

describe('AccesoPageComponent', () => {
  let component: AccesoPageComponent;
  let fixture: ComponentFixture<AccesoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
