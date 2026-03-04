import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoTipoConta',
})
export class FormatoTipoContaPipe implements PipeTransform {

  transform(tipo: 'CORRENTE' | 'POUPANCA' | 'APLICACAO'): string {
    switch (tipo) {
      case 'CORRENTE':
        return 'Conta corrente';
      case 'POUPANCA':
        return 'Conta poupança';
      case 'APLICACAO':
        return 'Conta aplicação';
      default:
        return 'Conta Corrente';
    }
  }

}
