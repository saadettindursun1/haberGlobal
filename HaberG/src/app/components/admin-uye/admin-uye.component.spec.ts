import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUyeComponent } from './admin-uye.component';

describe('AdminUyeComponent', () => {
  let component: AdminUyeComponent;
  let fixture: ComponentFixture<AdminUyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
