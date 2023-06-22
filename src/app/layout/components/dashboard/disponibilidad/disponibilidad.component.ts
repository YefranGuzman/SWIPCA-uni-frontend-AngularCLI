import { Component, OnInit } from '@angular/core';

import { listaDisponibilidadPorUsuarioI } from '../../../../models/listDispUser.interface';
import { disponibilidadAgendaI } from '../../../../models/agendaUser.interface';
import { ApiServiceService } from '../../../../servicios/api-service.service';
import { departamentoI } from '../../../../models/departamentoUser.interface';

import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.css'],
  standalone: true,
  imports: [MatTabsModule]
})
export class DisponibilidadComponent implements OnInit {
  nombrecompletoUser = 'Nombre del usuario';
  tituloUser = 'Titulo del usuario';
  departamentoUser = 'departamento del usuario';

  constructor (private api:ApiServiceService){
    this.notificaciones = [];
    this.agenda = [];
    this.departamento = [];
  }

  notificaciones:listaDisponibilidadPorUsuarioI[];
  agenda: disponibilidadAgendaI[];
  departamento: departamentoI[];

  ngOnInit(): void {
    const Usuario = localStorage.getItem('idUsuario');

    if (Usuario) {
      const idUsuario = parseInt(Usuario);

      this.api.ListaClasesDocente(idUsuario).subscribe(data => this.notificaciones = data);
      this.api.listarAgendaDocente(idUsuario).subscribe(data => this.agenda = data);
      this.api.listardepartamento(idUsuario).subscribe(data => this.departamento = data);
    }
  }

}
