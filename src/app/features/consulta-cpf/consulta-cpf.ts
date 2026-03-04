import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { finalize } from 'rxjs';
import { CpfService } from '../../core/services/cpf';
import { Recipiente } from "../../layout/recipiente/recipiente";
import { MascaraCpf } from '../../shared/directives/mascara-cpf';
import { Botao } from "../../shared/ui/botao/botao";
import { Campo } from '../../shared/ui/campo/campo';
import { Passos } from "../../shared/ui/passos/passos";
import { Item } from "../../shared/ui/quadro/item/item";
import { Quadro } from "../../shared/ui/quadro/quadro";
import { validarCpf } from '../../shared/validators/cpf';

@Component({
  selector: 'app-consulta-cpf',
  imports: [ReactiveFormsModule, Recipiente, Passos, Campo, Botao, MascaraCpf, Quadro, Item],
  templateUrl: './consulta-cpf.html',
  styleUrl: './consulta-cpf.scss',
})
export class ConsultaCpf {
  cpfService = inject(CpfService);

  listaPassos = ['Início', 'Documentos', 'Dados cadastrais', 'Admissão'];
  passoAtual: 1 | 2 | 3 | 4 = 1;

  private fb = new FormBuilder();

  formulario = this.fb.group({
    cpf: ['', [Validators.required, validarCpf()]]
  });

  mensagemCpf = signal<string | null>(null);

  carregando = signal(false);
  erroConsulta = signal<string | null>(null);

  atualizarMensagemCpf() {
    const control = this.formulario.get('cpf');

    if (!control || !control.errors) this.mensagemCpf.set(null);

    if (control?.errors?.['required']) this.mensagemCpf.set('Campo obrigatório');
    if (control?.errors?.['cpfInvalido']) this.mensagemCpf.set('Informe um CPF válido');

  }

  consultarPorCpf() {
    const cpf = this.formulario.value.cpf!;

    this.carregando.set(true);
    this.erroConsulta.set(null);

    this.cpfService
      .buscarCpf(cpf)
      .pipe(
        finalize(() => this.carregando.set(false))
      )
      .subscribe({
        next: cooperado => {
          if (!cooperado) {
            this.erroConsulta.set('CPF nao encontrado');
            return;
          }

          this.cpfService.definirCooperado(cooperado);

          // this.router.navigate(['cooperado']);
        },
        error: () => {
          this.erroConsulta.set('Erro ao consultar CPF');
        }
      });
  }
}
