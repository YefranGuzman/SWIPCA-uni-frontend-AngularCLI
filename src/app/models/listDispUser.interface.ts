import { Time } from "@angular/common";

export interface listaDisponibilidadPorUsuarioI{
    idClase: Int16Array,
    dia: string,
    asignatura: string,
    grupo: string,
    hora: Time
}