import { Component, ElementRef, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ClientTemplateComponent } from '../../templates/client-template/client-template.component';
import { initFloatingImages } from './animacionImagenes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ClientTemplateComponent],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.css'
})
export class HomePageComponent implements AfterViewInit {

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
