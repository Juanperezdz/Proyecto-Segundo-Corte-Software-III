import { Component } from '@angular/core';
import { AdminBarberosTemplateComponent } from '../../../templates/admin-templates/barberos-template/barberos-template.component';

@Component({
  selector: 'app-registrar-barbero',
  standalone: true,
  imports: [AdminBarberosTemplateComponent],
  templateUrl: './registrar-barbero.component.html',
  styleUrl: './registrar-barbero.component.css'
})
export class RegistrarBarberoComponent {
  navBar = [
    { id: 'nav-admin-barberos', className: 'header-nav-links', text: 'Barberos', redireccion: '#' },
    { id: 'nav-admin-servicios', className: 'header-nav-links', text: 'Servicios', redireccion: '#' },
    { id: 'nav-admin-horarios', className: 'header-nav-links', text: 'Horarios', redireccion: '#' }
  ];

  formBarbero = {
    className: 'form-barbero',
    listaCampos: [
      {
        forLabel: 'nombre',
        label: 'Nombre',
        infoInput: {
          id: 'nombre',
          type: 'text',
          required: true,
          placeholder: 'Ingresa el nombre del barbero',
          validaciones: [
            (value: string) => value.trim() === '' ? 'El nombre es obligatorio' : null,
            (value: string) => {
              const regex = /^[a-zA-Z\s]+$/;
              if (!regex.test(value)) {
                return 'El nombre solo puede contener letras y no debe exceder 50 caracteres';
              }
              if (value.length < 2 || value.length > 50) {
                return 'El nombre solo puede contener letras y no debe exceder 50 caracteres';
              }
              return null;
            }
          ]
        }
      },

      {
        forLabel: 'identificacion',
        label: 'Identificación',
        infoInput: {
          id: 'identificacion',
          type: 'text',
          required: true,
          placeholder: 'Ingresa la identificación',
          validaciones: [
            (value: string) => value.trim() === '' ? 'La identificación es obligatoria' : null,
            (value: string) => {
              const regex = /^[0-9]+$/;
              if (!regex.test(value)) {
                return 'La identificación debe contener solo números y máximo 10 dígitos';
              }
              if (value.length > 10) {
                return 'La identificación debe contener solo números y máximo 10 dígitos';
              }
              return null;
            }
          ]
        }
      },

      {
        forLabel: 'email',
        label: 'Email',
        infoInput: {
          id: 'email',
          type: 'email',
          required: true,
          placeholder: 'Ingresa el email del barbero',
          validaciones: [
            (value: string) => value.trim() === '' ? 'El email es obligatorio' : null,
            (value: string) => {
              const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!regex.test(value)) {
                return 'El correo electrónico ingresado no tiene un formato válido';
              }
              return null;
            }
          ]
        }
      },

      {
        forLabel: 'telefono',
        label: 'Teléfono',
        infoInput: {
          id: 'telefono',
          type: 'tel',
          required: true,
          placeholder: 'Ingresa el teléfono',
          validaciones: [
            (value: string) => value.trim() === '' ? 'El teléfono es obligatorio' : null,
            (value: string) => {
              const regex = /^3\d{9}$/;
              if (!regex.test(value)) {
                return 'El número de teléfono debe comenzar con 3 y contener 10 dígitos';
              }
              return null;
            }
          ]
        }
      },

      {
        forLabel: 'fotografia',
        label: 'Fotografía',
        infoInput: {
          id: 'fotografia',
          type: 'file',
          required: false,
          placeholder: 'Sube una fotografía (opcional)',
          validaciones: [] // sin validaciones porque es opcional
        }
      }
    ],
    textoBoton: 'Registrar Barbero'
  };

}
