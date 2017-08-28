import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private authState: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.authState = this.afAuth.authState;
  }

  getAuthState() {
    return this.authState;
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  logOut() {
    this.router.navigate(['/home']);
    return this.afAuth.auth.signOut();
  }

}
