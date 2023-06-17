import { Component, OnInit } from '@angular/core';

import { listaDisponibilidadPorUsuarioI } from '../../../../models/listDispUser.interface';
import { ApiServiceService } from '../../../../servicios/api-service.service';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.css']
})
export class DisponibilidadComponent implements OnInit {
  nombrecompleto = 'Nombre del usuario';
  titulo = 'Titulo del usuario';
  departamento = 'departamento del usuario';

  constructor (private api:ApiServiceService){
    this.notificaciones = [];
  }

  notificaciones:listaDisponibilidadPorUsuarioI[];

  ngOnInit(): void {
    const Usuario = localStorage.getItem('idUsuario');

    if (Usuario) {
      const idUsuario = parseInt(Usuario);

      this.api.ListaClasesDocente(idUsuario).subscribe(data =>
        this.notificaciones = data);
    }
  }

}
