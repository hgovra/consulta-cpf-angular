import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ICONES, NomeIcone } from './registro.icones';

@Component({
  selector: 'icone',
  templateUrl: './icone.html',
  styleUrl: './icone.scss'
})
export class Icone {
  private sanitizador = inject(DomSanitizer);

  nome = input.required<NomeIcone>();
  tamanho = input<number>(20);
  cor = input<string>();

  corFinal = computed(() =>
    this.cor() ?? 'oklch(0.5727 0 0)'
  );

  svg = computed<SafeHtml>(() => {
    const svg = ICONES[this.nome()];

    if (!svg) {
      console.warn(`Icone "${this.nome()}" não encontrado.`);
      return '';
    }

    return this.sanitizador.bypassSecurityTrustHtml(svg);
  });

}
