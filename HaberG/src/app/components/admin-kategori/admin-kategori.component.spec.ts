import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKategoriComponent } from './admin-kategori.component';

describe('AdminKategoriComponent', () => {
  let component: AdminKategoriComponent;
  let fixture: ComponentFixture<AdminKategoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminKategoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
