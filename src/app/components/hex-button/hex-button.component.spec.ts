import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexButtonComponent } from './hex-button.component';

describe('HexButtonComponent', () => {
  let component: HexButtonComponent;
  let fixture: ComponentFixture<HexButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HexButtonComponent]
    });
    fixture = TestBed.createComponent(HexButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
