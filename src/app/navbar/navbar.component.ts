import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: any = null;
  isLoggedIn = false;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.getAuthState().subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  isAuthenticated() {
    if (this.currentUser && this.currentUser.displayName) {
      return true;
    } else {
      return false;
    }
  }

  loginWithGoogle() {
    this.isLoggedIn = true;
    this.auth.loginWithGoogle();
  }

  logOut() {
    this.isLoggedIn = false;
    if (window.confirm('Are you sure?')) {
      this.auth.logOut();

    }
  }

}
