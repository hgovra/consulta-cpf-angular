import { FormControl } from '@angular/forms';
import { describe, expect, it } from 'vitest';

import { validarCpf } from './cpf';

describe('validarCpf', () => {

  const validador = validarCpf();

  it('deve aceitar um CPF válido', () => {
    const control = new FormControl('52998224725');

    const resultado = validador(control);

    expect(resultado).toBeNull();
  });

  it('deve aceitar CPF válido com máscara', () => {
    const control = new FormControl('529.982.247-25');

    const resultado = validador(control);

    expect(resultado).toBeNull();
  });

  it('deve retornar erro para CPF com tamanho inválido', () => {
    const control = new FormControl('123');

    const resultado = validador(control);

    expect(resultado).toEqual({ cpfInvalido: true });
  });

  it('deve retornar erro para CPF com todos os dígitos iguais', () => {
    const control = new FormControl('11111111111');

    const resultado = validador(control);

    expect(resultado).toEqual({ cpfInvalido: true });
  });

  it('deve retornar erro para CPF com dígitos verificadores inválidos', () => {
    const control = new FormControl('52998224724');

    const resultado = validador(control);

    expect(resultado).toEqual({ cpfInvalido: true });
  });

  it('não deve validar quando o campo estiver vazio', () => {
    const control = new FormControl('');

    const resultado = validador(control);

    expect(resultado).toBeNull();
  });
});
