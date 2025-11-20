import { Component, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList, Input } from '@angular/core';
import { HeaderComponent } from '../../../shared/organisms/header/header.component';
import { LinkComponent } from '../../../shared/atoms/link/link.component';
import { CommonModule } from '@angular/common';
import { initCategoriaAnimacion } from './animacionCategoria';
import { ImagenesComponent } from '../../../shared/atoms/imagenes/imagenes.component';
import { InfoServiciosReservaComponent } from '../../../shared/organisms/info-servicios-reserva/info-servicios.component';

@Component({
  selector: 'app-reservas-template',
  standalone: true,
  imports: [CommonModule, HeaderComponent, LinkComponent, ImagenesComponent, InfoServiciosReservaComponent],
  templateUrl: './client-reservas-template.component.html',
  styleUrl: './client-reservas-template.component.css'
})
export class ClientReservasTemplateComponent {
  @Input() navBar: {
      id: string;
      className?: string;
      text: string;
      redireccion: string;
  }[] = [];

  @Input() listaCategorias: {
      id: string;
      className?: string;
      text: string;
      url: string;
      redireccion?: string;
  }[] = [];

  @Input() listaServicios: {
    id: string;
    categoria: string;
    titulo: string;
    duracion: string;
    precio: string;
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
  
  public filtrarServicios(categoria: string) {
    return this.listaServicios.filter(s => s.categoria === categoria);
  }

  @ViewChildren('containerCategoria') categorias!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit() {
    const elementos = this.categorias.map(x => x.nativeElement);
    initCategoriaAnimacion(elementos as any);
  }
}
