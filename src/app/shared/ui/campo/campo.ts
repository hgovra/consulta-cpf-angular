import {
  Component,
  forwardRef,
  input,
  signal
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'campo',
  templateUrl: './campo.html',
  styleUrl: './campo.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Campo),
      multi: true
    }
  ]
})
export class Campo implements ControlValueAccessor {
  rotulo = input.required<string>();
  placeholder = input<string>();
  tipo = input<string>('text');
  mensagemErro = input<string | null>(null);

  valorInterno = signal<string>('');
  desabilitado = signal(false);

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(valor: string) {}

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.desabilitado.set(disabled);
  }

  atualizarValor(evento: Event) {
    const inputElemento = evento.target as HTMLInputElement;
    const novoValor = inputElemento.value;

    this.valorInterno.set(novoValor);
    this.onChange(novoValor);
  }

  marcarComoTocado() {
    this.onTouched();
  }
}
