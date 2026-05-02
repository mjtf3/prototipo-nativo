import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Tarea } from "../../models/tarea";

@Component({
  selector: "app-tarea",
  templateUrl: "./tarea.component.html",
  styleUrl: "./tarea.component.css",
})
export class TareaComponent {
  @Input() tarea!: Tarea;
  @Output() toggle = new EventEmitter<Tarea>();

  cambiarCompletada(): void {
    this.toggle.emit(this.tarea);
  }
}
