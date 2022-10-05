import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeproComponent } from './homepro.component';

describe('HomeproComponent', () => {
  let component: HomeproComponent;
  let fixture: ComponentFixture<HomeproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
