import { Component } from '@angular/core';
import { SeleccionServicioTemplateComponent } from '../../../templates/client-templates/nueva-reservas-template/seleccion-servicio/client-reservas-template.component';
import { SeleccionBarberoTemplateComponent } from '../../../templates/client-templates/nueva-reservas-template/seleccion-barbero/seleccion-barbero.component';
import { CommonModule } from '@angular/common';
import { SelecccionHorarioTemplateComponent } from '../../../templates/client-templates/nueva-reservas-template/selecccion-horario/selecccion-horario.component';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, SeleccionServicioTemplateComponent, SeleccionBarberoTemplateComponent, SelecccionHorarioTemplateComponent],
  templateUrl: './reserva.page.component.html',
  styleUrl: './reserva.page.component.css'
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
        { id: 'servicio-1', categoria: 'Cortes', nombre: 'Corte Clásico', duracion: '30 min', precio: '$15.000', url: 'corte-clasico'},
        { id: 'servicio-2', categoria: 'Cortes', nombre: 'Corte Fade', duracion: '40 min', precio: '$18.000',  url: 'corte-fade' },
        { id: 'servicio-3', categoria: 'Cortes', nombre: 'Corte con Tijera', duracion: '35 min', precio: '$17.000', url: 'corte-tijera' },
        { id: 'servicio-4', categoria: 'Cortes', nombre: 'Corte + Barba', duracion: '50 min', precio: '$25.000', url: 'corte-barba' },

        // --- TINTES ---
        { id: 'servicio-5', categoria: 'Tintes', nombre: 'Tinte Completo', duracion: '60 min', precio: '$40.000', url: 'tinte-completo' },
        { id: 'servicio-6', categoria: 'Tintes', nombre: 'Iluminaciones', duracion: '90 min', precio: '$70.000', url: 'iluminaciones' },
        { id: 'servicio-7', categoria: 'Tintes', nombre: 'Decoloración', duracion: '120 min', precio: '$80.000', url: 'decoloracion' },

        // --- DISEÑOS ---
        { id: 'servicio-8', categoria: 'Diseños', nombre: 'Diseño Sencillo', duracion: '15 min', precio: '$8.000', url: 'diseno-sencillo' },
        { id: 'servicio-9', categoria: 'Diseños', nombre: 'Diseño Complejo', duracion: '25 min', precio: '$15.000', url: 'diseno-complejo' },
        { id: 'servicio-10', categoria: 'Diseños', nombre: 'Dibujo Estilo Libre', duracion: '30 min', precio: '$20.000', url: 'dibujo-estilo-libre' },

        // --- EXTRAS ---
        { id: 'servicio-11', categoria: 'Extras', nombre: 'Lavado Capilar', duracion: '10 min', precio: '$5.000', url: 'lavado-capilar' },
        { id: 'servicio-12', categoria: 'Extras', nombre: 'Mascarilla Facial', duracion: '20 min', precio: '$12.000', url: 'mascarilla-facial' },
        { id: 'servicio-13', categoria: 'Extras', nombre: 'Cejas con Navaja', duracion: '10 min', precio: '$6.000', url: 'cejas-navaja' }
    ];

    listaBarberos = [
    {
        id: 'barbero-1',
        nombre: 'Andrés Pérez',
        foto: '../assets/images/images-barberos/images-cuadradas/barbero-1.jpg',
        servicios: ['servicio-1', 'servicio-2', 'servicio-8', 'servicio-9', 'servicio-10'] // Cortes + Diseños
    },
    {
        id: 'barbero-2',
        nombre: 'Mateo Ramírez',
        foto: '../assets/images/images-barberos/images-cuadradas/barbero-2.jpg',
        servicios: ['servicio-5', 'servicio-6', 'servicio-7'] // Tintes
    },
    {
        id: 'barbero-3',
        nombre: 'Luisa Valencia',
        foto: '../assets/images/images-barberos/images-cuadradas/barbero-3.jpg',
        servicios: ['servicio-11', 'servicio-12', 'servicio-13', 'servicio-1', 'servicio-2', 'servicio-3', 'servicio-4'] // Extras + Cortes
    },
    {
        id: 'barbero-4',
        nombre: 'Felipe Morales',
        foto: '../assets/images/images-barberos/images-cuadradas/barbero-4.jpg',
        servicios: ['servicio-8', 'servicio-9', 'servicio-10'] // Diseños
    },
    {
        id: 'barbero-5',
        nombre: 'David Herrera',
        foto: '../assets/images/images-barberos/images-cuadradas/barbero-5.jpg',
        servicios: ['servicio-11', 'servicio-12', 'servicio-13', 'servicio-1', 'servicio-2', 'servicio-3', 'servicio-4'] // Extras + Cortes
    },
    {
        id: 'barbero-6',
        nombre: 'Santiago López',
        foto: '../assets/images/images-barberos/images-cuadradas/barbero-6.jpg',
        servicios: [
        'servicio-1', 'servicio-2', 'servicio-3', 'servicio-4', // Cortes
        'servicio-5', 'servicio-6', 'servicio-7',             // Tintes
        'servicio-8', 'servicio-9', 'servicio-10'             // Diseños
        ]
    }
    ];

    infoImagenBarberia = { rutaImagen: '../assets/images/images-reserva/barberia.jpg', titulo: 'Imagen Barberia', id: 'imagen-reserva-barberia', className: 'imagen-reserva img-fluid' };

    paso = 1;
    serviciosCarrito: any[] = [];
    barberosCarrito: any[] = [];
    horarioCarrito: string | null = null;

    mostrarSeleccionServicios(servicios: any[]) {
        this.serviciosCarrito = servicios;
        this.paso = 1;
    }

    mostrarSeleccionBarbero(serviciosCarrito: any[], barberosCarrito: any[] | null) {
        this.serviciosCarrito = serviciosCarrito;
        if (barberosCarrito) this.barberosCarrito = barberosCarrito;
        this.paso = 2;
    }

    mostrarSeleccionHorario(serviciosCarrito: any[], barberosCarrito: any[]) {
        this.serviciosCarrito = serviciosCarrito;
        this.barberosCarrito = barberosCarrito;
        this.paso = 3;
    }


}