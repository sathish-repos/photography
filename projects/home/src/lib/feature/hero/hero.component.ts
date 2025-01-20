import { Component, input } from '@angular/core';
import { Hero } from '../../page/home/models/home.types';
import { ImageService } from '../../../../../shared/src/lib/services/firebase.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'lib-hero',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  content = input.required<Hero>();

  constructor(private hero: ImageService) {}
  files: string[] = [];
  ngOnInit() {
    this.hero.getFiles('carousal').subscribe({
      next: (urls) => {
        this.files = urls;
        console.log(this.files, 'ahbsdhfb');
      },
      error: (err) => {
        console.error('Error fetching files:', err);
      },
    });
  }
}
