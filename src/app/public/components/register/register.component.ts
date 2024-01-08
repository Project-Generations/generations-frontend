import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService
  ) {}

  form = this.formbuilder.nonNullable.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onFormSubmit(): void {
    this.authService.Register(this.form.value);
  }
}
