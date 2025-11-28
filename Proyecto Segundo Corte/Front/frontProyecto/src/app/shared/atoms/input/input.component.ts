import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() id = '';
  @Input() type: string = '';
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() placeholder: string = '';
  @Input() validaciones?: ((value: string) => string | null)[];

  value: string = '';
  errores: string[] = [];

  onValueChange(valor: string) {
    this.value = valor;
    this.validar(valor);
  }

  validar(valor: string) {
    this.errores = [];

    if (this.validaciones && this.validaciones.length > 0) {
      for (let fn of this.validaciones) {
        const msg = fn(valor);
        if (msg) {
          this.errores = [msg]; // solo se guarda el primer error encontrado
          return;               // salir de la función inmediatamente
        }
      }
    }
  }

}
