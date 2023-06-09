import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadComponent } from './disponibilidad.component';

describe('DisponibilidadComponent', () => {
  let component: DisponibilidadComponent;
  let fixture: ComponentFixture<DisponibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisponibilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
