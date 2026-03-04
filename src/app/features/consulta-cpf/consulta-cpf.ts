import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Recipiente } from "../../layout/recipiente/recipiente";
import { MascaraCpf } from '../../shared/directives/mascara-cpf';
import { Botao } from "../../shared/ui/botao/botao";
import { Campo } from '../../shared/ui/campo/campo';
import { Passos } from "../../shared/ui/passos/passos";
import { validarCpf } from '../../shared/validators/cpf';

@Component({
  selector: 'app-consulta-cpf',
  imports: [ReactiveFormsModule, Recipiente, Passos, Campo, Botao, MascaraCpf],
  templateUrl: './consulta-cpf.html',
  styleUrl: './consulta-cpf.scss',
})
export class ConsultaCpf {
  listaPassos = ['Início', 'Documentos', 'Dados cadastrais', 'Admissão'];
  passoAtual: 1 | 2 | 3 | 4 = 1;

  private fb = new FormBuilder();

  formulario = this.fb.group({
    cpf: ['', [Validators.required, validarCpf()]]
  });

  mensagemCpf = signal<string | null>(null);

  atualizarMensagemCpf() {
    const control = this.formulario.get('cpf');

    if (!control || !control.errors) this.mensagemCpf.set(null);

    if (control?.errors?.['required']) this.mensagemCpf.set('Campo obrigatório');
    if (control?.errors?.['cpfInvalido']) this.mensagemCpf.set('Informe um CPF válido');

  }

  consultarPorCpf() {

  }
}
