import { Component, signal } from '@angular/core';
import { HomeTemplateComponent } from '../../feature/home-template/home-template.component';
import { Home } from './models/home.types';
import { HomeMocks } from './mocks/home.mocks';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [HomeTemplateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  content = signal<Home>(HomeMocks)
}
