import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasProfComponent } from './programas-prof.component';

describe('ProgramasProfComponent', () => {
  let component: ProgramasProfComponent;
  let fixture: ComponentFixture<ProgramasProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramasProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramasProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
