import {
  Component,
  input,
  Optional,
  Self,
  signal
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl
} from '@angular/forms';

@Component({
  selector: 'campo',
  templateUrl: './campo.html',
  styleUrl: './campo.scss',
})
export class Campo implements ControlValueAccessor {
  rotulo = input.required<string>();
  placeholder = input<string>();
  tipo = input<string>('text');
  mensagemErro = input<string | null>(null);

  constructor(
    // @Self() garante que injetamos o NgControl deste componente
    // @Optional() evita erros se o componente não for usado em um formulário
    @Self() @Optional() public ngControl: NgControl
  ) {
    if (this.ngControl) {
      // Esta é a chave: atribuir a si mesmo como o valueAccessor
      this.ngControl.valueAccessor = this;
    }
  }

  valorInterno = signal<string>('');
  desabilitado = signal(false);

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(valor: string) {
    // this.valorInterno.set(valor ?? '');
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
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
