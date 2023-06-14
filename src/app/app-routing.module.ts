import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/pantallas/login/login.component'
import { DashboardComponent } from './pantallas/dashboard/dashboard.component';
import { CargahorariaComponent } from './pantallas/cargahoraria/cargahoraria.component';
import { DisponibilidadComponent } from './pantallas/disponibilidad/disponibilidad.component';
import { HorarioComponent } from './pantallas/horario/horario.component';
import { PerfilComponent } from './pantallas/perfil/perfil.component';
import { PrincipalComponent } from './pantallas/principal/principal.component';
import { AyudaComponent } from './pantallas/ayuda/ayuda.component';
import { CreaciondisponibilidadComponent } from './pantallas/creaciondisponibilidad/creaciondisponibilidad.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'cargahoraria', component: CargahorariaComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'disponibilidad', component: DisponibilidadComponent},
  {path: 'horario', component: HorarioComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ayuda', component: AyudaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rutadecomponente = [LoginComponent,CargahorariaComponent,DashboardComponent,DisponibilidadComponent,HorarioComponent,PerfilComponent,PrincipalComponent,AyudaComponent,CreaciondisponibilidadComponent]