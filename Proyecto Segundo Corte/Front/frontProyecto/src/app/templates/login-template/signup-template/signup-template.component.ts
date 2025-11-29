import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../../shared/organisms/header/header.component';
import { FormularioComponent } from '../../../shared/organisms/formulario/formulario.component';
import { LinkComponent } from '../../../shared/atoms/link/link.component';

@Component({
  selector: 'app-signup-template',
  standalone: true,
  imports: [HeaderComponent, FormularioComponent, LinkComponent],
  templateUrl: './signup-template.component.html',
  styleUrl: './signup-template.component.css'
})
export class SignupTemplateComponent {
  @Input() formLogin!: {
    className: string;
    listaCampos: {
      forLabel: string;
      label: string;
      infoInput: {
        id: string;
        type: string;
        required: boolean;
        placeholder?: string;   // <--- OPCIONAL
        validaciones?: ((value: any) => string | null)[];
        opciones?: { value: any; label: string }[];
        multiple?: boolean;
        maxDate?: string;
      };
    }[];
    textoBoton: string;
  };

}
