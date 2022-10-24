import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllprogramasComponent } from './allprogramas.component';

describe('AllprogramasComponent', () => {
  let component: AllprogramasComponent;
  let fixture: ComponentFixture<AllprogramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllprogramasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllprogramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
