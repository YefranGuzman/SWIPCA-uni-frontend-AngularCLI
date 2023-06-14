import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderusuarioComponent } from './headerusuario.component';

describe('HeaderusuarioComponent', () => {
  let component: HeaderusuarioComponent;
  let fixture: ComponentFixture<HeaderusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderusuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
