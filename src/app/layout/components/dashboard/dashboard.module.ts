import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, DashboardRoutes],
  declarations: [
  ],
  exports: [RouterModule],
})
export class DashboardModule {}
