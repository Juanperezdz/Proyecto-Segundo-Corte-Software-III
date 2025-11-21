import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardServicioComponent } from '../../molecules/card-servicio/card.component';

@Component({
  selector: 'app-info-servicios-reserva',
  standalone: true,
  imports: [CommonModule, CardServicioComponent],
  templateUrl: './info-servicios.component.html',
  styleUrl: './info-servicios.component.css'
})
export class InfoServiciosReservaComponent {
  @Input() categoriaSeccion!: string;
  @Input() nombreCategoria!: string;

  @Input() listaServicios: {
    id: string;
    categoria: string;
    titulo: string;
    duracion: string;
    precio: string;
  }[] = [];

  /** 🔥 Enviar al padre { id, seleccionado } */
  @Output() servicioSeleccionado = new EventEmitter<{ id: string, seleccionado: boolean }>();

  /** Guarda los IDs de los servicios seleccionados */
  serviciosSeleccionados: Set<string> = new Set();

  toggleSeleccion(servicioId: string) {
    let seleccionado = false;

    if (this.serviciosSeleccionados.has(servicioId)) {
      this.serviciosSeleccionados.delete(servicioId);
      seleccionado = false;
    } else {
      this.serviciosSeleccionados.add(servicioId);
      seleccionado = true;
    }

    // Notificar al padre si se seleccionó o deseleccionó
    this.servicioSeleccionado.emit({ id: servicioId, seleccionado });
  }

  estaSeleccionado(servicioId: string): boolean {
    return this.serviciosSeleccionados.has(servicioId);
  }
}
