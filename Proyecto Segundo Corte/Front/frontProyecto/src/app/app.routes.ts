import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.page.component';
import { ReservasPageComponent } from './pages/reservas/reservas.page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'reservas', component: ReservasPageComponent }
];
