import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../../shared/organisms/header/header.component';
import { LinkComponent } from '../../../shared/atoms/link/link.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reservas-template',
  standalone: true,
  imports: [NgFor, HeaderComponent, LinkComponent],
  templateUrl: './client-reservas-template.component.html',
  styleUrl: './client-reservas-template.component.css'
})
export class ClientReservasTemplateComponent {
  @Input() listaCategorias: {
      id: string;
      className?: string;
      text: string;
      url?: string;
      redireccion?: string;
    }[] = [];
}
