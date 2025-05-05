import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  reservationData: any = {
    in_time: '2025-06-01',
    out_time: '2025-06-07',
    subtotal: 350,
    property_id: 1
  }; 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitPayment(event: Event): void {
    event.preventDefault(); 

    const cardNumber = (document.getElementById('card-number') as HTMLInputElement).value;
    const cardExpiry = (document.getElementById('card-expiry') as HTMLInputElement).value;
    const cardCvc = (document.getElementById('card-cvc') as HTMLInputElement).value;

    if (!cardNumber || !cardExpiry || !cardCvc) {
      alert('Por favor, complete todos los campos de pago.');
      return;
    }

    const blockedDates = ['2025-06-01', '2025-06-02']; // Fechas bloqueadas de ejemplo
    const startDate = new Date(this.reservationData.in_time);
    const endDate = new Date(this.reservationData.out_time);
    let currentDate = startDate;

    while (currentDate <= endDate) {
      const formattedDate = currentDate.toISOString().split('T')[0];
      if (blockedDates.includes(formattedDate)) {
        alert('Una o más fechas seleccionadas ya no están disponibles. Por favor, elige otras.');
        this.router.navigate(['/reserva', { id: this.reservationData.property_id }]);
        return;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    alert('Pago simulado con éxito. Reserva realizada.');

    localStorage.removeItem('reservationData');
    this.router.navigate(['/home']); 
  }
}
