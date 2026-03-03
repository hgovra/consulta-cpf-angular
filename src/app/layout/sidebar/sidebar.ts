import { Component, signal } from '@angular/core';
import { Icon } from '../../shared/ui/icon/icon';
import { Icone } from '../../shared/ui/icon/icons.registry';

interface IconeSidebar {
  icone: Icone;
  rotulo: string;
  rota?: string;
}

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [Icon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  colapsado = signal(true);

  itens: IconeSidebar[] = [
    { icone: 'busca', rotulo: 'Consultar CPF' },
    { icone: 'favoritos', rotulo: 'Favoritos' },
    { icone: 'chat', rotulo: 'Mensagens' },
    { icone: 'categorias', rotulo: 'Configurações' },
    { icone: 'central', rotulo: 'Institucional' }
  ];

  abrirFechar() {
    this.colapsado.update(v => !v);
  }
}
