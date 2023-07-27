export interface GrupoI {
    idGrupo: number;
    idTurno: number;
    nombre: string;
    idCarrera: number;
    turno: number;
    cargaAcademicas: any[]; // Puedes reemplazar 'any' con la interfaz adecuada si tienes información sobre 'cargaAcademicas'
    horarios: any[]; // Puedes reemplazar 'any' con la interfaz adecuada si tienes información sobre 'horarios'
    idCarreraNavigation: any; // Puedes reemplazar 'any' con la interfaz adecuada si tienes información sobre 'idCarreraNavigation'
    idTurnoNavigation: any; // Puedes reemplazar 'any' con la interfaz adecuada si tienes información sobre 'idTurnoNavigation'
}
  