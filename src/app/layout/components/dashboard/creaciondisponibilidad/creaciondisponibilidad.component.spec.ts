import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaciondisponibilidadComponent } from './creaciondisponibilidad.component';

describe('CreaciondisponibilidadComponent', () => {
  let component: CreaciondisponibilidadComponent;
  let fixture: ComponentFixture<CreaciondisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaciondisponibilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaciondisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
