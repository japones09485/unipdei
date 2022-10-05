import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomadoComponent } from './diplomado.component';

describe('DiplomadoComponent', () => {
  let component: DiplomadoComponent;
  let fixture: ComponentFixture<DiplomadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
