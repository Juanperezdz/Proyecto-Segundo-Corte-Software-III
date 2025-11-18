import { Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList, Input } from '@angular/core';
import { HeaderComponent } from '../../../shared/organisms/header/header.component';
import { LinkComponent } from '../../../shared/atoms/link/link.component';
import { NgFor } from '@angular/common';
import { initCategoriaAnimacion } from './animacionCategoria';
import { ImagenesComponent } from '../../../shared/atoms/imagenes/imagenes.component';

@Component({
  selector: 'app-reservas-template',
  standalone: true,
  imports: [NgFor, HeaderComponent, LinkComponent, ImagenesComponent],
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

    
    @Input() infoImagenBarberia: {
      rutaImagen: string;
      titulo: string;
      id: string;
      className?: string;
    } = {
      rutaImagen: '',
      titulo: '',
      id: '',
      className: ''
    };

  @ViewChildren('containerCategoria') categorias!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit() {
    const elementos = this.categorias.map(x => x.nativeElement);

    initCategoriaAnimacion(elementos as any);
  }
}
