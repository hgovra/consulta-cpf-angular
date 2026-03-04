import { Component, input } from '@angular/core';
import { Icone } from "../../shared/ui/icone/icone";

@Component({
  selector: 'menu-usuario',
  templateUrl: './menu-usuario.html',
  styleUrl: './menu-usuario.scss',
  imports: [Icone]
})
export class MenuUsuario {
  notificacoes = input<number>(0);
  instituicao = input<string>('');
  avatarUrl = input<string>();
}
