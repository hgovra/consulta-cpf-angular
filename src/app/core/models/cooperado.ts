export interface Cooperado {
    cpf: string;
    nome: string;
    status?: 'REGULAR' | 'IRREGULAR';
    contas?: Conta[];
}

interface Conta {
  tipo: 'CORRENTE' | 'POUPANCA' | 'APLICACAO';
  numero: string;
}
