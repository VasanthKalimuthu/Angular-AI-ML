import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AgriComponent } from '../agri/agri.component';
import GLightbox from 'glightbox';
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [AgriComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit() {
    // Lazy load Glightbox only in the browser
    if (isPlatformBrowser(this.platformId)) {
      import('aos').then((AOSModule) => {
        const AOS = AOSModule.default;
        AOS.init();
      });
      import('glightbox').then((GLightboxModule) => {
        const GLightbox = GLightboxModule.default;
        GLightbox({
          selector: '.glightbox',
        });
      });
    }
  }
}
