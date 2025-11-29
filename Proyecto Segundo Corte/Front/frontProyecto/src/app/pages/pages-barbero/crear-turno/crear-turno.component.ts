import { Component } from '@angular/core';
import { CrearTurnoTemplateComponent } from '../../../templates/barbero-templates/crear-turno-template/crear-turno-template.component';

@Component({
  selector: 'app-crear-turno',
  standalone: true,
  imports: [CrearTurnoTemplateComponent],
  templateUrl: './crear-turno.component.html',
  styleUrl: './crear-turno.component.css'
})
export class CrearTurnoBarberoPageComponent {
  navBar = [
    { id: 'nav-barbero-hoorario', className: 'header-nav-links', text: 'Mi Horario', redireccion: '#' },
    { id: 'nav-barbero-servicios', className: 'header-nav-links', text: 'Mis Estadísticas', redireccion: '#' },
    { id: 'nav-barbero-turno', className: 'header-nav-links', text: 'Nuevo Turno', redireccion: '#' }
  ];

  formNuevoTurno = {
    className: 'form-nuevo-turno flex',
    listaCampos: [
      {
        forLabel: 'usuario',
        label: 'Usuario',
        infoInput: {
          id: 'usuario',
          type: 'text',
          required: true,
          placeholder: 'Ingresa el usuario del cliente',
          validaciones: [
            (value: string) => value.trim() === '' ? 'El usuario es obligatorio' : null,
            (value: string) => value.length < 4 ? 'Mínimo 4 caracteres' : null
          ]
        }
      },
      {
        forLabel: 'servicioRealizar',
        label: 'Servicio a realizar',
        infoInput: {
          id: 'servicioRealizar',
          type: 'select',
          required: true,
          placeholder: 'Seleccione el servicio',
          multiple: false,
          opciones: [
            { value: 'Cortes', label: 'Cortes' },
            { value: 'Barba', label: 'Barba' },
            { value: 'Cejas', label: 'Cejas' }
          ],
          validaciones: [
            (value: string) =>
              (!value || value.trim() === '')
                ? 'Debe seleccionar un servicio'
                : null
          ]
        }
      },
      {
        forLabel: 'descripcion',
        label: 'Descripción',
        infoInput: {
          id: 'descripcion',
          type: 'text',
          required: false,
          placeholder: 'Ingresa una descripción para el turno',
          validaciones: []
        }
      }
    ],
    textoBoton: 'Agendar Cita'
  };
}
