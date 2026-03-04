import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icone } from "../../shared/ui/icone/icone";
import { NomeIcone } from '../../shared/ui/icone/registro.icones';

interface ItemMenu {
  icone: NomeIcone;
  rotulo: string;
  rota: string;
}

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, Icone],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  menuEscondido = signal(true);

  itensMenu: ItemMenu[] = [
    { icone: 'busca', rotulo: 'Consultar CPF', rota: '/' },
    { icone: 'favoritos', rotulo: 'Favoritos', rota: 'favoritos' },
    { icone: 'chat', rotulo: 'Mensagens', rota: '/mensagens' },
    { icone: 'categorias', rotulo: 'Configuracoes', rota: '/configuracoes' },
    { icone: 'central', rotulo: 'Institucional', rota: '/institucional' }
  ];

  alternarMenu() {
    this.menuEscondido.update(valor => !valor);
  }
}
