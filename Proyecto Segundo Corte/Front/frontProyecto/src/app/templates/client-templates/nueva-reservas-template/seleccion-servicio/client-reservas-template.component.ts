import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../../../shared/organisms/header/header.component';
import { LinkComponent } from '../../../../shared/atoms/link/link.component';
import { CommonModule } from '@angular/common';
import { initCategoriaAnimacion } from './animacionCategoria';
import { ImagenesComponent } from '../../../../shared/atoms/imagenes/imagenes.component';
import { InfoServiciosReservaComponent } from '../../../../shared/organisms/info-servicios-reserva/info-servicios.component';

@Component({
  selector: 'app-seleccion-servicio-template',
  standalone: true,
  imports: [CommonModule, HeaderComponent, LinkComponent, ImagenesComponent, InfoServiciosReservaComponent],
  templateUrl: './client-reservas-template.component.html',
  styleUrl: './client-reservas-template.component.css'
})
export class SeleccionServicioTemplateComponent implements AfterViewInit {
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
    nombre: string;
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
  
  @Output() continuar = new EventEmitter<any[]>();

  serviciosCarrito: {
    id: string;
    categoria: string;
    nombre: string;
    duracion: string;
    precio: string;
  }[] = [];

  public filtrarServicios(categoria: string) {
    return this.listaServicios.filter(s => s.categoria === categoria);
  }

  onServicioToggle(evento: { id: string, seleccionado: boolean }) {
    const { id, seleccionado } = evento;

    const servicio = this.listaServicios.find(serv => serv.id === id) || null;

    if (!servicio) {
      alert("No se ha encontrado el servicio");
      return;
    }

    if (seleccionado) {
      console.log('Servicio agregado al carrito:', servicio);
      // agregar al carrito usando `servicio`
      this.serviciosCarrito.push(servicio);
    } else {
      console.log('Servicio eliminado del carrito:', servicio);
      this.serviciosCarrito = this.serviciosCarrito.filter(s => s.id !== id);
    }
  }

  @ViewChildren('containerCategoria') categorias!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('scrollCategorias') scrollCategorias!: ElementRef<HTMLUListElement>;

  ngAfterViewInit() {
    const elementos = this.categorias.map(x => x.nativeElement);
    initCategoriaAnimacion(elementos as any);

    const el = this.scrollCategorias.nativeElement;

    el.addEventListener('wheel', (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault(); // evita el scroll vertical
        el.scrollLeft += e.deltaY; // mueve horizontalmente
      }
    });
  }
}
