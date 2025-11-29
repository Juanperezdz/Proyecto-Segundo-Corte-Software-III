import { ExtraOptions, Routes } from '@angular/router';
import { HomePageComponent } from './pages/pages-cliente/home/home.page.component';
import { ReservasPageComponent } from './pages/pages-cliente/reserva/reserva.page.component';
import { LoginPageComponent } from './pages/login/login/login.component';
import { SignupPageComponent } from './pages/login/signup/signup.component';
import { AdminBarberosTemplateComponent } from './templates/admin-templates/barberos-template/barberos-template.component';
import { RegistrarBarberoComponent } from './pages/pages-administrador/registrar-barbero/registrar-barbero.component';
import { CrearTurnoBarberoPageComponent } from './pages/pages-barbero/crear-turno/crear-turno.component';
import { CrearServicioPageComponent } from './pages/pages-administrador/crear-servicio/crear-servicio.component';

export const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollOffset: [0, 80], // opcional
};

export const routes: Routes = [
  { path: '', redirectTo: 'crear-servicio', pathMatch: 'full' },
  { path: 'crear-servicio', component: CrearServicioPageComponent },
  { path: 'crear-turno', component: CrearTurnoBarberoPageComponent },
  { path: 'barberos', component: RegistrarBarberoComponent },
  { path: 'log-in', component: LoginPageComponent },
  { path: 'sign-up', component: SignupPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'reservas', component: ReservasPageComponent }
];