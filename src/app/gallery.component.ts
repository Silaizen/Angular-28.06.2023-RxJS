import { Component, OnInit } from '@angular/core';



interface Painting {
    title: string;
    year: number;
    author: string;
    dimensions: string;
    location: string;
    image: string;
    thumbnails: string[];
  }


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnInit {
    paintings: Painting[] = [];
  
    ngOnInit() {
      // Заповнення даними
      this.paintings = [
        {
          title: 'Зоряна ніч',
          year: 1889,
          author: 'Вінсент Ван Гог',
          dimensions: '73.7 см × 92.1 см',
          location: 'Музей сучасного мистецтва, Нью-Йорк',
          image: '../assets/images/1.jpg',
          thumbnails: ['../assets/images/1.jpg', '../assets/images/2.jpg', '../assets/images/3.jpg']
        },
        // Додаткові елементи галереї
        // ...
      ];
    }
  }