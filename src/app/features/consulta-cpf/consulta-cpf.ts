import { Component, computed } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Recipiente } from "../../layout/recipiente/recipiente";
import { Botao } from "../../shared/ui/botao/botao";
import { Campo } from '../../shared/ui/campo/campo';
import { Passos } from "../../shared/ui/passos/passos";

@Component({
  selector: 'app-consulta-cpf',
  imports: [ReactiveFormsModule, Recipiente, Passos, Campo, Botao],
  templateUrl: './consulta-cpf.html',
  styleUrl: './consulta-cpf.scss',
})
export class ConsultaCpf {
  listaPassos = ['Início', 'Documentos', 'Dados cadastrais', 'Admissão'];
  passoAtual: 1 | 2 | 3 | 4 = 1;

  private fb = new FormBuilder();

  formulario = this.fb.group({
    cpf: ['', [Validators.required]]
  });

  mensagemCpf = computed(() => {
    const control = this.formulario.get('cpf');

    if (control?.touched) {
      if (!control || !control.errors) return null;

      if (control.errors['required']) return 'Campo obrigatório';
      if (control.errors['cpfInvalido']) return 'Informe um CPF válido';

      return 'Campo inválido';
    }

    return null;
  });
}
