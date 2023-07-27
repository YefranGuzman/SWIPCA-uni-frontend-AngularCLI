import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {loginI} from '../models/login.interface'
import {responseI} from '../models/response.interface'
import { Observable } from 'rxjs';

import { listaDisponibilidadPorUsuarioI } from '../models/listDispUser.interface';
import { disponibilidadAgendaI } from '../models/agendaUser.interface';
import { departamentoI } from '../models/departamentoUser.interface';
import { informacionUsuarioI } from '../models/informacionUsuario.interface';
import { AsignaturaResponseI } from '../models/getListaAsignaturas.interface';

import { getObtenerCargaAcademicaI, ObtenerCargaAcademicaI } from '../models/getObtenerCargaAcademica.interface';
import { ObtenerDocenteI } from '../models/getObtenerDocente.interface';
import { GrupoI } from '../models/getGrupo.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url: string = "https://localhost:7283/"

  constructor(private http:HttpClient) { }

  InicioSesion(form: loginI):Observable<responseI>{
    let direccion = this.url + "api/Usuario/Login";
    return this.http.post<responseI>(direccion,form);
  }
  
  //Pantalla disponibilidad
  ListaClasesDocente(idUsuario:number):Observable<listaDisponibilidadPorUsuarioI[]>{
    let direccion = this.url+"api/Clase/agenda?idUsuario="+idUsuario;
    return this.http.get<listaDisponibilidadPorUsuarioI[]>(direccion);
  }

  listarAgendaDocente(idUsuario:number):Observable<disponibilidadAgendaI[]>{
    let direccion = this.url+"agenda_docente?idUsuario="+idUsuario;
    return this.http.get<disponibilidadAgendaI[]>(direccion);
  }

  listardepartamento(idUsuario:number):Observable<departamentoI[]>{
    let direccion = this.url+"api/Asignaturas/listarAsignaturasDepartamento?Usuario="+idUsuario;
    return this.http.get<departamentoI[]>(direccion);
  }
  
  informacionUsuario(idUsuario:number):Observable<informacionUsuarioI>{
    let direccion = this.url+"api/Usuario/getInformacionUsuario?idUsuario="+idUsuario;
    return this.http.get<informacionUsuarioI>(direccion);
  }

  //api/CargaAcademica
  getObtenerCargaAcademica(form: getObtenerCargaAcademicaI): Observable<ObtenerCargaAcademicaI[]> {
    let direccion = `${this.url}ObtenerCargaAcademica?IdUsuarioLogin=${form.IdUsuarioLogin}&nombreturno=${form.nombreturno}`;
    return this.http.get<ObtenerCargaAcademicaI[]>(direccion);
  }  
  //api/Asignatura
  getObtenerAsignatura(idUsuario:number):Observable<AsignaturaResponseI[]>{
    let direccion = this.url+"api/Asignaturas/ListaAsignaturas?idUsuario=" + idUsuario;
    return this.http.get<AsignaturaResponseI[]>(direccion);
  }
  //api/Docentes
  getObtenerDocente(idUsuario:number):Observable<ObtenerDocenteI[]>{
    let direccion = this.url+"api/Docentes/ObtenerDocente?idUsuario=" + idUsuario;
    return this.http.get<ObtenerDocenteI[]>(direccion);
  }
  //api/Grupo
  getObtenerGrupo():Observable<GrupoI[]>{
    let direccion = this.url+"api/Grupo";
    return this.http.get<GrupoI[]>(direccion);
  }
}
