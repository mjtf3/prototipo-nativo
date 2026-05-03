export class Tarea {
  id: number;
  nombre: string;
  descripcion: string;
  fechaFinalizacion: string;
  visible: boolean;
  completada: boolean;

  constructor() {
    this.id = 0;
    this.nombre = "";
    this.descripcion = "";
    this.fechaFinalizacion = "";
    this.visible = true;
    this.completada = false;
  }
}
