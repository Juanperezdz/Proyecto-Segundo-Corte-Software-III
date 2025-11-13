import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  standalone: true,
  imports: [],
  templateUrl: './imagenes.component.html',
  styleUrl: './imagenes.component.css'
})
export class ImagenesComponent {
  @Input() rutaImagen!: string;
  @Input() titulo!: string;
  @Input() id!: string;
  @Input() className?: string;
}
