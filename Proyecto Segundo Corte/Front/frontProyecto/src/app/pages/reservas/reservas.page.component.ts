import { Component } from '@angular/core';
import { ClientReservasTemplateComponent } from '../../templates/client-templates/reservas-template/client-reservas-template.component';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [ClientReservasTemplateComponent],
  templateUrl: './reservas.page.component.html',
  styleUrl: './reservas.page.component.css'
})
export class ReservasPageComponent {
  categorias = [
    { id: 'nav-cliente-barberos', className: 'reservas-categoria-links', text: 'Cortes', url: '#' },
    { id: 'nav-cliente-servicios', className: 'reservas-categoria-links', text: 'Tintes', url: '#' },
    { id: 'nav-cliente-reservas', className: 'reservas-categoria-links', text: 'Diseños', url: '#' },
    { id: 'nav-cliente-misReservas', className: 'reservas-categoria-links', text: 'Extras', url: '#' }
  ];

  infoImagenBarberia = { rutaImagen: '../assets/images/images-reserva/barberia.jpg', titulo: 'Imagen Barberia', id: 'imagen-reserva-barberia', className: 'imagen-reserva img-fluid' };

}
