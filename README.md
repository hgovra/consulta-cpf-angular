# consulta-cpf-angular

![Angular](https://img.shields.io/badge/Angular-Modern-red?logo=angular)
![Signals](https://img.shields.io/badge/Angular-Signals-blue)
![Tests](https://img.shields.io/badge/tests-Vitest-green?logo=vitest)
![Coverage](https://img.shields.io/badge/coverage-90%25+-brightgreen)

Projeto Angular que implementa uma tela de **consulta de CPF**,
com validação, máscara de input, consulta simulada e exibição de dados
de cooperado.

Este projeto foi desenvolvido como teste técnico para um processo seletivo.
O objetivo principal é demonstrar arquitetura Angular moderna e estratégia
de testes unitários com alto ROI.

# Stack

Angular moderno com:

- Signals
- Control Flow
- Reactive Forms

Estilos:

- SASS

Testes:

- Vitest

# Executar o projeto

Clonar o repositório:

    git clone https://github.com/hgovra/consulta-cpf-angular.git

Entrar no diretório:

    cd consulta-cpf-angular

Instalar dependências:

    npm install

Rodar aplicação:

    ng serve

# Navegação

Após rodar o projeto, acesse:

http://localhost:4200

- Preencha o CPF com 11 dígitos.
- Clique em "Consultar por CPF".
- Utilize o CPF 837.825.130-61 para ver os dados do cooperado previamente admitido ou digite qualquer outro CPF válido para simular o cadastro de um novo cooperado.
- O menu lateral abre ao clicar no primeiro ícone (hambúrger) no canto superior esquerdo.

# Executar testes

    ng test

# Estratégia

Os testes priorizam **alto ROI**.\
Testei principalmente **lógica e regras de negócio**, evitando
over-testing de elementos visuais.

### Testado

**CpfService** - simulação de consulta de CPF - retorno de cooperado
existente ou novo - manipulação do signal de cooperado

**validarCpf (ValidatorFn)** - validação completa do algoritmo de CPF -
remoção de caracteres não numéricos - rejeição de CPFs inválidos ou
repetidos

**MascaraCpf Directive** - aplicação da máscara visual - envio de apenas
números ao Angular Forms - limite de 11 dígitos - integração com
ControlValueAccessor

### Não testado

Para evitar baixo ROI, não testei:

- HTML trivial
- CSS
- Angular internals
- componentes puramente visuais (ex: `campo`)
