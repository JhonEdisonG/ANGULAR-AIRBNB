import { Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReservaComponent } from './reserva/reserva.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { DetallesComponent } from './detalles/detalles.component';

export const routes: Routes = [
  { path: '', redirectTo: 'feedback', pathMatch: 'full' }, // o 'page' si tienes home
  { path: 'feedback', component: FeedbackComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'mis-reservas', component: MisReservasComponent },
  { path: 'detalles', component: DetallesComponent },
];
