import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirProgComponent } from './inscribir-prog.component';

describe('InscribirProgComponent', () => {
  let component: InscribirProgComponent;
  let fixture: ComponentFixture<InscribirProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscribirProgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscribirProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
