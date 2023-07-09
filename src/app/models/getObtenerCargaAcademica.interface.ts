export interface getObtenerCargaAcademicaI{
    IdUsuarioLogin : number;
    nombreturno : string;
}

export interface ObtenerCargaAcademicaI{
    idCarga : number,
    asignatura : string,
    aula : string,
    grupo : string,
    horario : string,
    frecuencia : number,
    observacion : string,
    observacionValidada: string
}