import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {loginI} from '../models/login.interface'
import {responseI} from '../models/response.interface'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url: string = "api/Usuario/Login"

  constructor(private http:HttpClient) { }

  InicioSesion(form: loginI):Observable<responseI>{
    let direccion = this.url;
    return this.http.post<responseI>(direccion,form);
  }
}
