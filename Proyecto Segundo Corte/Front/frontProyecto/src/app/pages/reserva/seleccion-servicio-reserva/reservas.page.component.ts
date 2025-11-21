import { Component } from '@angular/core';
import { SeleccionServicioTemplateComponent } from '../../../templates/client-templates/nueva-reservas-template/seleccion-servicio/client-reservas-template.component';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [SeleccionServicioTemplateComponent],
  templateUrl: './reservas.page.component.html',
  styleUrl: './reservas.page.component.css'
})
export class ReservasPageComponent {
  navBar = [
    { id: 'nav-cliente-barberos', className: 'header-nav-links', text: 'Barberos', redireccion: '#' },
    { id: 'nav-cliente-servicios', className: 'header-nav-links', text: 'Servicios', redireccion: '#' },
    { id: 'nav-cliente-reservas', className: 'header-nav-links', text: 'Nueva Reserva', redireccion: 'reservas' },
    { id: 'nav-cliente-misReservas', className: 'header-nav-links', text: 'Mis Reservas', redireccion: '#' }
  ];

  categorias = [
    { id: 'categoria-cortes-link', className: 'reservas-categoria-links', text: 'Cortes', url: 'categoria-cortes' },
    { id: 'categoria-tintes-link', className: 'reservas-categoria-links', text: 'Tintes', url: 'categoria-tintes' },
    { id: 'categoria-disenos-link', className: 'reservas-categoria-links', text: 'Diseños', url: 'categoria-disenos' },
    { id: 'categoria-extras-link', className: 'reservas-categoria-links', text: 'Extras', url: 'categoria-extras' }
  ];

  listaServicios = [
    // --- CORTES ---
    { id: 'servicio-1', categoria: 'Cortes', titulo: 'Corte Clásico', duracion: '30 min', precio: '$15.000' },
    { id: 'servicio-2', categoria: 'Cortes', titulo: 'Corte Fade', duracion: '40 min', precio: '$18.000' },
    { id: 'servicio-3', categoria: 'Cortes', titulo: 'Corte con Tijera', duracion: '35 min', precio: '$17.000' },
    { id: 'servicio-4', categoria: 'Cortes', titulo: 'Corte + Barba', duracion: '50 min', precio: '$25.000' },

    // --- TINTES ---
    { id: 'servicio-5', categoria: 'Tintes', titulo: 'Tinte Completo', duracion: '60 min', precio: '$40.000' },
    { id: 'servicio-6', categoria: 'Tintes', titulo: 'Iluminaciones', duracion: '90 min', precio: '$70.000' },
    { id: 'servicio-7', categoria: 'Tintes', titulo: 'Decoloración', duracion: '120 min', precio: '$80.000' },

    // --- DISEÑOS ---
    { id: 'servicio-8', categoria: 'Diseños', titulo: 'Diseño Sencillo', duracion: '15 min', precio: '$8.000' },
    { id: 'servicio-9', categoria: 'Diseños', titulo: 'Diseño Complejo', duracion: '25 min', precio: '$15.000' },
    { id: 'servicio-10', categoria: 'Diseños', titulo: 'Dibujo Estilo Libre', duracion: '30 min', precio: '$20.000' },

    // --- EXTRAS ---
    { id: 'servicio-11', categoria: 'Extras', titulo: 'Lavado Capilar', duracion: '10 min', precio: '$5.000' },
    { id: 'servicio-12', categoria: 'Extras', titulo: 'Mascarilla Facial', duracion: '20 min', precio: '$12.000' },
    { id: 'servicio-13', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' },
    { id: 'servicio-14', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' },
    { id: 'servicio-15', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' },
    { id: 'servicio-16', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' },
    { id: 'servicio-17', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' },
    { id: 'servicio-18', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' },
    { id: 'servicio-19', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' },
    { id: 'servicio-20', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' },
    { id: 'servicio-21', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' },
    { id: 'servicio-22', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' },
    { id: 'servicio-23', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' },
    { id: 'servicio-24', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' },
    { id: 'servicio-25', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' },
    { id: 'servicio-26', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' },
    { id: 'servicio-27', categoria: 'Extras', titulo: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000' }
  ];


  infoImagenBarberia = { rutaImagen: '../assets/images/images-reserva/barberia.jpg', titulo: 'Imagen Barberia', id: 'imagen-reserva-barberia', className: 'imagen-reserva img-fluid' };

}
