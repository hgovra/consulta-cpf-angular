import {
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  inject
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[mascaraCpf]'
})
export class MascaraCpf {

  private elemento = inject(ElementRef<HTMLElement>);
  private destroyRef = inject(DestroyRef);
  private ngControl = inject(NgControl, { optional: true });

  private input!: HTMLInputElement;
  private atualizando = false;

  constructor() {
    afterNextRender(() => {
      this.resolverInput();
      this.registrarListener();
    });
  }

  private resolverInput() {
    const host = this.elemento.nativeElement;

    if (host instanceof HTMLInputElement) {
      this.input = host;
      return;
    }

    const inputInterno = host.querySelector('input');

    if (!inputInterno) {
      throw new Error(
        'mascaraCpf precisa estar em um input ou componente que contenha um input.'
      );
    }

    this.input = inputInterno;
  }

  private registrarListener() {
    const listener = () => this.aplicarMascara();

    this.input.addEventListener('input', listener);

    this.destroyRef.onDestroy(() => {
      this.input.removeEventListener('input', listener);
    });
  }

  private aplicarMascara() {
    if (this.atualizando) return;

    const valorVisual = this.input.value;

    const apenasNumeros = valorVisual
      .replace(/\D/g, '')
      .slice(0, 11);

    const valorFormatado = this.formatarCpf(apenasNumeros);

    this.atualizando = true;

    // Atualiza visual

    this.input.value = valorFormatado;

    // Atualiza FormControl com valor limpo

    if (this.ngControl?.control) {
      this.ngControl.control.setValue(apenasNumeros, {
        emitEvent: false
      });
    }

    this.atualizando = false;
  }

  private formatarCpf(valor: string): string {
    if (valor.length <= 3) return valor;

    if (valor.length <= 6)
      return `${valor.slice(0, 3)}.${valor.slice(3)}`;

    if (valor.length <= 9)
      return `${valor.slice(0, 3)}.${valor.slice(3, 6)}.${valor.slice(6)}`;

    return `${valor.slice(0, 3)}.${valor.slice(3, 6)}.${valor.slice(6, 9)}-${valor.slice(9)}`;
  }
}
