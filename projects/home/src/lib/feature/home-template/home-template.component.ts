import { Component, input } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { Home } from '../../page/home/models/home.types';

@Component({
  selector: 'lib-home-template',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home-template.component.html',
  styleUrl: './home-template.component.scss'
})
export class HomeTemplateComponent {
  content = input.required<Home>();
}
