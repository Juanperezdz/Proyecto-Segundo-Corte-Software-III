import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarBarberoReservaComponent } from '../../molecules/car-barbero-reserva/car-barbero-reserva.component';

@Component({
  selector: 'app-info-barbero',
  standalone: true,
  imports: [CommonModule, CarBarberoReservaComponent],
  templateUrl: './info-barbero.component.html',
  styleUrl: './info-barbero.component.css'
})
export class InfoBarberoComponent {

  @Input() servicioSeccion!: string;
  @Input() nombreServicio!: string;
  @Input() idServicio!: string;

  @Input() listaBarberos: {
    id: string;
    nombre: string;
    foto?: string;
    servicios: string[];
  }[] = [];

  /** Evento hacia el padre */
  @Output() barberoSeleccionado = new EventEmitter<{
    idServicio: string;
    idBarbero: string;
    seleccionado: boolean;
  }>();

  /** Solo un barbero asignado por servicio */
  barberoAsignado: string | null = null;

  toggleSeleccion(barberoId: string) {

    // Si hacen click sobre el ya seleccionado → deseleccionar
    if (this.barberoAsignado === barberoId) {
      this.barberoAsignado = null;

      this.barberoSeleccionado.emit({
        idServicio: this.idServicio,
        idBarbero: barberoId,
        seleccionado: false
      });
      return;
    }

    // Asignar otro barbero
    if (this.barberoAsignado) {
      this.barberoSeleccionado.emit({
        idServicio: this.idServicio,
        idBarbero: this.barberoAsignado,
        seleccionado: false
      });
    }

    this.barberoAsignado = barberoId;

    this.barberoSeleccionado.emit({
      idServicio: this.idServicio,
      idBarbero: this.barberoAsignado,
      seleccionado: true
    });
  }

  estaSeleccionado(barberoId: string): boolean {
    return this.barberoAsignado === barberoId;
  }
}
