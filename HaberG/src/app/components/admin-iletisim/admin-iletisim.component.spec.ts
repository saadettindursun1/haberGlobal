import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIletisimComponent } from './admin-iletisim.component';

describe('AdminIletisimComponent', () => {
  let component: AdminIletisimComponent;
  let fixture: ComponentFixture<AdminIletisimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminIletisimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIletisimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
