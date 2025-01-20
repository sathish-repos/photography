import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'photography';

  // firebaseConfig = {
  //   apiKey: 'AIzaSyBpOJDt_HEzUki2z9G2fike0uIOKWftMnk',
  //   authDomain: 'snapbykeerthyy-13235.firebaseapp.com',
  //   databaseURL:
  //     'https://snapbykeerthyy-13235-default-rtdb.asia-southeast1.firebasedatabase.app',
  //   projectId: 'snapbykeerthyy-13235',
  //   storageBucket: 'snapbykeerthyy-13235.appspot.com',
  //   messagingSenderId: '1035984570275',
  //   appId: '1:1035984570275:web:a327a7bc6070a06e7d7c16',
  // };

  // // Initialize Firebase
  // app = initializeApp(this.firebaseConfig);
}
