import { Component, Input, Output, EventEmitter, AfterViewInit, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardServicioComponent } from '../../molecules/card-servicio-reserva/card.component';

@Component({
  selector: 'app-info-servicios-reserva',
  standalone: true,
  imports: [CommonModule, CardServicioComponent],
  templateUrl: './info-servicios.component.html',
  styleUrl: './info-servicios.component.css'
})
export class InfoServiciosReservaComponent implements OnChanges {
  @Input() categoriaSeccion!: string;
  @Input() nombreCategoria!: string;

  @Input() listaServicios: {
    id: string;
    categoria: string;
    nombre: string;
    duracion: string;
    precio: string;
  }[] = [];

  @Input() serviciosCarrito: any[] = [];

  serviciosSeleccionados: Set<string> = new Set();

  @Output() servicioSeleccionado = new EventEmitter<{ id: string, seleccionado: boolean }>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['serviciosCarrito'] && this.serviciosCarrito) {
      // Limpiar selección actual (opcional)
      this.serviciosSeleccionados.clear();

      // Cargar los IDs que vienen del carrito
      for (let servicio of this.serviciosCarrito) {
        this.serviciosSeleccionados.add(servicio.id);
      }
    }
  }

  estaSeleccionado(servicioId: string): boolean {
    return this.serviciosSeleccionados.has(servicioId);
  }

  toggleSeleccion(servicioId: string) {
    if (this.serviciosSeleccionados.has(servicioId)) {
      this.serviciosSeleccionados.delete(servicioId);
      this.servicioSeleccionado.emit({ id: servicioId, seleccionado: false });
    } else {
      this.serviciosSeleccionados.add(servicioId);
      this.servicioSeleccionado.emit({ id: servicioId, seleccionado: true });
    }
  }
}
