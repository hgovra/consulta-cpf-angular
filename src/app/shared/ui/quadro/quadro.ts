import { Component, effect, input, signal } from '@angular/core';

@Component({
  selector: 'quadro',
  imports: [],
  templateUrl: './quadro.html',
  styleUrl: './quadro.scss',
})
export class Quadro {
  titulo = input.required<string>();
  subtitulo = input<string>();

  atraso = input<number>(0);

  visivel = signal(false);

  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    effect(() => {
      clearTimeout(this.timer);

      const tempo = this.atraso();

      if (!tempo) {
        this.visivel.set(true);
        return;
      }

      this.timer = setTimeout(() => {
        this.visivel.set(true);
      }, tempo);
    });
  }
}
