import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrfComponent } from './menu-prf.component';

describe('MenuPrfComponent', () => {
  let component: MenuPrfComponent;
  let fixture: ComponentFixture<MenuPrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
