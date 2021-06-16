import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaberDetayComponent } from './haber-detay.component';

describe('HaberDetayComponent', () => {
  let component: HaberDetayComponent;
  let fixture: ComponentFixture<HaberDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaberDetayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaberDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
