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
    className: 'form-registrar-barbero grid',
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
          validaciones: [],
          accept: 'image/*'
        }
      },
      {
        forLabel: 'fechaNacimiento',
        label: 'Fecha de nacimiento',
        infoInput: {
          id: 'fechaNacimiento',
          type: 'date',
          required: true,
          placeholder: '',
          validaciones: [
            (value: string) => value.trim() === '' ? 'La fecha de nacimiento es obligatoria' : null,
            (value: string) => {
              const hoy = new Date().toISOString().split('T')[0];
              if (value > hoy) {
                return 'La fecha no puede ser mayor a la fecha actual';
              }
              return null;
            },
            (value: string) => {
              const nacimiento = new Date(value);
              const hoy = new Date();
              const edad = hoy.getFullYear() - nacimiento.getFullYear();
              const ajusteMes =
                hoy.getMonth() < nacimiento.getMonth() ||
                (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate());

              const edadFinal = ajusteMes ? edad - 1 : edad;

              if (edadFinal < 18) {
                return 'El barbero debe tener al menos 18 años de edad';
              }
              return null;
            }
          ]
        }
      },
      {
        forLabel: 'serviciosOfrecidos',
        label: 'Servicios ofrecidos',
        infoInput: {
          id: 'serviciosOfrecidos',
          type: 'checkbox-group',
          required: true,
          placeholder: 'Seleccione los servicios',
          opciones: [
            { value: 'Cortes', label: 'Cortes' },
            { value: 'Barba', label: 'Barba' },
            { value: 'Cejas', label: 'Cejas' }
          ],
          validaciones: [
            (value: string[]) =>
              (!value || value.length === 0)
                ? 'Debe seleccionar al menos un servicio'
                : null
          ]
        }
      },
      {
        forLabel: 'password',
        label: 'Contraseña',
        infoInput: {
          id: 'password',
          type: 'password',
          required: true,
          placeholder: 'Ingresa tu contraseña',
          validaciones: [
            (value: string) => value.trim() === '' ? 'La contraseña es obligatoria' : null,
            (value: string) => value.length < 8 ? 'La contraseña debe tener al menos 8 caracteres' : null
          ]
        }
      }

    ],
    textoBoton: 'Registrar Barbero'
  };

}
