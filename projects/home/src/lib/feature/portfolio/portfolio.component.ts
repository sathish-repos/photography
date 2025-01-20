import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ImageService } from '../../../../../shared/src/lib/services/firebase.service';

@Component({
  selector: 'lib-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  constructor(private portfolio: ImageService) {}
  files: string[] = [];
  ngOnInit() {
    this.portfolio.getFiles('portfolio').subscribe({
      next: (urls) => {
        this.files = urls;
      },
      error: (err) => {
        console.error('Error fetching files:', err);
      },
    });
  }
}
