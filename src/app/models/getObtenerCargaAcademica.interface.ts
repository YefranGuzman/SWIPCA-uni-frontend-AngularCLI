export interface getObtenerCargaAcademicaI{
    IdUsuarioLogin : Int16Array;
    idUsuarioObtener : Int16Array;
    nombreturno : string;
}

export interface ObtenerCargaAcademicaI{
    idCarga : Int16Array,
    asignatura : string,
    aula : string,
    grupo : string,
    horario : string,
    frecuencia : Int16Array,
    observacion : string,
    observacionValidada: string
}