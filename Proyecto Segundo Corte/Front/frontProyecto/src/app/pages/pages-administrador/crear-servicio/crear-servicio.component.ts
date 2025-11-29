import { Component } from '@angular/core';
import { CrearServicioTemplateComponent } from '../../../templates/admin-templates/crear-servicio-template/crear-servicio-template.component';

@Component({
  selector: 'app-crear-servicio',
  standalone: true,
  imports: [CrearServicioTemplateComponent],
  templateUrl: './crear-servicio.component.html',
  styleUrl: './crear-servicio.component.css'
})
export class CrearServicioPageComponent {
  navBar = [
    { id: 'nav-admin-barberos', className: 'header-nav-links', text: 'Barberos', redireccion: '#' },
    { id: 'nav-admin-servicios', className: 'header-nav-links', text: 'Servicios', redireccion: '#' },
    { id: 'nav-admin-horarios', className: 'header-nav-links', text: 'Horarios', redireccion: '#' }
  ];

  formCrearServicio = {
    className: 'form-crear-servicio grid',
    listaCampos: [
      {
        forLabel: 'nombreServicio',
        label: 'Nombre',
        infoInput: {
          id: 'nombreServicio',
          type: 'text',
          required: true,
          placeholder: 'Ingresa el nombre del servicio',
          validaciones: [
            // Obligatorio
            (value: string) =>
              value.trim() === '' ? 'El nombre es obligatorio' : null,

            // Longitud mínima
            (value: string) =>
              value.trim().length < 3 ? 'El nombre debe tener al menos 3 caracteres' : null,

            // No exceder 50
            (value: string) =>
              value.trim().length > 50 ? 'El nombre no debe exceder 50 caracteres' : null,

            // Solo letras (permitiendo espacios)
            (value: string) =>
              /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(value.trim())
                ? null
                : 'El nombre solo puede contener letras y no debe exceder 50 caracteres'
          ]
        }
      },
      {
        forLabel: 'categoriaServicio',
        label: 'Categoria del servicio',
        infoInput: {
          id: 'categoriaServicio',
          type: 'select',
          required: true,
          placeholder: 'Seleccione la categoria',
          multiple: false,
          opciones: [
            { value: 'Cortes', label: 'Cortes' },
            { value: 'Barba', label: 'Barba' },
            { value: 'Cejas', label: 'Cejas' }
          ],
          validaciones: [
            (value: string) =>
              (!value || value.trim() === '')
                ? 'Debe seleccionar una categoria'
                : null
          ]
        }
      },
      {
        forLabel: 'duracionServicio',
        label: 'Duración en minutos',
        infoInput: {
          id: 'duracionServicio',
          type: 'number',
          required: true,
          placeholder: 'Ingresa la duración del servicio',
          validaciones: [
            // Obligatorio
            (value: string) =>
              value.trim() === '' ? 'La duración es obligatoria' : null,

            // Debe ser numérico
            (value: string) =>
              isNaN(Number(value)) ? 'La duración debe ser un valor numérico entre 5 y 300 minutos' : null,

            // Entre 5 y 300
            (value: string) => {
              const num = Number(value);
              return num < 5 || num > 300
                ? 'La duración debe ser un valor numérico entre 5 y 300 minutos'
                : null;
            }
          ]
        }
      },

      {
        forLabel: 'tiempoPreparacion',
        label: 'Tiempo de preparación',
        infoInput: {
          id: 'tiempoPreparacion',
          type: 'number',
          required: true,
          placeholder: 'Ingresa el tiempo de preparación del servicio',
          validaciones: [
            // Obligatorio
            (value: string) =>
              value.trim() === '' ? 'El tiempo de preparación es obligatorio' : null,

            // Debe ser numérico
            (value: string) =>
              isNaN(Number(value)) ? 'La duración debe ser un valor numérico entre 5 y 10 minutos' : null,

            // Entre 5 y 300
            (value: string) => {
              const num = Number(value);
              return num < 5 || num > 10
                ? 'La duración debe ser un valor numérico entre 5 y 10 minutos'
                : null;
            }
          ]
        }
      },

      {
        forLabel: 'precioServicio',
        label: 'Precio',
        infoInput: {
          id: 'precioServicio',
          type: 'number',
          required: true,
          placeholder: 'Ingresa el precio del servicio',
          validaciones: [
            // Obligatorio
            (value: string) =>
              value.trim() === '' ? 'El precio es obligatorio' : null,

            // Debe ser numérico
            (value: string) =>
              isNaN(Number(value)) ? 'El precio debe ser un valor numérico mayor a cero' : null,

            // Mayor a 0
            (value: string) => {
              const num = Number(value);
              return num <= 0
                ? 'El precio debe ser un valor numérico mayor a cero'
                : null;
            }
          ]
        }
      },

      {
        forLabel: 'descripcionServicio',
        label: 'Descripción',
        infoInput: {
          id: 'descripcionServicio',
          type: 'text',
          required: true,
          placeholder: 'Ingresa una descripción para el servicio',
          validaciones: []
        }
      }
    ],
    textoBoton: 'Crear Cita'
  };
}
