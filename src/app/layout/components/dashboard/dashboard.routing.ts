import { Routes, RouterModule } from '@angular/router';
import { CargahorariaComponent } from './cargahoraria/cargahoraria.component';
import { DisponibilidadComponent } from './disponibilidad/disponibilidad.component';
import { HorarioComponent } from './horario/horario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from '../auth/login/login.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { CreaciondisponibilidadComponent } from './creaciondisponibilidad/creaciondisponibilidad.component';
import { DisponibilidadtiempoComponent } from './disponibilidadtiempo/disponibilidadtiempo.component';

const routes: Routes = [
  { path: 'cargahoraria', component: CargahorariaComponent },
  { path: 'disponibilidad', component: DisponibilidadComponent },
  { path: 'horario', component: HorarioComponent },
  { path: 'Disponibilidadtiempo', component: DisponibilidadtiempoComponent},
  { path: 'perfil', component: PerfilComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'Creacion', component: CreaciondisponibilidadComponent }
];

export const DashboardRoutes = RouterModule.forChild(routes);
