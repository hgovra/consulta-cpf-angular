import { Injectable, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import { Cooperado } from '../models/cooperado';

@Injectable({ providedIn: 'root' })
export class CpfService {

  private _cooperado = signal<Cooperado | null>(null);
  cooperado = this._cooperado.asReadonly();

  // Simulando dados da API

  private mockBancoDados: Cooperado[] = [
    {
      cpf: '83782513061',
      nome: 'Mariane de Sousa Oliveira',
      status: 'REGULAR',
      contas: [
        {
          tipo: 'CORRENTE',
          numero: '0235451'
        },
        {
          tipo: 'APLICACAO',
          numero: '3361290'
        }
      ]
    },
  ];

  private mockNovoCooperado: Cooperado = {
    cpf: '65470783022',
    nome: 'João Silva Matos',
  };

  buscarCpf(cpf: string): Observable<Cooperado | null> {
    const resultado = this.mockBancoDados.find(c => c.cpf === cpf) ?? this.mockNovoCooperado;

    return of(resultado).pipe(
      delay(1000)
    );
  }

  definirCooperado(cooperado: Cooperado | null) {
    this._cooperado.set(cooperado);
  }

  limparCooperado() {
    this._cooperado.set(null);
  }
}
