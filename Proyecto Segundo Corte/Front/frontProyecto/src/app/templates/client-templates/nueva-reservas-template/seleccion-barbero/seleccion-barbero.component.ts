import { AfterViewInit, Component, Input, ViewChildren, ElementRef, QueryList, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../../shared/organisms/header/header.component';
import { LinkComponent } from '../../../../shared/atoms/link/link.component';
import { initCategoriaAnimacion } from './animacionCategoria';
import { InfoBarberoComponent } from '../../../../shared/organisms/info-barbero-reserva/info-barbero.component';
import { ImagenesComponent } from '../../../../shared/atoms/imagenes/imagenes.component';

@Component({
  selector: 'app-seleccion-barbero-template',
  standalone: true,
  imports: [CommonModule, HeaderComponent, LinkComponent, ImagenesComponent, InfoBarberoComponent],
  templateUrl: './seleccion-barbero.component.html',
  styleUrl: './seleccion-barbero.component.css'
})
export class SeleccionBarberoTemplateComponent implements AfterViewInit {
  @Input() navBar: {
    id: string;
    className?: string;
    text: string;
    redireccion: string;
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
    url: string;
  }[] = [];

  @Input() listaBarberos: {
    id: string;
    nombre: string;
    foto: string;
    servicios: string[];
  }[] = [];

  @Input() serviciosSeleccionados: any[] = [];

  barberosCarrito: {
    idServicio: string,
    barbero: {
      id: string;
      nombre: string;
      foto: string;
      servicios: string[];
    }
  }[] = [];

  barberosServicio = new Map<string, any[]>();

  filtrarBarberos(servicioId: string) {

    if (this.barberosServicio.has(servicioId)) {
      return this.barberosServicio.get(servicioId)!;
    }

    const filtrados = this.listaBarberos.filter(
      b => b.servicios.includes(servicioId)
    );

    const opcionAutomatica = {
      id: 'auto-' + servicioId,
      nombre: 'Asignación Automática',
      servicios: [servicioId]
    };

    const resultado = [opcionAutomatica, ...filtrados];

    this.barberosServicio.set(servicioId, resultado);

    return resultado;
  }

  trackByServicio(index: number, item: any) {
    return item.id;
  }

  getBarberoDeServicio(idServicio: string, barberoId: string) {
    const lista = this.barberosServicio.get(idServicio);

    if (!lista) return null;

    return lista.find(b => b.id === barberoId) || null;
  }

  getBarberoPorServicio(idServicio: string) {
    return this.barberosCarrito.find(b => b.idServicio === idServicio) || null;
  }


  onServicioToggle(evento: { idServicio: string, idBarbero: string, seleccionado: boolean }) {
    const { idServicio, idBarbero, seleccionado } = evento;

    const barbero = this.getBarberoDeServicio(idServicio, idBarbero) || null;

    if (!barbero) {
      alert("No se ha encontrado el barbero");
      return;
    }

    if (seleccionado) {
      console.log('Barbero agregado al carrito:', barbero);
      // agregar al carrito usando `servicio`
      this.barberosCarrito.push({
        idServicio,
        barbero
      });

    } else {
      console.log('Barbero eliminado del carrito:', barbero);
      this.barberosCarrito = this.barberosCarrito.filter(
        item => !(item.idServicio === idServicio && item.barbero.id === idBarbero)
      );
    }
  }

  @ViewChildren('containerCategoria') categorias!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('scrollServicios') scrollServicios!: ElementRef<HTMLUListElement>;
  
  ngAfterViewInit() {
    const elementos = this.categorias.map(x => x.nativeElement);
    initCategoriaAnimacion(elementos as any);

    const el = this.scrollServicios.nativeElement;

    el.addEventListener('wheel', (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault(); // evita el scroll vertical
        el.scrollLeft += e.deltaY * 1.2;
      }
    });
  }
}
