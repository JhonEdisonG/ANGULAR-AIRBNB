import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-mis-reservas',
  standalone: true, // Indica que este componente es standalone
  imports: [CommonModule],  // Asegúrate de importar CommonModule aquí
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent implements OnInit {

  reservations: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.reservations = [{
      property_name: 'Cabaña en las Montañas',
      img: 'https://images.ctfassets.net/8lc7xdlkm4kt/33L5l2aTXdJAAEfw55n0Yh/7472faf6b498fdc11091fc65a5c69165/render-sobre-planos-saint-michel.jpg',
      in_time: '2025-06-10',
      out_time: '2025-06-15',
      status: 'Confirmada',
      coordinates: [6.2088, -75.5679],
      isPast: false 
    }];
  }

  leaveFeedback(reservation: any): void {
    alert(`Dejar feedback para la propiedad: ${reservation.property_name}`);
  }

}
