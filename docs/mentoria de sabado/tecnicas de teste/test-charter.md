# Test Charter

O Test Charter é uma técnica de teste exploratório usada para orientar a execução dos testes com foco em objetivos específicos, riscos e aprendizado sobre o sistema.

## Objetivo

A ideia principal é definir uma missão de teste, ou seja, uma pergunta ou área que será investigada, e então explorar o sistema para descobrir defeitos, comportamentos inesperados e pontos de risco.

## Como funciona

O tester cria um “charter” com informações como:

- o que será testado
- qual é o objetivo da investigação
- quais áreas do sistema serão exploradas
- o que pode indicar falha ou comportamento errado

Exemplo de charter:

- “Verificar se o sistema aceita notas fora do intervalo permitido.”
- “Explorar o cadastro de aluno com dados incompletos e inválidos.”

## Vantagens

- Ajuda a testar de forma mais estratégica.
- Incentiva a descoberta de defeitos não previstos.
- É útil em sistemas complexos ou pouco conhecidos.
- Permite adaptar os testes conforme novas informações aparecem.

## Diferença em relação ao teste tradicional

No teste tradicional, os passos costumam ser previamente definidos. Já no Test Charter, a exploração é mais livre e orientada por objetivos, permitindo que o tester acompanhe o comportamento real do sistema e descubra problemas relevantes.

## Exemplo prático

Se o sistema calcula a média final de um aluno, um charter pode ser:

- “Verificar se a aplicação trata corretamente notas fora do intervalo de 0 a 10.”

Nesse caso, o tester pode explorar valores como:

- -1
- 0
- 5
- 10
- 11
- valores vazios ou inválidos

## Conclusão

O Test Charter é uma técnica útil para testes exploratórios, pois organiza a investigação e ajuda a encontrar defeitos importantes com foco em objetivos claros.
