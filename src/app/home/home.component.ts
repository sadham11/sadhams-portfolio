import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  projects = [
    {
      title: 'UPDA',
      description: 'Planning and Urban Development Authority (UPDA) website.',
      image: 'assets/projects/upda.png',
      link: 'https://services.planning.bh/',
    },
    {
      title: 'Iqraa',
      description:
        'Educational institution management application (Iqraa) website.',
      image: 'assets/projects/iqraa.png',
      link: 'https://iqraa.site/',
    },
    {
      title: 'Serene ERP',
      description:
        'Enterprise Resource Planning (ERP) system for business management.',
      image: 'assets/projects/serene.png',
      link: null,
    },
    {
      title: 'BeAware Bahrain',
      description:
        'Contact tracing mobile application for Covid-19 with a backoffice application.',
      image: 'assets/projects/beaware.png',
      link: null, // Add your actual link
    },
    {
      title: 'AAAS – Transmit',
      description:
        'Transmit is a third-party tool for authentication using diagrams.',
      image: 'assets/projects/confidential.png',
      link: null,
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  slickInit(e: any) {
    console.log('slick initialized', e);
  }

  breakpoint(e: any) {
    console.log('breakpoint', e);
  }

  afterChange(e: any) {
    console.log('afterChange', e);
  }

  beforeChange(e: any) {
    console.log('beforeChange', e);
  }
}
