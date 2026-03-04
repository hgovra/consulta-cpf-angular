import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { CpfService } from './cpf';

describe('CpfService', () => {
  let service: CpfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpfService);
  });

  it('deve ser criado corretamente', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar cooperado quando o CPF existir no banco de dados', async () => {
    vi.useFakeTimers();

    const promise = firstValueFrom(service.buscarCpf('83782513061'));

    vi.advanceTimersByTime(1000);

    const result = await promise;

    expect(result).toBeTruthy();
    expect(result?.cpf).toBe('83782513061');
    expect(result?.nome).toBe('Mariane de Sousa Oliveira');
    expect(result?.contas?.length).toBe(2);

    vi.useRealTimers();
  });

  it('deve retornar o mock de novo cooperado quando o CPF não for encontrado', async () => {
    vi.useFakeTimers();

    const promise = firstValueFrom(service.buscarCpf('00000000000'));

    vi.advanceTimersByTime(1000);

    const result = await promise;

    expect(result).toBeTruthy();
    expect(result?.cpf).toBe('65470783022');
    expect(result?.nome).toBe('João Silva Matos');

    vi.useRealTimers();
  });

  it('deve atualizar o signal de cooperado ao chamar definirCooperado', () => {
    const cooperado = {
      cpf: '123',
      nome: 'Teste'
    };

    service.definirCooperado(cooperado as any);

    expect(service.cooperado()).toEqual(cooperado);
  });

  it('deve limpar o signal de cooperado ao chamar limparCooperado', () => {
    const cooperado = {
      cpf: '123',
      nome: 'Teste'
    };

    service.definirCooperado(cooperado as any);

    service.limparCooperado();

    expect(service.cooperado()).toBeNull();
  });
});
