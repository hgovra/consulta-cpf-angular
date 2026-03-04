import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusCpf',
})
export class StatusCpfPipe implements PipeTransform {

  transform(status?: 'REGULAR' | 'IRREGULAR'): 'normal' | 'sucesso' | 'alerta' | 'erro' {
    if (!status) return 'alerta';

    switch(status) {
      case 'REGULAR':
        return 'sucesso';
      case 'IRREGULAR':
        return 'erro';
      default:
        return 'normal';
    }
  }

}
