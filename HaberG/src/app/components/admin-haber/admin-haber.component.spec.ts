import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHaberComponent } from './admin-haber.component';

describe('AdminHaberComponent', () => {
  let component: AdminHaberComponent;
  let fixture: ComponentFixture<AdminHaberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHaberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHaberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
