import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent implements OnInit {

  diasSemana = [
    'Lunes', 'Martes', 'Miércoles', 'Jueves',
    'Viernes', 'Sábado', 'Domingo'
  ];

  mesSeleccionado: any[] = [];
  // guardamos fecha como Date para que el date pipe la muestre correctamente en zona local
  fecha!: Date;

  fechaActual = moment().startOf('day');

  // mes: number (1-12), anio: number
  getDiasporMes(mes: number, anio: number) {
    // formateo seguro: 2 dígitos para mes y día
    const MM = String(mes).padStart(2, '0');

    // Usamos moment (local) en lugar de utc para evitar el "shift" al mostrar la fecha
    const fechaInicialMoment = moment(`${anio}-${MM}-01`, 'YYYY-MM-DD');
    const fechaFinalMoment = fechaInicialMoment.clone().endOf('month');

    // Guardar fecha en formato Date (zona local) para que Angular la muestre bien
    this.fecha = fechaInicialMoment.toDate();

    const numeroDias = fechaFinalMoment.date(); // días que tiene el mes

    const dias: any[] = [];
    for (let d = 1; d <= numeroDias; d++) {
      const DD = String(d).padStart(2, '0');
      // crear moment en local con formato claro
      const diaObjeto = moment(`${anio}-${MM}-${DD}`, 'YYYY-MM-DD');
      dias.push({
        nombreDia: diaObjeto.format('dddd'),
        dia: d,
        indexSemana: diaObjeto.isoWeekday(),
        fechaCompleta: diaObjeto.format('YYYY-MM-DD'),
        esPasado: diaObjeto.isBefore(this.fechaActual, 'day')
      });
    }

    this.mesSeleccionado = dias;
  }

  cambiarMes(bandera: number) {
    // si fecha aún no está seteada, inicializar con hoy
    const base = this.fecha ? moment(this.fecha) : moment();
    const nueva = bandera < 0 ? base.clone().subtract(1, 'month') : base.clone().add(1, 'month');
    this.getDiasporMes(parseInt(nueva.format('MM'), 10), parseInt(nueva.format('YYYY'), 10));
  }

  @Input() fechaSeleccionada: string | null = null;

  @Output() onSeleccionarFecha = new EventEmitter<string>();

  clickDia(dia: any) {
    if (dia.esPasado) return;
    
    const fechaSeleccionada = moment(this.fecha)
      .format('YYYY-MM') + '-' + String(dia.dia).padStart(2, '0');

    if (this.fechaSeleccionada == fechaSeleccionada) {
      return;
    }

    this.fechaSeleccionada = fechaSeleccionada;

    console.log('fecha seleccionada', fechaSeleccionada);

    this.onSeleccionarFecha.emit(fechaSeleccionada);
  }

  ngOnInit() {
    const mes = moment().month() + 1;
    const anio = moment().year();
    this.getDiasporMes(mes, anio); // carga el mes actual correctamente
  }
}
