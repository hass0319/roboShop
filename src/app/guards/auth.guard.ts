import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router = inject (Router);

  if (auth.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/sign-in']);
    return false;
  }
};
