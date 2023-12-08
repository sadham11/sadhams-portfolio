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
      description: 'Description of Project 1',
      image: 'assets/project1.jpeg',
      link: 'https://services.planning.bh/',
    },
    {
      title: 'Iqraa',
      description: 'Description of Project 2',
      image: 'assets/project2.jpeg',
      link: 'https://iqraa.site/',
    },
    {
      title: 'Serene ERP',
      description: 'Description of Project 2',
      image: 'assets/project2.jpeg',
    },

    {
      title: '',
      description: 'Description of Project 2',
      image: 'assets/project2.jpeg',
    },
    // Add more projects as needed
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
