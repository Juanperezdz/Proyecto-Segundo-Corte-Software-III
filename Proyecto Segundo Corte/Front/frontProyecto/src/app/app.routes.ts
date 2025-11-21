import { ExtraOptions, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.page.component';
import { ReservasPageComponent } from './pages/reserva/seleccion-servicio-reserva/reservas.page.component';

export const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollOffset: [0, 80], // opcional
};

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'reservas', component: ReservasPageComponent }
];
