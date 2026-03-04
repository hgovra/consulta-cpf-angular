import {
  Directive,
  ElementRef,
  forwardRef,
  inject
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Directive({
  selector: '[mascaraCpf]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MascaraCpf),
      multi: true
    }
  ],
  host: {
    '(input)': 'aoDigitar()',
    '(blur)': 'aoSair()'
  }
})
export class MascaraCpf implements ControlValueAccessor {

  private elemento = inject(ElementRef<HTMLInputElement>);

  private onChange: (valor: string) => void = () => {};
  private onTouched: () => void = () => {};

  private desabilitado = false;

  private get input(): HTMLInputElement {
    const host = this.elemento.nativeElement;

    if (host instanceof HTMLInputElement) {
      return host;
    }

    const inputInterno = host.querySelector('input');

    if (!inputInterno) {
      throw new Error(
        'A máscara de CPF precisa estar em um input ou componente que contenha um input.'
      );
    }

    return inputInterno;
  }

  writeValue(valor: string | null): void {
    const numeros = (valor ?? '')
      .replace(/\D/g, '')
      .slice(0, 11);

    this.input.value = this.formatarCpf(numeros);
  }

  registerOnChange(fn: (valor: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.desabilitado = disabled;
    this.input.disabled = disabled;
  }

  aoDigitar() {
    if (this.desabilitado) return;

    const valorVisual = this.input.value;

    const apenasNumeros = valorVisual
      .replace(/\D/g, '')
      .slice(0, 11);

    const valorFormatado = this.formatarCpf(apenasNumeros);

    this.input.value = valorFormatado;

    this.onChange(apenasNumeros);
  }

  aoSair() {
    this.onTouched();
  }

  private formatarCpf(valor: string) {
    if (valor.length <= 3) return valor;

    if (valor.length <= 6)
      return `${valor.slice(0, 3)}.${valor.slice(3)}`;

    if (valor.length <= 9)
      return `${valor.slice(0, 3)}.${valor.slice(3, 6)}.${valor.slice(6)}`;

    return `${valor.slice(0, 3)}.${valor.slice(3, 6)}.${valor.slice(6, 9)}-${valor.slice(9)}`;
  }
}
