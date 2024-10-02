import {
  Component,
  importProvidersFrom,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { Home } from '../../../page/home/models/home.types';

@Component({
  selector: 'lib-about',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  content = input.required<Home>();
  imageUrl!: string;
  // private storage = inject(AngularFireStorage);
  // constructor(private imageService: ImageService) {
  //   AngularFireModule.initializeApp(environment.firebaseConfig);
  // }

  ngOnInit() {
    // this.imageService.getImageDownloadURL('me.jpg').subscribe((url) => {
    //   this.imageUrl = url;
    // });
  }
}
