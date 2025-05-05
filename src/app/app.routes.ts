import { Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReservaComponent } from './reserva/reserva.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { DetallesComponent } from './detalles/detalles.component';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './iniciar-sesion/iniciar.sesion.component';
import { RegisterComponent } from './registrar/registrar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'mis-reservas', component: MisReservasComponent },
  { path: 'detalles', component: DetallesComponent },
  { path: 'page', component: PageComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'registrar', component: RegisterComponent },
];
