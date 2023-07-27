export interface AsignaturaResponseI {
  idAsignatura: number;
  nombre: string;
  credito: number;
  frecuencia: number;
  idArea: number;
  clases: ClaseI[]; // Reemplaza "any" con el tipo correcto si es necesario
  historials: any[]; // Reemplaza "any" con el tipo correcto si es necesario
  idAreaNavigation: any; // Reemplaza "any" con el tipo correcto si es necesario
}
  
export interface ClaseI {
  idClase: number;
  idAsignatura: number;
  idDocente: number;
  docente: number;
  horaInicio: string;
  horaFinal: string;
  dia: string;
  cargaAcademicas: any[]; // Reemplaza "any" con el tipo correcto si es necesario
  horarios: any[]; // Reemplaza "any" con el tipo correcto si es necesario
  idAsignaturaNavigation: any; // Reemplaza "any" con el tipo correcto si es necesario
  idDocenteNavigation: any; // Reemplaza "any" con el tipo correcto si es necesario
}  