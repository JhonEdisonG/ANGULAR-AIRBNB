import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
  standalone: true,
  imports: [FormsModule], // ✅ Aquí agregas FormsModule
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const userExists = existingUsers.find((user: any) => user.email === this.email);

    if (userExists) {
      alert('Ya existe un usuario con ese correo');
      return;
    }

    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    existingUsers.push(newUser);
    localStorage.setItem('usuarios', JSON.stringify(existingUsers));

    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    this.router.navigate(['/iniciar-sesion']);
  }
}
