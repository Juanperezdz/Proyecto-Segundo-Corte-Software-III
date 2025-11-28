import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../../shared/organisms/header/header.component';
import { FormularioComponent } from '../../../shared/organisms/formulario/formulario.component';
import { LinkComponent } from '../../../shared/atoms/link/link.component';

@Component({
  selector: 'app-login-template',
  standalone: true,
  imports: [HeaderComponent, FormularioComponent, LinkComponent],
  templateUrl: './login-template.component.html',
  styleUrl: './login-template.component.css'
})
export class LoginTemplateComponent {

  @Input() formLogin!: {
    className: string;
    listaCampos: {
      forLabel: string;
      label: string;
      infoInput: {
        id: string;
        type: string;
        required: boolean;
        placeholder: string;
        validaciones: ((value: string) => string | null)[];
      };
    }[];
    textoBoton: string;
  };


}
