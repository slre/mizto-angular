import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: '/src/styles.css',
  encapsulation: ViewEncapsulation.None

})

export class BannerComponent {

  video = '/assets/video.mp4';

}
