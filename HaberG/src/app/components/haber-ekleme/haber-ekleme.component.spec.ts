import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaberEklemeComponent } from './haber-ekleme.component';

describe('HaberEklemeComponent', () => {
  let component: HaberEklemeComponent;
  let fixture: ComponentFixture<HaberEklemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaberEklemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaberEklemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
