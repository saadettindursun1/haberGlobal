import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaberEkleComponent } from './haber-ekle.component';

describe('HaberEkleComponent', () => {
  let component: HaberEkleComponent;
  let fixture: ComponentFixture<HaberEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaberEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaberEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
