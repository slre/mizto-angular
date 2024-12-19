import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  standalone: true,
  imports: [CommonModule], // Importar CommonModule para *ngFor
  styleUrl: '/src/styles.css'
})
export class CardsComponent {
  // cards = [
  //   { image: 'https://via.placeholder.com/300x200', title: 'Card 1', modalId: 'modal1', content: 'Más información sobre la card 1.' },
  //   { image: 'https://via.placeholder.com/300x200', title: 'Card 2', modalId: 'modal2', content: 'Más información sobre la card 2.' },
  //   { image: 'https://via.placeholder.com/300x200', title: 'Card 3', modalId: 'modal3', content: 'Más información sobre la card 3.' }
  // ];
  cards: any[] = []; // Almacena las cards desde el JSON

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Carga el archivo JSON
    this.http.get<any[]>('assets/mizto.products.json').subscribe((data) => {
      this.cards = data;
      console.log(data);
    });
  }
}
