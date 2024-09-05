import { Routes } from '@angular/router';
import { GalleryComponent } from '../../projects/gallery/src/public-api';
import { HomeComponent } from '../../projects/home/src/public-api';

export const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
