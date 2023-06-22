import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routing';
import { RouterModule } from '@angular/router';
import { CargahorariaDPTOComponent } from './cargahoraria-dpto/cargahoraria-dpto.component';
import { ComprobardisponibilidadComponent } from './comprobardisponibilidad/comprobardisponibilidad.component';
import { DisponibilidadtiempoComponent } from './disponibilidadtiempo/disponibilidadtiempo.component';

@NgModule({
  imports: [CommonModule, DashboardRoutes],
  declarations: [
    DisponibilidadtiempoComponent,
    CargahorariaDPTOComponent,
    ComprobardisponibilidadComponent
  ],
  exports: [RouterModule],
})
export class DashboardModule {}
