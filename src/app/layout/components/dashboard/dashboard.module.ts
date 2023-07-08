import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routing';
import { RouterModule } from '@angular/router';
import { ComprobardisponibilidadComponent } from './comprobardisponibilidad/comprobardisponibilidad.component';

@NgModule({
  imports: [CommonModule, DashboardRoutes],
  declarations: [
    ComprobardisponibilidadComponent
  ],
  exports: [RouterModule],
})
export class DashboardModule {}
