import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../../shared/organisms/header/header.component';
import { FormularioComponent } from '../../../shared/organisms/formulario/formulario.component';

@Component({
  selector: 'app-crear-turno-template',
  standalone: true,
  imports: [HeaderComponent, FormularioComponent],
  templateUrl: './crear-turno-template.component.html',
  styleUrl: './crear-turno-template.component.css'
})
export class CrearTurnoTemplateComponent {
  @Input() navBar: {
    id: string;
    className?: string;
    text: string;
    redireccion: string;
  }[] = [];

  @Input() formNuevoTurno!: {
    className: string;
    listaCampos: {
      forLabel: string;
      label: string;
      infoInput: {
        id: string;
        type: string;
        required: boolean;
        placeholder?: string;
        validaciones?: ((value: any) => string | null)[];
        opciones?: { value: any; label: string }[];
        multiple?: boolean;
        maxDate?: string;
        accept?: string;
      };
    }[];
    textoBoton: string;
  };
}
