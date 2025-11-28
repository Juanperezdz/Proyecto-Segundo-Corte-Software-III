import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../../shared/organisms/header/header.component';
import { FormularioComponent } from '../../../shared/organisms/formulario/formulario.component';

@Component({
  selector: 'app-admim-barberos-template',
  standalone: true,
  imports: [HeaderComponent, FormularioComponent],
  templateUrl: './barberos-template.component.html',
  styleUrl: './barberos-template.component.css'
})
export class AdminBarberosTemplateComponent {
  @Input() navBar: {
    id: string;
    className?: string;
    text: string;
    redireccion: string;
  }[] = [];

  @Input() formBarbero!: {
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
