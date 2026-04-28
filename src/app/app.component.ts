import { Component, OnInit } from "@angular/core";
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
  listas: Lista[] = [
    {
      nombre: "Compra",
      descripcion: "Productos pendientes para comprar",
      color: "bg-primary text-white",
      visible: true,
    },
    {
      nombre: "Trabajo",
      descripcion: "Tareas pendientes del proyecto",
      color: "bg-success text-white",
      visible: true,
    },
    {
      nombre: "Estudios",
      descripcion: "Temas para repasar esta semana",
      color: "bg-warning text-dark",
      visible: true,
    },
  ];

  abrirFormulario(): void {
    this.mostrarFormulario = true;
    this.nueva = new Lista();
  }

  guardarLista(): void {
    this.listas.push({ ...this.nueva });
    this.nueva = new Lista();
    this.mostrarFormulario = false;
  }

  cancelarFormulario(): void {
    this.nueva = new Lista();
    this.mostrarFormulario = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.msg = "";
    }, 5000);
  }
}
