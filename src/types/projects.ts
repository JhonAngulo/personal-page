export interface Project {
  id: number;
  titulo: string;
  imagen: string;
  detalles: string;
  url: string;
  repositorio: string;
}

export interface ProjectsData {
  portafolio: Project[];
}