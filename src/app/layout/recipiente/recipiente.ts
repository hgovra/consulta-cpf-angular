import { Component, input } from '@angular/core';

import { MenuUsuario } from "../menu-usuario/menu-usuario";

@Component({
  selector: 'recipiente',
  templateUrl: './recipiente.html',
  styleUrl: './recipiente.scss',
  imports: [MenuUsuario]
})
export class Recipiente {
  titulo = input.required<string>();
  breadcrumb = input<string>();
}
