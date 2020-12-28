import { Component } from '@angular/core';
import firebase from 'firebase/app';
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
import { AngularFireAuth } from '@angular/fire/auth';
import '@firebase/auth';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Trident';

  constructor(
    public afa: AngularFireAuth,
    private router: Router,
    private auths: AuthService
  ) {}

  signIn() {
    this.afa.signInWithPopup(googleAuthProvider).then((data) => {
      console.log(data);
    });
    this.auths.setUserdata('123456');
    this.router.navigate(['/test']);
  }
}
