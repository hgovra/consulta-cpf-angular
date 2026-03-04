# consulta-cpf-angular

![Angular](https://img.shields.io/badge/Angular-Modern-red?logo=angular)
![Signals](https://img.shields.io/badge/Angular-Signals-blue)
![Tests](https://img.shields.io/badge/tests-Vitest-green?logo=vitest)
![Coverage](https://img.shields.io/badge/coverage-90%25+-brightgreen)

Projeto Angular moderno que implementa uma tela de **consulta de CPF**,
com validação, máscara de input, consulta simulada e exibição de dados
de cooperado.

O objetivo principal é demonstrar **boas práticas de arquitetura Angular
moderna** e **testes unitários com alto retorno sobre investimento
(ROI)**.

------------------------------------------------------------------------

# Stack

Angular moderno com:

-   Signals
-   input() signals
-   ControlValueAccessor
-   ValidatorFn
-   Reactive Forms

Testes:

-   Vitest
-   Angular TestBed

------------------------------------------------------------------------

# Estratégia de testes (resumida)

A estratégia prioriza **alto ROI**.\
Testamos principalmente **lógica e regras de negócio**, evitando
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

Para evitar baixo ROI, não testamos:

-   HTML trivial
-   CSS
-   Angular internals
-   componentes puramente visuais (ex: `campo`)

Cobertura aproximada:

-   Statements: \~90--95%
-   Branches: \~85--90%
-   Functions: \~100%

------------------------------------------------------------------------

# Convenções

### Testes

Mensagens dos testes são escritas em **Português**.

Exemplo:

    it('deve retornar cooperado quando o CPF existir')

### Commits

Formato:

    tipo: descrição em português

Exemplo:

    test: adiciona testes unitários para CpfService

------------------------------------------------------------------------

# Executar o projeto

Instalar dependências:

    npm install

Rodar aplicação:

    npm run start

------------------------------------------------------------------------

# Executar testes

    npm run test
