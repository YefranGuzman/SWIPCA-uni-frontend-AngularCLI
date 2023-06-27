import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {loginI} from '../models/login.interface'
import {responseI} from '../models/response.interface'
import { Observable } from 'rxjs';
import { listaDisponibilidadPorUsuarioI } from '../models/listDispUser.interface';
import { disponibilidadAgendaI } from '../models/agendaUser.interface';
import { departamentoI } from '../models/departamentoUser.interface';
import { informacionUsuarioI } from '../models/informacionUsuario.interface';


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
    let direccion = this.url+"api/Usuario/InformacionUsuario?idUsuario="+idUsuario;
    return this.http.get<informacionUsuarioI>(direccion);
  }

}
