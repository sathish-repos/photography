import { Component, signal } from '@angular/core';
import { HomeTemplateComponent } from '../../feature/home-template/home-template.component';
import { Home } from './models/home.types';
import { HomeMocks } from './mocks/home.mocks';
import { HeaderComponent } from '../../../../../shared/src/lib/components/header/header.component';
import { AboutComponent } from '../../feature/about/about/about.component';
import { PortfolioComponent } from '../../feature/portfolio/portfolio.component';
import { ContactComponent } from '../../feature/contact/contact.component';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [
    HomeTemplateComponent,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  content = signal<Home>(HomeMocks);
}
