import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
