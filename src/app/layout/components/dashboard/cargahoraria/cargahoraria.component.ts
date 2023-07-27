import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../../servicios/api-service.service';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { map, startWith} from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgFor, AsyncPipe} from '@angular/common';
import { Observable } from 'rxjs';

import { getObtenerCargaAcademicaI,ObtenerCargaAcademicaI } from '../../../../models/getObtenerCargaAcademica.interface';

@Component({
  selector: 'app-cargahoraria',
  templateUrl: './cargahoraria.component.html',
  styleUrls: ['./cargahoraria.component.css'],
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatListModule,FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,]
})

export class CargahorariaComponent implements OnInit {
  selectedIndex: number;
  responseObtenerCargaAcademica: getObtenerCargaAcademicaI;
  resultObtenerCargaAcademica: ObtenerCargaAcademicaI[]
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(private api:ApiServiceService, private router:Router){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
    this.selectedIndex = 0;
    this.responseObtenerCargaAcademica = {} as getObtenerCargaAcademicaI;
    this.resultObtenerCargaAcademica = [];
  }
  ngOnInit(): void {
    const Usuario = localStorage.getItem('idUsuario');
    this.selectedIndex = 0; // Índice inicial que deseas mostrar
  
    if (Usuario) {
      const idUsuario = parseInt(Usuario);
      const turno = 'M'; // Turno correspondiente al índice inicial
  
      this.responseObtenerCargaAcademica = {
        IdUsuarioLogin: idUsuario,
        nombreturno: turno
      };
  
      this.api.getObtenerCargaAcademica(this.responseObtenerCargaAcademica).subscribe(data => {
        this.resultObtenerCargaAcademica = data;
      });
    }
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
