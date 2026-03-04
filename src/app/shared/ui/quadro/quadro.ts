import { Component, input } from '@angular/core';

@Component({
  selector: 'quadro',
  imports: [],
  templateUrl: './quadro.html',
  styleUrl: './quadro.scss',
})
export class Quadro {
  titulo = input.required<string>();
  subtitulo = input<string>();
}
