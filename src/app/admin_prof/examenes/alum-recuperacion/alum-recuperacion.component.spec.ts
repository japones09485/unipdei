import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumRecuperacionComponent } from './alum-recuperacion.component';

describe('AlumRecuperacionComponent', () => {
  let component: AlumRecuperacionComponent;
  let fixture: ComponentFixture<AlumRecuperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumRecuperacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumRecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
