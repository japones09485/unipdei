import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarTrabajosComponent } from './cargar-trabajos.component';

describe('CargarTrabajosComponent', () => {
  let component: CargarTrabajosComponent;
  let fixture: ComponentFixture<CargarTrabajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarTrabajosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
