---
name: avaliar-cenarios-teste
description: "Use quando avaliar um requisito, regra de negócio ou problema para propor cenários de teste com análise do valor limite, partição de equivalência ou Test Charter. Sempre escolha a técnica com o usuário, revise os cenários e ofereça exportação aprovada em Markdown ou XLSX."
---

# Avaliar Cenários de Teste

Avalie um requisito, regra de negócio ou problema e produza cenários de teste claros, rastreáveis e prontos para futura automação.

## Fluxo obrigatório

Sempre crie e mantenha uma to-do list visível durante a execução. Use estes passos:

1. **Escolher a técnica**: antes de analisar o requisito, pergunte qual técnica será usada:
   - análise do valor limite;
   - partição de equivalência;
   - Test Charter.
2. **Entender o alvo**: peça o requisito, regra de negócio ou problema e, quando necessário, pergunte sobre entradas, limites, estados, pré-condições e resultado esperado. Não invente regras ausentes; marque suposições.
3. **Aplicar a técnica**: siga somente a técnica escolhida e as orientações da seção correspondente abaixo.
4. **Gerar os cenários**: apresente uma lista numerada, com dados de entrada, pré-condições, ação, resultado esperado e justificativa da cobertura. Para Test Charter, apresente a missão e os caminhos de exploração em vez de fingir que os passos são fixos.
5. **Revisar com o usuário**: após cada execução, pergunte se ele quer remover, alterar ou adicionar cenários. Se houver mudanças, atualize a lista e mostre a versão revisada.
6. **Aprovar a lista**: pergunte explicitamente se os cenários estão aprovados para exportação. Não exporte antes de uma confirmação afirmativa.
7. **Oferecer exportação**: depois da aprovação, ofereça as opções `Markdown (.md)` e `Excel (.xlsx)`. Gere somente o formato escolhido.
8. **Confirmar entrega**: informe o caminho do arquivo criado e mantenha os cenários no formato que possa ser automatizado depois.

Se o usuário não escolher uma técnica, interrompa a análise e repita a pergunta com as três opções. Se ele escolher mais de uma, execute uma por vez, começando pela técnica que ele indicar, e peça revisão ao fim de cada execução.

## Formato dos cenários

Para análise do valor limite e partição de equivalência, use esta estrutura:

```text
Cenário N: título curto
- Técnica/cobertura: limite ou partição representada
- Pré-condições: estado necessário do sistema
- Entrada: valores e dados usados
- Ação: operação que será executada
- Resultado esperado: comportamento verificável
- Justificativa: por que este cenário é necessário
```

O resultado esperado deve ser observável e específico. Quando a regra não definir o comportamento, escreva `a definir pelo responsável pelo requisito` e faça uma pergunta antes de considerar o cenário aprovado.

Para Test Charter, use esta estrutura:

```text
Charter N: título curto
- Missão: pergunta ou área investigada
- Alvo: funcionalidade, fluxo ou dados explorados
- Pré-condições: estado inicial
- Ideias de exploração: caminhos, variações e combinações a investigar
- Oráculos/indicadores de falha: evidências de comportamento incorreto
- Riscos e perguntas abertas: pontos que podem exigir novos testes
- Critério de encerramento: quando a exploração pode terminar
```

## Aplicação das técnicas

### Análise do valor limite

Use quando houver intervalos, limites mínimos ou máximos, quantidades ou regras de validação com bordas. Para cada limite identificado, proponha, quando aplicável:

- valor imediatamente abaixo;
- valor no limite mínimo ou máximo;
- um valor dentro do intervalo;
- valor imediatamente acima.

Inclua os valores válidos e inválidos conforme a regra. Considere limites de cada entrada relevante separadamente e deixe claro quando combinações entre limites forem importantes. Não presuma que um limite é inclusivo: confirme a notação da regra ou registre a dúvida.

### Partição de equivalência

Use quando entradas puderem ser agrupadas em classes com comportamento esperado semelhante. Para cada entrada:

1. identifique partições válidas e inválidas;
2. descreva a regra que define cada partição;
3. escolha ao menos um representante de cada partição;
4. registre o comportamento esperado para esse representante.

Evite listar muitos valores da mesma classe sem uma justificativa. Separe classes que tenham comportamentos esperados diferentes, incluindo vazio, nulo, formato inválido ou tipo inválido quando forem relevantes ao requisito.

### Test Charter

Use para teste exploratório orientado por objetivo, especialmente quando o sistema for pouco conhecido, complexo ou quando os riscos ainda não estiverem totalmente especificados. Defina uma missão investigável, delimite o alvo, liste ideias de exploração e explicite os oráculos que indicarão falhas. Os caminhos podem evoluir durante a execução; registre descobertas e transforme riscos relevantes em novos cenários quando apropriado.

## Aprovação e exportação

Depois da revisão, faça uma pergunta de aprovação com três opções: revisar novamente, aprovar sem exportar ou aprovar e exportar. Se aprovado para exportação, pergunte o formato.

### Markdown

Crie um arquivo `.md` contendo o requisito analisado, técnica escolhida, suposições, data da análise e a lista final aprovada. Preserve os campos do formato de cenário ou charter para facilitar a conversão em testes automatizados.

### XLSX

Crie um arquivo `.xlsx` com uma linha por cenário. Para cenários tradicionais, use as colunas `ID`, `Título`, `Técnica`, `Cobertura`, `Pré-condições`, `Entrada`, `Ação`, `Resultado esperado`, `Justificativa`. Para Test Charter, use `ID`, `Título`, `Técnica`, `Missão`, `Alvo`, `Pré-condições`, `Ideias de exploração`, `Oráculos/indicadores de falha`, `Riscos e perguntas abertas`, `Critério de encerramento`. Se houver metadados gerais, coloque-os em uma seção ou planilha separada.

Não declare um arquivo como criado sem efetivamente gerar o conteúdo e validar que ele pode ser aberto. Não altere o requisito ou os cenários aprovados durante a exportação.
