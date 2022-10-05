import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBComponent } from './video-b.component';

describe('VideoBComponent', () => {
  let component: VideoBComponent;
  let fixture: ComponentFixture<VideoBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
