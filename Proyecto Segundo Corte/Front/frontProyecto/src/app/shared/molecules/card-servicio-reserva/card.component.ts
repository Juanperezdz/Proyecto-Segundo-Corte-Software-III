import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-servicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardServicioComponent {
  @Input() id!: string;
  @Input() titulo!: string;
  @Input() duracion!: string;
  @Input() precio!: string;
  @Input() agregarCarrito!: boolean;

  @Input() seleccionado: boolean = false;

  @Output() seleccionar = new EventEmitter<string>();

  onClick() {
    this.seleccionar.emit(this.id);
  }
}