import { Component, OnInit } from '@angular/core';

import { AsignaturaResponseI } from '../../../../models/getListaAsignaturas.interface';
import { ApiServiceService } from '../../../../servicios/api-service.service';

import {FormControl, FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Observable, map, startWith, using } from 'rxjs';
import { ObtenerDocenteI } from '../../../../models/getObtenerDocente.interface';
import { GrupoI } from '../../../../models/getGrupo.interface';
import { ObtenerCargaAcademicaI, getObtenerCargaAcademicaI } from '../../../../models/getObtenerCargaAcademica.interface';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-cargahoraria-dpto',
  templateUrl: './cargahoraria-dpto.component.html',
  styleUrls: ['./cargahoraria-dpto.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, 
    FormsModule, MatButtonModule,MatTabsModule]
})
export class CargahorariaDPTOComponent implements OnInit {
  docentes: ObtenerDocenteI[];
  asignaturasdpto: AsignaturaResponseI[];
  grupos: GrupoI[];
  selectedIndex: number;
  responseObtenerCargaAcademica: getObtenerCargaAcademicaI;
  resultObtenerCargaAcademica: ObtenerCargaAcademicaI[]
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private api:ApiServiceService){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
    
    this.asignaturasdpto = [];
    this.docentes = [];
    this.grupos = [];
    this.selectedIndex = 0;
    this.responseObtenerCargaAcademica = {} as getObtenerCargaAcademicaI;
    this.resultObtenerCargaAcademica = [];
  }
  ngOnInit(){
    this.selectedIndex = 0;
    const Usuario = localStorage.getItem('idUsuario');
  
    if(Usuario){
      const idUsuario = parseInt(Usuario);
      this.api.getObtenerAsignatura(idUsuario).subscribe(data => this.asignaturasdpto = data);
      this.api.getObtenerDocente(idUsuario).subscribe(data => this.docentes = data);
    }

    this.api.getObtenerGrupo().subscribe(data => this.grupos = data)
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onTabChange(event: any){
    const Usuario = localStorage.getItem('idUsuario');
    this.selectedIndex = event.index;
    if(this.selectedIndex === 0 && Usuario){
      const idUsuario = parseInt(Usuario);
      const turno = 'M';

      this.responseObtenerCargaAcademica = { IdUsuarioLogin : idUsuario, nombreturno: turno
      }

      this.api.getObtenerCargaAcademica(this.responseObtenerCargaAcademica).subscribe(data => {
        this.resultObtenerCargaAcademica = data
      })
    }
    if(this.selectedIndex === 1 && Usuario){
      const idUsuario = parseInt(Usuario);
      const turno = 'T';
      
      this.responseObtenerCargaAcademica = {IdUsuarioLogin : idUsuario, nombreturno: turno
      }

      this.api.getObtenerCargaAcademica(this.responseObtenerCargaAcademica).subscribe(data => {
        this.resultObtenerCargaAcademica = data
      })
    }if(this.selectedIndex === 2 && Usuario){
      const idUsuario = parseInt(Usuario);
      const turno = 'N';

      this.responseObtenerCargaAcademica = { IdUsuarioLogin : idUsuario, nombreturno: turno}
      
      this.api.getObtenerCargaAcademica(this.responseObtenerCargaAcademica).subscribe(data => {
        this.resultObtenerCargaAcademica = data
      })
    }
  }
}
