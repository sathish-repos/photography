import { Component } from '@angular/core';
import { HomeTemplateComponent } from '../../feature/home-template/home-template.component';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [HomeTemplateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
