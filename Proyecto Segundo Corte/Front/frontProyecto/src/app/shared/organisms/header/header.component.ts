import { Component, Input } from '@angular/core';
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
  @Input() navBar: {
      id: string;
      className?: string;
      text: string;
      redireccion: string;
    }[] = [];
}
