import { Component, Input } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';

@Component({
  selector: 'app-campo-input',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './campo-input.component.html',
  styleUrl: './campo-input.component.css'
})
export class CampoInputComponent {
  @Input() forLabel: string = '';
  @Input() label: string = '';
  @Input() className: string = '';

  @Input() infoInput!: {
    id: string;
    type: string;
    required: boolean;
    placeholder?: string;   // <--- OPCIONAL
    validaciones?: ((value: any) => string | null)[];
    opciones?: { value: any; label: string }[];
    multiple?: boolean;
    maxDate?: string;
    accept?: string;
  };

}
