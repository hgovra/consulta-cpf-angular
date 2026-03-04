import { Pipe, PipeTransform } from '@angular/core';

import { NomeIcone } from '../ui/icone/registro.icones';

@Pipe({
  name: 'iconeStatusCpf',
})
export class IconeStatusCpfPipe implements PipeTransform {

  transform(status?: 'REGULAR' | 'IRREGULAR'): NomeIcone | null {
    if (!status) return 'atencao';

    switch(status) {
      case 'REGULAR':
        return 'ok';
      case 'IRREGULAR':
        return 'erro';
      default:
        return null;
    }
  }
}
