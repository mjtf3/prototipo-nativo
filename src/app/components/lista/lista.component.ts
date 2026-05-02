import { Component, Input, Output, EventEmitter, ViewEncapsulation, TemplateRef, ViewChild } from '@angular/core';
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
