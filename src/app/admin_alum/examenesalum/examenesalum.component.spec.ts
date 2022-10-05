import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesalumComponent } from './examenesalum.component';

describe('ExamenesalumComponent', () => {
  let component: ExamenesalumComponent;
  let fixture: ComponentFixture<ExamenesalumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesalumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenesalumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
