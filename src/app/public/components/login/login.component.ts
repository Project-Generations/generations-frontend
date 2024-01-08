import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService
  ) {}
  user: User;

  form = this.formbuilder.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onFormSubmit(): void {
    this.authService.Login(this.form.value);
  }
}
