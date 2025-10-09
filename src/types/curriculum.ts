export interface Experiencia {
  id: number;
  empresa: string;
  duracion: string;
  cargo: string;
  funciones: string;
}

export interface Formacion {
  id: number;
  titulo: string;
  institucion: string;
  ciudad: string;
  detalles: string;
}

export interface FormacionVirtual {
  id: number;
  carrera: string;
  plataforma: string;
  duracion: string;
  estado: string;
}

export interface CurriculumData {
  experiencia: Experiencia[];
  formacion: Formacion[];
  formacionVirtual: FormacionVirtual[];
}