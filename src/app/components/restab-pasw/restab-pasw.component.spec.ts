import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestabPaswComponent } from './restab-pasw.component';

describe('RestabPaswComponent', () => {
  let component: RestabPaswComponent;
  let fixture: ComponentFixture<RestabPaswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestabPaswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestabPaswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
