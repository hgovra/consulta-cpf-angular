import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CpfService } from '../services/cpf';

export const cpfFoundGuard: CanActivateFn = () => {
  const cpfService = inject(CpfService);
  const router = inject(Router);

  const cooperado = cpfService.cooperado();

  if (cooperado) {
    return true;
  }

  return router.createUrlTree(['/']);
};
