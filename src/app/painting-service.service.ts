import { Injectable } from '@angular/core';

interface Painting {
  title: string;
  year: number;
  author: string;
  dimensions: string;
  location: string;
  image: string;
  thumbnails: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  constructor() {}

  getPaintings(): Painting[] {
    return [
      {
        title: 'Зоряна ніч',
        year: 1889,
        author: 'Вінсент Ван Гог',
        dimensions: '73.7 см × 92.1 см',
        location: 'Музей сучасного мистецтва, Нью-Йорк',
        image: './images/1.jpg',  // Путь относительно папки assets: 'images/third.png'
        thumbnails: ['1.jpg', '2.jpg', '3.jpg']  // Пути относительно папки assets: 'images/second.png', 'images/third.png'
      },
      // Додаткові елементи галереї
      // ...
    ];
  }
}
