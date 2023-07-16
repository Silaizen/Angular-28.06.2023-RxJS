import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent {
  @Input() painting!: Painting;

  showFullImage = '';

  toggleImage(image: string): void {
    this.showFullImage = image;
  }
}

interface Painting {
  title: string;
  year: number;
  author: string;
  dimensions: string;
  location: string;
  image: string;
  thumbnails: string[];
}