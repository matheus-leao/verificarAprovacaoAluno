# Cenários de teste: verificação de aprovação do aluno

- **Data da análise:** 2026-09-19
- **Requisito analisado:**
  - Média maior ou igual a 7 e frequência maior ou igual a 75%: Aprovado.
  - Média maior ou igual a 4 e frequência maior ou igual a 75%: Recuperação.
  - Média inferior a 4 ou frequência inferior a 75%: Reprovado.
- **Técnicas escolhidas:** análise do valor limite e partição de equivalência.
- **Suposições:** os limites 4, 7 e 75% são inclusivos; valores imediatamente abaixo ou acima são representados por casas decimais. Os limites físicos das entradas não foram informados.

## Análise do valor limite

### Cenário 1: Média imediatamente abaixo de 4

- **Técnica/cobertura:** valor imediatamente abaixo do limite inferior da média.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 3,99; frequência 75%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Reprovado.
- **Justificativa:** valida que médias abaixo de 4 não permitem aprovação nem recuperação.

### Cenário 2: Média exatamente igual a 4

- **Técnica/cobertura:** valor no limite mínimo da recuperação.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 4; frequência 75%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Recuperação.
- **Justificativa:** valida que o limite 4 é inclusivo e inicia a faixa de recuperação.

### Cenário 3: Média dentro da faixa de recuperação

- **Técnica/cobertura:** valor dentro do intervalo entre os limites 4 e 7.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 5; frequência 75%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Recuperação.
- **Justificativa:** confirma o comportamento esperado dentro da faixa de recuperação.

### Cenário 4: Média imediatamente abaixo de 7

- **Técnica/cobertura:** valor imediatamente abaixo do limite de aprovação.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 6,99; frequência 75%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Recuperação.
- **Justificativa:** valida que a média abaixo de 7, mas igual ou superior a 4, ainda não resulta em aprovação.

### Cenário 5: Média exatamente igual a 7

- **Técnica/cobertura:** valor no limite mínimo da aprovação.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 7; frequência 75%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Aprovado.
- **Justificativa:** valida que o limite 7 é inclusivo.

### Cenário 6: Média imediatamente acima de 7

- **Técnica/cobertura:** valor imediatamente acima do limite de aprovação.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 7,01; frequência 75%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Aprovado.
- **Justificativa:** confirma o comportamento dentro da faixa de aprovação acima do limite.

### Cenário 7: Frequência imediatamente abaixo de 75%

- **Técnica/cobertura:** valor imediatamente abaixo do limite mínimo de frequência.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 9; frequência 74,99%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Reprovado.
- **Justificativa:** valida que frequência inferior a 75% reprova o aluno, mesmo com média suficiente.

### Cenário 8: Frequência exatamente igual a 75%

- **Técnica/cobertura:** valor no limite mínimo de frequência.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 9; frequência 75%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Aprovado.
- **Justificativa:** valida que o limite de frequência 75% é inclusivo.

### Cenário 9: Frequência imediatamente acima de 75%

- **Técnica/cobertura:** valor imediatamente acima do limite mínimo de frequência.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 9; frequência 75,01%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Aprovado.
- **Justificativa:** confirma que frequência acima do limite permite aprovação quando a média é suficiente.

### Cenário 10: Frequência abaixo do limite com média na recuperação

- **Técnica/cobertura:** combinação entre limite de frequência e faixa de recuperação.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 5; frequência 74,99%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Reprovado.
- **Justificativa:** confirma que a frequência mínima é obrigatória também para a recuperação.

## Partição de equivalência

### Partições identificadas

- Média menor que 4: reprovação.
- Média entre 4 e 6,99: recuperação, desde que a frequência seja suficiente.
- Média maior ou igual a 7: aprovação, desde que a frequência seja suficiente.
- Frequência menor que 75%: reprovação, independentemente da média.
- Frequência maior ou igual a 75%: permite o resultado definido pela média.

### Cenário 1: Média abaixo da faixa de recuperação

- **Técnica/cobertura:** partição média < 4.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 3; frequência 80%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Reprovado.
- **Justificativa:** representa a classe de médias inferiores a 4.

### Cenário 2: Média na faixa de recuperação

- **Técnica/cobertura:** partição 4 <= média < 7.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 5; frequência 80%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Recuperação.
- **Justificativa:** representa a classe de médias entre 4 e 7, com frequência suficiente.

### Cenário 3: Média na faixa de aprovação

- **Técnica/cobertura:** partição média >= 7.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 8; frequência 80%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Aprovado.
- **Justificativa:** representa a classe de médias iguais ou superiores a 7.

### Cenário 4: Frequência abaixo do mínimo com média suficiente

- **Técnica/cobertura:** partição frequência < 75%.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 8; frequência 70%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Reprovado.
- **Justificativa:** representa a classe de frequências insuficientes e confirma sua prioridade sobre a média.

### Cenário 5: Frequência suficiente com média de recuperação

- **Técnica/cobertura:** partição frequência >= 75% combinada com 4 <= média < 7.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 5; frequência 75%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Recuperação.
- **Justificativa:** confirma que a frequência suficiente mantém o aluno na classificação determinada pela média.

### Cenário 6: Frequência suficiente com média de aprovação

- **Técnica/cobertura:** partição frequência >= 75% combinada com média >= 7.
- **Pré-condições:** função disponível para consulta.
- **Entrada:** média 8; frequência 75%.
- **Ação:** verificar a aprovação do aluno.
- **Resultado esperado:** Aprovado.
- **Justificativa:** confirma que a frequência suficiente, junto da média adequada, resulta em aprovação.

## Pontos não especificados

Valores nulos, vazios, texto, média fora de uma eventual escala 0-10 e frequência fora de 0-100% não foram definidos no requisito. Para essas entradas, o resultado esperado é **a definir pelo responsável pelo requisito**.
