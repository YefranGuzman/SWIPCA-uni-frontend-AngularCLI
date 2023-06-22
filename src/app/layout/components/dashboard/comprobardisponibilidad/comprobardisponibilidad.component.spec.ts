import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobardisponibilidadComponent } from './comprobardisponibilidad.component';

describe('ComprobardisponibilidadComponent', () => {
  let component: ComprobardisponibilidadComponent;
  let fixture: ComponentFixture<ComprobardisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobardisponibilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprobardisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
