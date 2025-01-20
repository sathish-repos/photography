import {
  Component,
  importProvidersFrom,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { Home } from '../../../page/home/models/home.types';
import { ImageService } from '../../../../../../shared/src/lib/services/firebase.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

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
  imageUrl: string | void | undefined;
  // private storage = inject(AngularFireStorage);
  // constructor(private imageService: ImageService) {
  //   // AngularFireModule.initializeApp(environment.firebaseConfig);
  // }
  constructor(private storage: AngularFireStorage) {}
  ngOnInit() {
    this.storage.storage
      .ref('/images')
      .listAll()
      .then((result) => {
        result.items.forEach((item) => {
          item.getDownloadURL().then((url) => {
            console.log(url); // URL can be used to display the file
            this.imageUrl = url;
          });
        });
      });
    // this.imageUrl = this.imageService.getImageDownloadURL();
    // console.log(this.imageUrl);
  }
}
