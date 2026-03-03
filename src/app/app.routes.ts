import { Routes } from '@angular/router';
import { cpfFoundGuard } from './core/guards/cpf-found.guard';

export const rotasAplicacao: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/consulta-cpf/consulta-cpf')
        .then(m => m.ConsultaCpf)
  },
  {
    path: 'cooperado',
    canActivate: [cpfFoundGuard],
    loadComponent: () =>
      import('./features/cooperado/cooperado')
        .then(m => m.Cooperado)
  },
  {
    path: 'favoritos',
    loadComponent: () =>
      import('./features/favoritos/favoritos')
        .then(m => m.Favoritos)
  },
  {
    path: 'mensagens',
    loadComponent: () =>
      import('./features/mensagens/mensagens')
        .then(m => m.Mensagens)
  },
  {
    path: 'configuracoes',
    loadComponent: () =>
      import('./features/configuracoes/configuracoes')
        .then(m => m.Configuracoes)
  },
  {
    path: 'institucional',
    loadComponent: () =>
      import('./features/institucional/institucional')
        .then(m => m.Institucional)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
