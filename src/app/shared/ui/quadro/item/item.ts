import { Component, computed, input } from '@angular/core';

import { Icone } from '../../icone/icone';
import { NomeIcone } from '../../icone/registro.icones';

@Component({
  selector: 'item',
  imports: [Icone],
  templateUrl: './item.html',
  styleUrl: './item.scss',
})
export class Item {
  icone = input<NomeIcone>();
  estado = input<'normal'| 'sucesso'| 'alerta'| 'erro'>('normal');
  rotulo = input.required<string>();
  texto = input<string>();

  cor = computed(() => {
    switch (this.estado()) {
      case 'normal':
        return 'var(--cor-texto-mutado)';
      case 'sucesso':
        return 'var(--cor-sucesso)';
      case 'alerta':
        return 'var(--cor-alerta)';
      case 'erro':
        return 'var(--cor-erro)';
      default:
        return 'var(--cor-texto-mutado)';
    }
  });
}
