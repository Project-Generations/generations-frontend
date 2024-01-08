import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment as env } from '../../../environments/environment.development';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSignal = signal<User | undefined | null>(undefined);
  constructor(private httpClient: HttpClient, private router: Router) {}

  checkIfAuthorized() {
    this.httpClient.get<{ user: User }>(`${env.authApi}/user`).subscribe({
      next: (response) => {
        console.log('response', response);
        this.currentUserSignal.set(response.user);
      },
      error: () => {
        this.currentUserSignal.set(null);
      },
    });
  }

  Register(formObject: object) {
    this.httpClient
      .post<{ user: User }>(`${env.authApi}/users`, {
        user: formObject,
      })
      .subscribe((response) => {
        console.log(response);
        localStorage.setItem('token', response.user.token);
        this.currentUserSignal.set(response.user);
        this.router.navigateByUrl('/dashboard');
      });
  }

  Login(formObject: object) {
    /* 
      User for testing is:
      ben@test.test
      ben1234
    */
    this.httpClient
      .post<{ user: User }>(`${env.authApi}/users/login`, {
        user: formObject,
      })
      .subscribe((response) => {
        console.log(response);
        localStorage.setItem('token', response.user.token);
        this.currentUserSignal.set(response.user);
        this.router.navigateByUrl('/dashboard');
      });
  }

  Logout() {
    console.log('logout');
    localStorage.removeItem('token');
    this.currentUserSignal.set(null);
  }
}
