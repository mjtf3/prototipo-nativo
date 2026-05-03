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
      id: 1,
      nombre: "Compra",
      descripcion: "Productos pendientes para comprar",
      color: "bg-primary text-white",
      visible: true,
      fechaCreacion: "2026-04-28",
      tareas: [
        {
          id: 1,
          nombre: "Comprar leche",
          descripcion: "Comprar dos litros de leche",
          fechaFinalizacion: "2026-05-04",
          visible: true,
          completada: false,
        },
        {
          id: 2,
          nombre: "Comprar pan",
          descripcion: "Pasar por la panadería",
          fechaFinalizacion: "2026-05-04",
          visible: true,
          completada: true,
        },
      ],
    },
    {
      id: 2,
      nombre: "Trabajo",
      descripcion: "Tareas pendientes del proyecto",
      color: "bg-success text-white",
      visible: false,
      fechaCreacion: "2026-04-29",
      tareas: [
        {
          id: 1,
          nombre: "Preparar presentación",
          descripcion: "Preparar las diapositivas del proyecto",
          fechaFinalizacion: "2026-05-06",
          visible: true,
          completada: false,
        },
        {
          id: 2,
          nombre: "Revisar pull request",
          descripcion: "Comprobar cambios pendientes",
          fechaFinalizacion: "2026-05-07",
          visible: true,
          completada: false,
        },
      ],
    },
    {
      id: 3,
      nombre: "Estudios",
      descripcion: "Temas para repasar esta semana",
      color: "bg-warning text-dark",
      visible: true,
      fechaCreacion: "2026-04-30",
      tareas: [
        {
          id: 1,
          nombre: "Repasar Angular",
          descripcion: "Repasar componentes, bindings y formularios",
          fechaFinalizacion: "2026-05-05",
          visible: true,
          completada: true,
        },
        {
          id: 2,
          nombre: "Practicar TypeScript",
          descripcion: "Practicar clases e interfaces",
          fechaFinalizacion: "2026-05-08",
          visible: true,
          completada: false,
        },
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
      this.listas.push({
        ...this.nueva,
        id: this.obtenerSiguienteIdLista(),
        fechaCreacion: new Date().toISOString().substring(0, 10),
      });
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

  private obtenerSiguienteIdLista(): number {
    return this.listas.length
      ? Math.max(...this.listas.map((lista) => lista.id)) + 1
      : 1;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.msg = "";
    }, 5000);
  }
}
