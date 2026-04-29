export class Lista {
  nombre: string;
  descripcion: string;
  color: string;
  visible: boolean;

  constructor() {
    this.nombre = "";
    this.descripcion = "";
    this.color = "bg-primary text-white";
    this.visible = true;
  }
}
