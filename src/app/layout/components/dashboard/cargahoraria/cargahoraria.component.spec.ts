import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargahorariaComponent } from './cargahoraria.component';

describe('CargahorariaComponent', () => {
  let component: CargahorariaComponent;
  let fixture: ComponentFixture<CargahorariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargahorariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargahorariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
