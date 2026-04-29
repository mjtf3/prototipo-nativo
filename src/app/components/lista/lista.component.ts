import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Lista } from '../../models/lista';

interface Tarea {
  id: number;
  nombre: string;
  completada: boolean;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ListaComponent implements OnInit {
  @Input() lista: Lista | null = null;
  @Output() eliminar = new EventEmitter<Lista>();
  @Output() editar = new EventEmitter<Lista>();
  @ViewChild('modalEliminar') modalEliminar!: TemplateRef<any>;

  mostrarDetalle = false;
  tareas: Tarea[] = [];
  modalRef?: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.inicializarTareas();
  }

  inicializarTareas(): void {
    this.tareas = [
      { id: 1, nombre: 'Tarea 1', completada: false },
      { id: 2, nombre: 'Tarea 2', completada: true },
      { id: 3, nombre: 'Tarea 3', completada: false }
    ];
  }

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
    if (this.lista) {
      this.eliminar.emit(this.lista);
    }
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
    if (this.lista) {
      this.eliminar.emit(this.lista);
    }
  }

  editarLista(): void {
    if (this.lista) {
      this.editar.emit(this.lista);
    }
  }
}
