import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { FooterComponent } from './footer/footer.component';
import { InnerAboutComponent } from './about/inner-about/inner-about.component';
import { InnerServiceComponent } from './inner-service/inner-service.component';

@Component({
  selector: 'app-agri',
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    InnerAboutComponent,
    InnerServiceComponent,
    TestimonialsComponent,
    RecentPostsComponent,
    CallToActionComponent,
    FooterComponent
  ],
  templateUrl: './agri.component.html',
  styleUrl: './agri.component.css',
})
export class AgriComponent {}
