# Partição de Equivalência

A partição de equivalência é uma técnica de teste de software que divide as entradas do sistema em grupos, chamados de partições, em que o comportamento esperado é semelhante.

## Objetivo

Reduzir a quantidade de testes sem perder a qualidade da validação. Em vez de testar todos os valores possíveis, o tester seleciona exemplos representativos de cada classe de dados.

## Como funciona

1. Identificar a entrada do sistema.
2. Dividir os valores em classes válidas e inválidas.
3. Escolher pelo menos um exemplo de cada partição.
4. Verificar se o comportamento esperado é atendido.

## Exemplo

Se um sistema aceita notas de 0 a 10:

- Partição válida: 0, 5, 10
- Partição inválida: -1, 11

Esses valores representam grupos com comportamento semelhante.

## Vantagens

- Diminui a quantidade de casos de teste.
- Facilita a análise das entradas.
- Ajuda a cobrir diferentes cenários de forma eficiente.

## Conclusão

A partição de equivalência busca testar classes de entradas ao invés de valores isolados, tornando os testes mais práticos e eficientes.
