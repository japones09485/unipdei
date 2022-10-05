import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosalumComponent } from './videosalum.component';

describe('VideosalumComponent', () => {
  let component: VideosalumComponent;
  let fixture: ComponentFixture<VideosalumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosalumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosalumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
