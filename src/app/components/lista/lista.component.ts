import { Component, Input, Output, EventEmitter, ViewEncapsulation, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Lista } from '../../models/lista';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ListaComponent {
  @Input({ required: true }) lista!: Lista;
  @Output() eliminar = new EventEmitter<Lista>();
  @Output() editar = new EventEmitter<Lista>();
  @ViewChild('modalEliminar') modalEliminar!: TemplateRef<any>;

  mostrarDetalle = false;
  filtroTareas: String = "todas";
  nuevaTarea: Tarea = new Tarea();
  modalRef?: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  verDetalle(): void {
    this.mostrarDetalle = true;
  }

  ocultarDetalle(): void {
    this.mostrarDetalle = false;
  }

  toggleTarea(tarea: Tarea): void {
    tarea.completada = !tarea.completada;
  }

  get tareasFiltradas(): Tarea[] {
    if (this.filtroTareas === "acabadas") {
      return this.lista.tareas.filter((tarea) => tarea.completada);
    }

    if (this.filtroTareas === "noacabadas") {
      return this.lista.tareas.filter((tarea) => !tarea.completada);
    }

    if (this.filtroTareas === "visibles") {
      return this.lista.tareas.filter((tarea) => tarea.visible);
    }

    if (this.filtroTareas === "ocultas") {
      return this.lista.tareas.filter((tarea) => !tarea.visible);
    }

    return this.lista.tareas;
  }

  guardarTarea(form: NgForm): void {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }

    const siguienteId = this.lista.tareas.length
      ? Math.max(...this.lista.tareas.map((tarea) => tarea.id)) + 1
      : 1;

    this.lista.tareas.push({
      ...this.nuevaTarea,
      id: siguienteId,
    });
    this.nuevaTarea = new Tarea();
    form.resetForm(this.nuevaTarea);
  }

  eliminarTarea(tarea: Tarea): void {
    const index = this.lista.tareas.indexOf(tarea);
    if (index > -1) {
      this.lista.tareas.splice(index, 1);
    }
  }

  abrirModalEliminar(): void {
    this.modalRef = this.modalService.open(this.modalEliminar, { centered: true });
  }

  confirmarEliminar(): void {
    this.eliminar.emit(this.lista);
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  cancelarEliminar(): void {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  eliminarLista(): void {
    this.eliminar.emit(this.lista);
  }

  editarLista(): void {
    this.editar.emit(this.lista);
  }
}
