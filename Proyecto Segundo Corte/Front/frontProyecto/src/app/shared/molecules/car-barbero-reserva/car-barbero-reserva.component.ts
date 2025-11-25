import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesComponent } from '../../atoms/imagenes/imagenes.component';

@Component({
  selector: 'app-car-barbero-reserva',
  standalone: true,
  imports: [CommonModule, ImagenesComponent],
  templateUrl: './car-barbero-reserva.component.html',
  styleUrl: './car-barbero-reserva.component.css'
})
export class CarBarberoReservaComponent {
  @Input() id!: string;
  @Input() nombre!: string;
  @Input() foto: string | null = null;
  @Input() agregarCarrito!: boolean;

  @Input() seleccionado: boolean = false;

  @Output() seleccionar = new EventEmitter<string>();

  onClick() {
    this.seleccionar.emit(this.id);
  }
}
