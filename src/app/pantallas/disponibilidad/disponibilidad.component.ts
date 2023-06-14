import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listaDisponibilidadPorUsuarioI } from 'src/app/models/listDispUser.interface';
import { ApiServiceService } from 'src/app/servicios/api-service.service';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.css']
})
export class DisponibilidadComponent {

  constructor (private api:ApiServiceService, private router:Router){
    this.notificaciones = [];
  }

  notificaciones:listaDisponibilidadPorUsuarioI[];

  ngOnInit(): void {
    const Usuario = localStorage.getItem('idUsuario');
  
    if (Usuario) {
      const idUsuario = parseInt(Usuario, 10);
  
      this.api.ListaClasesDocente(idUsuario).subscribe(data =>
        this.notificaciones = data);
    }
  }
  
}
