import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { SocialComponent } from './social/social.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BannerComponent, CardsComponent, SocialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mizto-panaderia';
}
