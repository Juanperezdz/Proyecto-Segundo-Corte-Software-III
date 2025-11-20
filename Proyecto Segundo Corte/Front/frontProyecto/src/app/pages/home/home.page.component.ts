import { Component } from '@angular/core';
import { ClientHomeTemplateComponent } from '../../templates/client-templates/home-template/client-home-template.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ClientHomeTemplateComponent],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.css'
})
export class HomePageComponent {
  navBar = [
    { id: 'nav-cliente-barberos', className: 'header-nav-links', text: 'Barberos', redireccion: '#' },
    { id: 'nav-cliente-servicios', className: 'header-nav-links', text: 'Servicios', redireccion: '#' },
    { id: 'nav-cliente-reservas', className: 'header-nav-links', text: 'Nueva Reserva', redireccion: 'reservas' },
    { id: 'nav-cliente-misReservas', className: 'header-nav-links', text: 'Mis Reservas', redireccion: '#' }
  ];

  infoImagenes = [
    { rutaImagen: '../assets/images/images-inicio/img1.jpg', titulo: 'Imagen 1', id: 'imagen-foltante-1', className: 'imagen-flotante img-fluid w-25'},
    { rutaImagen: '../assets/images/images-inicio/img2.jpg', titulo: 'Imagen 2', id: 'imagen-foltante-2', className: 'imagen-flotante img-fluid w-25'},
    { rutaImagen: '../assets/images/images-inicio/img3.jpg', titulo: 'Imagen 3', id: 'imagen-foltante-3', className: 'imagen-flotante img-fluid w-25'},
    { rutaImagen: '../assets/images/images-inicio/img4.jpg', titulo: 'Imagen 4', id: 'imagen-foltante-4', className: 'imagen-flotante img-fluid w-25'},
    { rutaImagen: '../assets/images/images-inicio/img5.jpg', titulo: 'Imagen 5', id: 'imagen-foltante-5', className: 'imagen-flotante img-fluid w-25'}
  ];
}
