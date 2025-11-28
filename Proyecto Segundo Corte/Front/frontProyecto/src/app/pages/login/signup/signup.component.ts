import { Component } from '@angular/core';
import { SignupTemplateComponent } from '../../../templates/login-template/signup-template/signup-template.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SignupTemplateComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupPageComponent {
  formLogin = {
    className: 'form-signup',
    listaCampos: [
      {
        forLabel: 'usuario',
        label: 'Usuario',
        infoInput: {
          id: 'usuario',
          type: 'text',
          required: true,
          placeholder: 'Ingresa tu usuario',
          validaciones: [
            (value: string) => value.trim() === '' ? 'El usuario es obligatorio' : null,
            (value: string) => {
              const regex = /^[a-zA-Z]+$/;
              if (!regex.test(value)) {
                return 'El usuario solo puede contener letras y no debe exceder 50 caracteres';
              }
              if (value.length < 2 || value.length > 50) {
                return 'El usuario solo puede contener letras y no debe exceder 50 caracteres';
              }
              return null;
            }
          ]
        }
      },
      {
        forLabel: 'nombre',
        label: 'Nombre',
        infoInput: {
          id: 'nombre',
          type: 'text',
          required: true,
          placeholder: 'Ingresa tu nombre',
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
        forLabel: 'email',
        label: 'Email',
        infoInput: {
          id: 'email',
          type: 'email',
          required: true,
          placeholder: 'Ingresa tu email',
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
          placeholder: 'Ingresa tu teléfono',
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
    textoBoton: 'Registrarse'
  };
}
