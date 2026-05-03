import { Tarea } from "./tarea";

export class Lista {
  id: number;
  nombre: string;
  descripcion: string;
  color: string;
  visible: boolean;
  fechaCreacion: string;
  tareas: Tarea[];

  constructor() {
    this.id = 0;
    this.nombre = "";
    this.descripcion = "";
    this.color = "bg-primary text-white";
    this.visible = true;
    this.fechaCreacion = new Date().toISOString().substring(0, 10);
    this.tareas = [];
  }
}
