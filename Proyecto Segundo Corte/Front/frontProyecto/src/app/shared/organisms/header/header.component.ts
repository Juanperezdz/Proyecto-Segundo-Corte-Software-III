import { Component } from '@angular/core';
import { NavbarComponent } from '../../molecules/navbar/navbar.component';
import { LogoComponent } from '../../atoms/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navItemsClient = [
    { id: 'nav-cliente-barberos', className: 'header-nav-links', text: 'Barberos', url: '#' },
    { id: 'nav-cliente-servicios', className: 'header-nav-links', text: 'Servicios', url: '#' },
    { id: 'nav-cliente-reservas', className: 'header-nav-links', text: 'Nueva Reserva', url: '#' },
    { id: 'nav-cliente-misReservas', className: 'header-nav-links', text: 'Mis Reservas', url: '#' }
  ];

}
