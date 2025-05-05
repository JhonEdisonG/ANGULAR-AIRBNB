import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  currentProperty = {
    title: 'Casa de Campo',
    price: '$500,000',
    description: 'Hermosa casa en el campo.',
    img: 'https://images.adsttc.com/media/images/5f37/1cac/b357/65d2/c900/0089/slideshow/13-Imagen_Exterior__arquitecturaicomplementos.jpg?1597447331',
    coordinates: [19.432608, -99.133209],
    address: 'Carretera X, 123, Ciudad, País',
    amenities: ['Wifi', 'Piscina', 'Estacionamiento'],
    id: 1
  };

  feedback = [
    { rating: 5, comments: 'Excelente propiedad!' },
    { rating: 4, comments: 'Muy buena, pero un poco alejada.' }
  ];
}
