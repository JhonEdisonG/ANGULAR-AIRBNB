import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  rating: number = 0;

  constructor() {
    // Asignar evento de clic a las estrellas
    const stars = document.querySelectorAll('.rating i') as NodeListOf<HTMLElement>; // Cast explícito aquí
    stars.forEach((star: HTMLElement) => {
      star.addEventListener('click', () => this.setRating(star));
    });
  }

  setRating(star: HTMLElement): void {
    // Establecer la calificación según el valor del atributo data-value
    this.rating = parseInt(star.getAttribute('data-value')!);

    // Resaltar las estrellas seleccionadas
    const stars = document.querySelectorAll('.rating i') as NodeListOf<HTMLElement>; // Cast explícito aquí
    stars.forEach((s: HTMLElement) => {
      if (parseInt(s.getAttribute('data-value')!) <= this.rating) {
        s.classList.add('selected');
      } else {
        s.classList.remove('selected');
      }
    });

    // Actualizar el valor del input oculto
    (document.getElementById('rating') as HTMLInputElement).value = this.rating.toString();
  }

  onSubmitFeedback(event: Event): void {
    event.preventDefault();

    const comments = (document.getElementById('comments') as HTMLTextAreaElement).value;

    if (!comments || !this.rating) {
      alert('Completa todos los campos obligatorios.');
      return;
    }

    console.log('Enviando Feedback:', { comments, rating: this.rating });

    // Simular envío exitoso de feedback
    alert('¡Feedback enviado con éxito!');
    window.location.href = "/page";
  }
}
