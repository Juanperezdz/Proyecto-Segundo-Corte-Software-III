import { Component } from '@angular/core';
import { LoginTemplateComponent } from '../../../templates/login-template/login-template/login-template.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginTemplateComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginPageComponent {

  formLogin = {
    className: 'form-login',
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
            (value: string) => value.length < 4 ? 'Mínimo 4 caracteres' : null
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
            (value: string) => value.length < 6 ? 'Mínimo 6 caracteres' : null
          ]
        }
      }
    ],
    textoBoton: 'Enviar'
  };

}
