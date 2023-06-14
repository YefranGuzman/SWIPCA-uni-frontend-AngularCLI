import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {loginI} from '../models/login.interface'
import {responseI} from '../models/response.interface'
import { Observable } from 'rxjs';
import { listaDisponibilidadPorUsuarioI } from '../models/listDispUser.interface';


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
  
  ListaClasesDocente(idUsuario:number):Observable<listaDisponibilidadPorUsuarioI[]>{
    let direccion = this.url + "/api/Clase/agenda?idUsuario=" + idUsuario;
    return this.http.get<listaDisponibilidadPorUsuarioI[]>(direccion);
  }
}
