import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Property } from '../models/property.model';

@Component({
  standalone: true,
  selector: 'app-page',
  imports: [RouterModule, CommonModule], // <-- Include CommonModule here
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  isLoggedIn = false;
  properties: Property[] = [
    {
      id: 1,
      title: 'Apartamento en El Poblado',
      description: '$450,000 COP / noche',
      price: '450,000',
      imageUrl: 'https://images.ctfassets.net/8lc7xdlkm4kt/33L5l2aTXdJAAEfw55n0Yh/7472faf6b498fdc11091fc65a5c69165/render-sobre-planos-saint-michel.jpg'
    },
    {
      id: 2,
      title: 'Casa colonial en Cartagena',
      description: '$500,000 COP / noche',
      price: '500,000',
      imageUrl: 'https://media-luna-hostel.cartagena-hotels.net/data/Photos/1080x700w/10392/1039228/1039228984/cartagena-media-luna-hostel-photo-1.JPEG'
    },
    {
      id: 3,
      title: 'Loft en Bogotá',
      description: '$320,000 COP / noche',
      price: '320,000',
      imageUrl: 'https://latinexclusive.com/sites/default/files/styles/main_property_slide/public/api_file_downloads/3862061_1.jpg?itok=qxmdZ3oA'
    },
    {
      id: 4,
      title: 'Cabaña en el Eje Cafetero',
      description: '$800,000 COP / noche',
      price: '800,000',
      imageUrl: 'https://asoaturquindio.com/wp-content/uploads/2023/09/cabanas-la-herradura-4-1.jpg'
    },
    {
      id: 5,
      title: 'Hostal en Santa Marta',
      description: '$50,000 COP / noche',
      price: '50,000',
      imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max500/151251581.jpg?k=02b942afead8be7bea67cd35453662d8a6ae787336565b884c55aca6dbedcd08&o='
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('id');
    console.log('ID de la propiedad:', id);

    this.isLoggedIn = true; // Or false depending on the user's login status
  }
}
