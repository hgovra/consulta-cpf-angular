import { Component, input } from '@angular/core';

@Component({
  selector: 'botao',
  imports: [],
  templateUrl: './botao.html',
  styleUrl: './botao.scss',
})
export class Botao {
  texto = input.required<string>();
  tipo = input<'button' | 'submit'>('button');
  estilo = input<'normal' | 'contorno' | 'link'>('normal');
  processando = input<boolean>(false);
  desabilitado = input<boolean>(false);
}
