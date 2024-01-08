import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from './core/models/user';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'generations-frontend';
  authService = inject(AuthService);
  http = inject(HttpClient);

  ngOnInit(): void {
    this.authService.checkIfAuthorized();

    // this.http
    //   .get<{ user: User }>('https://api.realworld.io/api/user')
    //   .subscribe((response) => {
    //     console.log('response', response);
    //   });
  }
}
