import { Component, Input } from '@angular/core';
import { CampoInputComponent } from '../../molecules/campo-input/campo-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CampoInputComponent, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @Input() className: string = '';
  @Input() textoBoton: string = '';
  @Input() disabled: boolean = false;

  @Input() listaCampos: {
    forLabel: string;
    label: string;
    infoInput: {
      id: string;
      type: string;
      required: boolean;
      placeholder: string;
      validaciones: ((value: string) => string | null)[];
    }
  }[] =[];

}
