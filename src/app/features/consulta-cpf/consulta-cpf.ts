import { Component } from '@angular/core';
import { Recipiente } from "../../layout/recipiente/recipiente";
import { Passos } from "../../shared/ui/passos/passos";

@Component({
  selector: 'app-consulta-cpf',
  imports: [Recipiente, Passos],
  templateUrl: './consulta-cpf.html',
  styleUrl: './consulta-cpf.scss',
})
export class ConsultaCpf {
  listaPassos = ['Início', 'Documentos', 'Dados cadastrais', 'Admissão'];
  passoAtual: 1 | 2 | 3 | 4 = 1;
}
