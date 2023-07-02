import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../../servicios/api-service.service';

import { listaDisponibilidadPorUsuarioI } from '../../../../models/listDispUser.interface';
import { disponibilidadAgendaI } from '../../../../models/agendaUser.interface';
import { departamentoI } from '../../../../models/departamentoUser.interface';
import { informacionUsuarioI } from '../../../../models/informacionUsuario.interface';

import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.css'],
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatListModule]
})
export class DisponibilidadComponent implements OnInit {

  constructor(private api: ApiServiceService) {
    this.notificacion = [];
    this.agenda = [];
    this.departamento = [];
    this.infoUser = {} as informacionUsuarioI;
  }

  notificacion: listaDisponibilidadPorUsuarioI[];
  agenda: disponibilidadAgendaI[];
  departamento: departamentoI[];
  infoUser: informacionUsuarioI;

  ngOnInit() {
    const Usuario = localStorage.getItem('idUsuario');

    if (Usuario) {
      const idUsuario = parseInt(Usuario);

      this.api.ListaClasesDocente(idUsuario).subscribe(data => this.notificacion = data);
      this.api.listarAgendaDocente(idUsuario).subscribe(data => this.agenda = data);
      this.api.listardepartamento(idUsuario).subscribe(data => this.departamento = data);
      this.api.informacionUsuario(idUsuario).subscribe(data => this.infoUser = data);
    }
  }
}
