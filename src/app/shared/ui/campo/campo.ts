import {
  Component,
  input
} from '@angular/core';

@Component({
  selector: 'campo',
  templateUrl: './campo.html',
  styleUrl: './campo.scss'
})
export class Campo {

  rotulo = input.required<string>();
  placeholder = input<string>();
  tipo = input<string>('text');
  mensagemErro = input<string | null>(null);
}
