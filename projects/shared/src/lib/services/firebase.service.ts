import { inject, Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { from, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private storage: AngularFireStorage) {}

  getFiles(path: string): Observable<string[]> {
    const ref = this.storage.ref(path);
    return from(ref.listAll()).pipe(
      switchMap((result) => {
        const urlPromises = result.items.map((item) => item.getDownloadURL());
        return from(Promise.all(urlPromises)); // Convert the Promise to an Observable
      })
    );
  }
}

// getImageDownloadURL() {
//   this.storage.storage
//     .ref('images/')
//     .listAll()
//     .then((result) => {
//       result.items.forEach((item) => {
//         item.getDownloadURL().then((url) => {
//           console.log(url); // URL can be used to display the file
//           return url;
//         });
//       });
//     });
//   // const storageRef = this.storage.ref(imagePath);
//   // return storageRef.getDownloadURL(); // Returns an Observable<string>
// }
