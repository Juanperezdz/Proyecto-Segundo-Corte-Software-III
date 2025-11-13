import { Component, ElementRef, ViewChild, AfterViewInit, Inject, Input, ViewEncapsulation } from '@angular/core';
import { DOCUMENT, NgFor } from '@angular/common';
import { HeaderComponent } from '../../../shared/organisms/header/header.component';
import { initFloatingImages } from './animacionImagenes';
import { ImagenesComponent } from '../../../shared/atoms/imagenes/imagenes.component';

@Component({
  selector: 'app-client-home-template',
  standalone: true,
  imports: [HeaderComponent, NgFor, ImagenesComponent],
  templateUrl: './client-home-template.component.html',
  styleUrl: './client-home-template.component.css',
})
export class ClientHomeTemplateComponent implements AfterViewInit {
  @Input() infoImagenes: {
    rutaImagen: string;
    titulo: string;
    id: string;
    className?: string;
  }[] = [];

  @ViewChild('containerImagenesFlotantes') floatingContainer!: ElementRef<HTMLElement>;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit() {
    if (typeof window === 'undefined') {
      console.warn('SSR: se omitió animación.');
      return;
    }

    const container = this.floatingContainer?.nativeElement;

    if (container) {
      initFloatingImages(container);
    } else {
      console.error('No se encontró el contenedor de imágenes flotantes.');
    }
  }
}
