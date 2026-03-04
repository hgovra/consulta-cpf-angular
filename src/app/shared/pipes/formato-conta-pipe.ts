import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoConta'
})
export class FormatoContaPipe implements PipeTransform {

  transform(conta: string | null | undefined): string {

    if (!conta) return '';

    const numeros = conta.replace(/\D/g, '');

    if (numeros.length !== 7) return conta;

    const base = numeros.slice(0, 6);
    const digito = numeros.slice(6);

    return `${base}-${digito}`;
  }

}
