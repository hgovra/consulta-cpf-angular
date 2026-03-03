import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from '../../shared/ui/icon/icon';
import { Icone } from '../../shared/ui/icon/icons.registry';

interface ItemMenu {
  icone: Icone;
  rotulo: string;
  rota: string;
}

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [Icon, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  menuColapsado = signal(true);

  itensMenu: ItemMenu[] = [
    { icone: 'busca', rotulo: 'Consultar CPF', rota: '/' },
    { icone: 'favoritos', rotulo: 'Favoritos', rota: 'favoritos' },
    { icone: 'chat', rotulo: 'Mensagens', rota: '/mensagens' },
    { icone: 'categorias', rotulo: 'Configuracoes', rota: '/configuracoes' },
    { icone: 'central', rotulo: 'Institucional', rota: '/institucional' }
  ];

  alternarMenu() {
    this.menuColapsado.update(valor => !valor);
  }
}
