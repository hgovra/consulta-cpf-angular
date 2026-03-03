import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icone, ICONES } from './icons.registry';

@Component({
  selector: 'ui-icon',
  standalone: true,
  templateUrl: './icon.html',
  styleUrls: ['./icon.scss']
})
export class Icon {
  private sanitizador = inject(DomSanitizer);

  nome = input.required<Icone>();
  tamanho = input<number>(20);

  svg = computed<SafeHtml>(() => {
    const svgOriginal = ICONES[this.nome()] ?? '';
    return this.sanitizador.bypassSecurityTrustHtml(svgOriginal);
  });
}
