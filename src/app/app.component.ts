import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Lista } from "./models/lista";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  title = "appListas";
  msg = "Hola, bienvenido a mi proyecto en Angular";
  mostrarFormulario = false;
  nueva: Lista = new Lista();
  listaEditando: Lista | null = null;
  filtroVisibilidad: String = "todas";
  listas: Lista[] = [
    {
      nombre: "Compra",
      descripcion: "Productos pendientes para comprar",
      color: "bg-primary text-white",
      visible: true,
      tareas: [
        { id: 1, nombre: "Comprar leche", completada: false },
        { id: 2, nombre: "Comprar pan", completada: true },
      ],
    },
    {
      nombre: "Trabajo",
      descripcion: "Tareas pendientes del proyecto",
      color: "bg-success text-white",
      visible: false,
      tareas: [
        { id: 1, nombre: "Preparar presentacion", completada: false },
        { id: 2, nombre: "Revisar pull request", completada: false },
      ],
    },
    {
      nombre: "Estudios",
      descripcion: "Temas para repasar esta semana",
      color: "bg-warning text-dark",
      visible: true,
      tareas: [
        { id: 1, nombre: "Repasar Angular", completada: true },
        { id: 2, nombre: "Practicar TypeScript", completada: false },
      ],
    },
  ];

  get listasFiltradas(): Lista[] {
    if (this.filtroVisibilidad === "visibles") {
      return this.listas.filter((lista) => lista.visible);
    }

    if (this.filtroVisibilidad === "novisibles") {
      return this.listas.filter((lista) => !lista.visible);
    }

    return this.listas;
  }

  abrirFormulario(): void {
    this.mostrarFormulario = true;
    this.listaEditando = null;
    this.nueva = new Lista();
  }

  guardarLista(form: NgForm): void {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }

    if (this.listaEditando) {
      this.listaEditando.nombre = this.nueva.nombre;
      this.listaEditando.descripcion = this.nueva.descripcion;
      this.listaEditando.color = this.nueva.color;
      this.listaEditando.visible = this.nueva.visible;
    } else {
      this.listas.push({ ...this.nueva });
    }

    this.nueva = new Lista();
    this.listaEditando = null;
    this.mostrarFormulario = false;
  }

  cancelarFormulario(): void {
    this.nueva = new Lista();
    this.listaEditando = null;
    this.mostrarFormulario = false;
  }

  eliminarLista(lista: Lista): void {
    const index = this.listas.indexOf(lista);
    if (index > -1) {
      this.listas.splice(index, 1);
    }
  }

  editarLista(lista: Lista): void {
    this.listaEditando = lista;
    this.nueva = { ...lista };
    this.mostrarFormulario = true;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.msg = "";
    }, 5000);
  }
}
