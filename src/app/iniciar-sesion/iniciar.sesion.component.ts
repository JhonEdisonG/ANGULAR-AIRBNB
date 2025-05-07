import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const user = usuarios.find((u: any) => u.email === this.email && u.password === this.password);

    if (user) {
      localStorage.setItem('usuarioActual', JSON.stringify(user));
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/mis-reservas']);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }
}
