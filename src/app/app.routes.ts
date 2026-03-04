import { Routes } from '@angular/router';

export const rotasAplicacao: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/consulta-cpf/consulta-cpf')
        .then(m => m.ConsultaCpf)
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
