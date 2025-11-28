import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from '../../../../shared/organisms/header/header.component';
import { LinkComponent } from '../../../../shared/atoms/link/link.component';
import { ImagenesComponent } from '../../../../shared/atoms/imagenes/imagenes.component';
import { CalendarioComponent } from '../../../../shared/organisms/calendario/calendario.component';

@Component({
  selector: 'app-selecccion-horario-template',
  standalone: true,
  imports: [CommonModule, HeaderComponent, LinkComponent, ImagenesComponent, CalendarioComponent],
  templateUrl: './selecccion-horario.component.html',
  styleUrl: './selecccion-horario.component.css'
})
export class SelecccionHorarioTemplateComponent {
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

  @Input() serviciosCarrito: any[] = [];

  @Input() barberosCarrito: {
    idServicio: string,
    barbero: {
      id: string;
      nombre: string;
      foto: string;
      servicios: string[];
    }
  }[] = [];

  horarioCarrito: {
    idServicio: string,
    barbero: {
      id: string;
      nombre: string;
      foto: string;
      servicios: string[];
    },
    fecha: string
  } | null = null;

  @Output() migaServicios = new EventEmitter<any[]>();
  @Output() migaBarberos = new EventEmitter<{ 
    serviciosCarrito: any[],
    barberosCarrito: any[]
  }>();

  emitirMigaBarberos() {
    this.migaBarberos.emit({
      serviciosCarrito: this.serviciosCarrito,
      barberosCarrito: this.barberosCarrito
    });
  }

  @Output() fechaSeleccionada: string | null = null;

  getBarberoPorServicio(idServicio: string) {
    return this.barberosCarrito.find(b => b.idServicio === idServicio) || null;
  }

  mostrarCalendario = false;

  toggleCalendario() {
    this.mostrarCalendario = !this.mostrarCalendario;
  }

  recibirFecha(fecha: string) {
    this.fechaSeleccionada = fecha;
    
  }

}
