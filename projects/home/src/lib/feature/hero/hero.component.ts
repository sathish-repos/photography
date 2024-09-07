import { Component, input } from '@angular/core';
import { Hero } from '../../page/home/models/home.types';

@Component({
  selector: 'lib-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  content = input.required<Hero>();
}
