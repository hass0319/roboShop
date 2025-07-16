import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

    submit() {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    const hashedPassword = CryptoJS.SHA256(password).toString();

    const user = {
      id: Date.now(),
      name: '',
      email,
      password: hashedPassword,
    };
    this.authService.login(user);
  }

}
