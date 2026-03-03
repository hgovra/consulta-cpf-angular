import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'passos',
  templateUrl: './passos.html',
  styleUrl: './passos.scss'
})
export class Passos {
  listaPassos = input.required<string[]>();
  passoAtual = input.required<number>();

  indiceAtual = computed(() => this.passoAtual() - 1);
  totalPassos = computed(() => this.listaPassos().length);
}
