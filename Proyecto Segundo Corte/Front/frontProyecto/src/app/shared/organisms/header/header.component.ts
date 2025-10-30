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
    { id: 'nav-cliente-barberos', text: 'Barberos', url: '#' },
    { id: 'nav-cliente-servicios', text: 'Servicios', url: '#' },
    { id: 'nav-cliente-reservas', text: 'Nueva Reserva', url: '#' },
    { id: 'nav-cliente-misReservas', text: 'Mis Reservas', url: '#' }
  ];

}
