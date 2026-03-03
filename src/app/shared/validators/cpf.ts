import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validarCpf(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const valor = (control.value ?? '').toString();

    const apenasNumeros = valor.replace(/\D/g, '');

    if (!apenasNumeros) return null;

    if (apenasNumeros.length !== 11) {
      return { cpfInvalido: true };
    }

    if (/^(\d)\1+$/.test(apenasNumeros)) {
      return { cpfInvalido: true };
    }

    const digito1 = calcularDigito(apenasNumeros, 10);
    const digito2 = calcularDigito(apenasNumeros, 11);

    if (
      digito1 !== Number(apenasNumeros[9]) ||
      digito2 !== Number(apenasNumeros[10])
    ) {
      return { cpfInvalido: true };
    }

    return null;
  };
}

function calcularDigito(cpf: string, pesoInicial: number): number {
  let soma = 0;

  for (let i = 0; i < pesoInicial - 1; i++) {
    soma += Number(cpf[i]) * (pesoInicial - i);
  }

  const resto = (soma * 10) % 11;

  return resto === 10 ? 0 : resto;
}
