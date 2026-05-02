import { Tarea } from "./tarea";

export class Lista {
  nombre: string;
  descripcion: string;
  color: string;
  visible: boolean;
  tareas: Tarea[];

  constructor() {
    this.nombre = "";
    this.descripcion = "";
    this.color = "bg-primary text-white";
    this.visible = true;
    this.tareas = [];
  }
}
