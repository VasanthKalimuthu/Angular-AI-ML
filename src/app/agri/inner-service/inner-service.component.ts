import { Component, Inject, OnInit, AfterViewInit, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inner-service',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './inner-service.component.html',
  styleUrls: ['./inner-service.component.css'],
})
export class InnerServiceComponent implements OnInit, AfterViewInit {
  swiper: Swiper | undefined; // Use `| undefined` to handle initialization safely
  activeIndex: number = 0;
  isSwiperReady: boolean = false; // Flag to track Swiper initialization

  slides = [
    {
      category: 'We do',
      title: 'Planting',
      image: 'assets/images/agri/img/img_sq_1.jpg',
      link: '/planting',
    },
    {
      category: 'We do',
      title: 'Mulching',
      image: 'assets/images/agri/img/img_sq_3.jpg',
      link: '/mulching',
    },
    {
      category: 'We do',
      title: 'Watering',
      image: 'assets/images/agri/img/img_sq_8.jpg',
      link: '/watering',
    },
    {
      category: 'We do',
      title: 'Fertilizing',
      image: 'assets/images/agri/img/img_sq_4.jpg',
      link: '/fertilizing',
    },
    {
      category: 'We do',
      title: 'Harvesting',
      image: 'assets/images/agri/img/img_sq_5.jpg',
      link: '/harvesting',
    },
    {
      category: 'We do',
      title: 'Mowing',
      image: 'assets/images/agri/img/img_sq_6.jpg',
      link: '/mowing',
    },
    {
      category: 'We do',
      title: 'Seeding Plants',
      image: 'assets/images/agri/img/img_sq_8.jpg',
      link: '/seeding',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // No Swiper initialization here
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const nextButton = document.querySelector('.js-custom-next');
      const prevButton = document.querySelector('.js-custom-prev');      
      // Initialize Swiper
      this.swiper = new Swiper('.init-swiper', {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000,
        },
        slidesPerView: 'auto',
        spaceBetween: 40, // Consistent spacing between slides
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.js-custom-next',
          prevEl: '.js-custom-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2, // 2 slides on medium screens
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
        on: {
          slideChange: () => {
            if (this.swiper) {
              this.activeIndex = this.swiper.realIndex; // Safely access realIndex
              
    console.log('Active Index:', this.activeIndex); // Debugging
    console.log('Total Slides:', this.swiper.slides.length); // Debugging
    // console.log('Visible Slides:', this.swiper.slidesPerView); // Debugging
            } else {
              console.error('Swiper instance is undefined.'); // Debugging
            }
          },
        },
        
      });
      this.isSwiperReady = true; // Mark Swiper as ready
      if (nextButton) {
        nextButton.addEventListener('click', () => {
          if (this.swiper) {
            this.swiper.slideNext();
          } else {
            console.error('Swiper instance is not initialized yet.');
          }
        });
      }
  
      if (prevButton) {
        prevButton.addEventListener('click', () => {
          if (this.swiper) {
            this.swiper.slidePrev();
          } else {
            console.error('Swiper instance is not initialized yet.');
          }
        });
      }
      this.isSwiperReady = true; // Mark Swiper as ready
      console.log('Swiper Initialized:', this.swiper); // Debugging
    }
  }

  goToSlide(index: number): void {
    if (this.swiper) {
      this.swiper.slideToLoop(index);
    } else {
      console.error('Swiper instance is not initialized yet.'); // Debugging
    }
  }
}