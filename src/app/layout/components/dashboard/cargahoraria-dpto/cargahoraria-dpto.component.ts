import { Component, OnInit } from '@angular/core';

import { AsignaturaResponseI } from '../../../../models/getListaAsignaturas.interface';
import { ApiServiceService } from '../../../../servicios/api-service.service';
import { Router } from '@angular/router';

import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { using } from 'rxjs';
import { ObtenerDocenteI } from '../../../../models/getObtenerDocente.interface';
import { GrupoI } from '../../../../models/getGrupo.interface';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cargahoraria-dpto',
  templateUrl: './cargahoraria-dpto.component.html',
  styleUrls: ['./cargahoraria-dpto.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule, MatButtonModule]
})
export class CargahorariaDPTOComponent implements OnInit {
  docentes: ObtenerDocenteI[];
  asignaturasdpto: AsignaturaResponseI[];
  grupos: GrupoI[];

  constructor(private api:ApiServiceService){
    this.asignaturasdpto = [];
    this.docentes = [];
    this.grupos = [];
  }
  ngOnInit(){

      const Usuario = localStorage.getItem('idUsuario');
  
      if(Usuario){
        const idUsuario = parseInt(Usuario);
        this.api.getObtenerAsignatura(idUsuario).subscribe(data => this.asignaturasdpto = data);
        this.api.getObtenerDocente(idUsuario).subscribe(data => this.docentes = data);
      }
      
    this.api.getObtenerGrupo().subscribe(data => this.grupos = data)
  }
}
