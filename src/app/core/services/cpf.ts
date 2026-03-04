import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Cooperado } from '../models/cooperado';

@Injectable({ providedIn: 'root' })
export class CpfService {

  private _cooperado = signal<Cooperado | null>(null);
  cooperado = this._cooperado.asReadonly();

  private mockDatabase: Cooperado[] = [
    {
      cpf: '83782513061',
      nome: 'Mariane de Sousa Oliveira',
      status: 'Regular'
    }
  ];

  buscarCpf(cpf: string): Observable<Cooperado | null> {
    const resultado = this.mockDatabase.find(c => c.cpf === cpf) ?? null;

    return of(resultado).pipe(
      delay(1000)
    );
  }

  definirCooperado(cooperado: Cooperado | null) {
    this._cooperado.set(cooperado);
  }

  clear() {
    this._cooperado.set(null);
  }
}
