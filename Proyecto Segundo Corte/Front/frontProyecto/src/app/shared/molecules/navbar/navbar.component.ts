import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { LinkComponent } from '../../atoms/link/link.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, LinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() items: {
    id: string;
    className?: string;
    text: string;
    redireccion: string;
  }[] = [];
}
