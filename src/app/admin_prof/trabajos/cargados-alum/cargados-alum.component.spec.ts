import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargadosAlumComponent } from './cargados-alum.component';

describe('CargadosAlumComponent', () => {
  let component: CargadosAlumComponent;
  let fixture: ComponentFixture<CargadosAlumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargadosAlumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargadosAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
