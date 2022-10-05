import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentarexComponent } from './presentarex.component';

describe('PresentarexComponent', () => {
  let component: PresentarexComponent;
  let fixture: ComponentFixture<PresentarexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentarexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentarexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
