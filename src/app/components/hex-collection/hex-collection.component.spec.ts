import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexCollectionComponent } from './hex-collection.component';

describe('HexCollectionComponent', () => {
  let component: HexCollectionComponent;
  let fixture: ComponentFixture<HexCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HexCollectionComponent]
    });
    fixture = TestBed.createComponent(HexCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
