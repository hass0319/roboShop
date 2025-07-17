import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly userKey = 'robot-user'

  constructor(private router: Router) { }

  isLoggedIn():Boolean {
    return !!localStorage.getItem(this.userKey);
  }

  getCurrentUser():User|null {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  login(user:User){
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.router.navigate(['/']);
  }

  logout(){
    localStorage.removeItem(this.userKey);
    this.router.navigate(['/sign-in']);
  }

  register(user:User) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.router.navigate(['/']);
  }
}
