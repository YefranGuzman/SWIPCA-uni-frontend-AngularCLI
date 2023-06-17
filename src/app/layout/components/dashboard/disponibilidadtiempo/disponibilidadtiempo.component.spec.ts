import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadtiempoComponent } from './disponibilidadtiempo.component';

describe('DisponibilidadtiempoComponent', () => {
  let component: DisponibilidadtiempoComponent;
  let fixture: ComponentFixture<DisponibilidadtiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisponibilidadtiempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisponibilidadtiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
