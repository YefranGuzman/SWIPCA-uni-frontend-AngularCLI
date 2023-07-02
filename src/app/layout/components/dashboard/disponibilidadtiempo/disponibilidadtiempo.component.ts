import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disponibilidadtiempo',
  templateUrl: './disponibilidadtiempo.component.html',
  styleUrls: ['./disponibilidadtiempo.component.css'],
  standalone: true,
  imports: [ CommonModule,MatTabsModule, MatListModule]
})
export class DisponibilidadtiempoComponent {

}
