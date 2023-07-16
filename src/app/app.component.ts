import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  imagePathSafe: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const imagePath = 'assets/images/my-image.jpg';
    this.imagePathSafe = this.sanitizer.bypassSecurityTrustResourceUrl(imagePath);
  }
}

