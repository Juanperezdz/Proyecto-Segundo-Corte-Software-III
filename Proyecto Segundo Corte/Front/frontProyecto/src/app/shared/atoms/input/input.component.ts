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
  Array = Array;

  @Input() id = '';
  @Input() type: string = '';
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() placeholder?: string = '';
  @Input() validaciones?: ((value: any) => string | null)[];
  @Input() opciones?: { value: any; label: string }[] = [];
  @Input() multiple?: boolean = false;
  @Input() accept?: string = '';

  value: any = ''; // NO array por defecto
  errores: string[] = [];

  // Para inputs normales
  onValueChange(valor: any) {
    this.value = valor;
    this.validar(valor);
  }

  // Para inputs file
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const archivo = input.files[0];
      this.value = archivo;   // guardas el archivo
      this.validar(archivo);  // ejecutas las validaciones normales
    }
  }

  // Para checkbox
  onCheckChange(event: any) {
    const checked = event.target.checked;
    const val = event.target.value;

    if (!Array.isArray(this.value)) {
      this.value = [];
    }

    if (checked) {
      this.value = [...this.value, val];
    } else {
      this.value = this.value.filter((v: any) => v !== val);
    }

    this.validar(this.value);
  }


  // Para selects (especialmente multiple)
  onValueChangeSelect(valor: any) {
    if (this.multiple) {
      // valor viene como string[] en ngModel
      this.value = Array.isArray(valor) ? valor : [valor];
      this.validar(this.value);
    } else {
      this.value = valor;
      this.validar(valor);
    }
  }

  validar(valor: any) {
    this.errores = [];

    if (this.validaciones && this.validaciones.length > 0) {
      for (let fn of this.validaciones) {
        const msg = fn(valor);
        if (msg) {
          this.errores = [msg];
          return;
        }
      }
    }
  }
}
