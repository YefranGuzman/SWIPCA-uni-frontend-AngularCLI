import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargahorariaDPTOComponent } from './cargahoraria-dpto.component';

describe('CargahorariaDPTOComponent', () => {
  let component: CargahorariaDPTOComponent;
  let fixture: ComponentFixture<CargahorariaDPTOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargahorariaDPTOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargahorariaDPTOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
