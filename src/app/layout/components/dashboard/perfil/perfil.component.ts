import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../../servicios/api-service.service';

import { informacionUsuarioI } from '../../../../models/informacionUsuario.interface';

import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  standalone: true,
  imports: [CommonModule, MatListModule, MatFormFieldModule,MatIconModule,MatButtonModule,MatInputModule]
})
export class PerfilComponent implements OnInit {
  hide = true;
  constructor(private api: ApiServiceService) {
    this.infoUser = {} as informacionUsuarioI;
  }

  infoUser: informacionUsuarioI;

  ngOnInit() {
    const Usuario = localStorage.getItem('idUsuario');

    if (Usuario) {
      const idUsuario = parseInt(Usuario);

      this.api.informacionUsuario(idUsuario).subscribe(data => this.infoUser = data);
    }
  }
}
