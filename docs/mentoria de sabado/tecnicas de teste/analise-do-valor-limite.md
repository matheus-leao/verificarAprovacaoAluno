# Análise do Valor Limite

A análise do valor limite é uma técnica de teste que foca nos pontos mais críticos de um intervalo, ou seja, nos valores próximos aos limites aceitáveis.

## Objetivo

Identificar falhas que frequentemente ocorrem nas bordas de uma regra de negócio ou de validação.

## Como funciona

Em vez de testar apenas valores centrais, o tester verifica:

- valor imediatamente abaixo do limite
- valor no limite mínimo
- valor dentro do intervalo
- valor no limite máximo
- valor imediatamente acima do limite

## Exemplo

Se a regra for: a idade deve estar entre 18 e 65:

- 17 → inválido
- 18 → válido
- 19 → válido
- 64 → válido
- 65 → válido
- 66 → inválido

Esses são os valores mais importantes para testar, porque muitos erros acontecem exatamente nesses pontos.

## Vantagens

- Descobre erros em bordas de intervalos.
- Aumenta a chance de identificar defeitos de validação.
- Complementa bem a partição de equivalência.

## Conclusão

A análise do valor limite ajuda a garantir que as regras de negócio funcionem corretamente nos pontos mais sensíveis, onde os erros costumam aparecer.
