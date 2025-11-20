import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardServicioComponent } from '../../molecules/card-servicio/card.component';

@Component({
  selector: 'app-info-servicios-reserva',
  standalone: true,
  imports: [NgFor, CardServicioComponent],
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
}
