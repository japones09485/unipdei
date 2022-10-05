import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesAlumnoComponent } from './clases-alumno.component';

describe('ClasesAlumnoComponent', () => {
  let component: ClasesAlumnoComponent;
  let fixture: ComponentFixture<ClasesAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasesAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasesAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
