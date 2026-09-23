# Aula 5: testes automatizados e refatoração

## 1. Preparação

### 1.1 Retome as aulas anteriores

Se você não acompanhou as aulas anteriores, faça o passo a passo antes de continuar.

### 1.2 Abra o projeto

1. Baixe o projeto em formato `.zip`.
2. Descompacte o arquivo.
3. Abra a pasta do projeto no VS Code.
4. No terminal, confirme que você está na pasta que contém o arquivo `package.json`.
5. Instale as dependências, se necessário:

```bash
npm install
```

## 2. Revise a regra de negócio

A função `verificarAprovacaoAluno(media, frequencia)` segue estas regras:

| Condição | Resultado |
| --- | --- |
| Frequência menor que 75% | `Reprovado` |
| Frequência maior ou igual a 75% e média menor que 4 | `Reprovado` |
| Frequência maior ou igual a 75% e média de 4 até 6,99 | `Recuperação` |
| Frequência maior ou igual a 75% e média maior ou igual a 7 | `Aprovado` |

A frequência é verificada primeiro. Por isso, uma média suficiente não aprova um aluno que tenha frequência menor que 75%.

## 3. Execute os testes

Execute o Mocha na raiz do projeto:

```bash
npx mocha
```

O resultado esperado é:

```text
6 passing
```

O comando `npx mocha` executa os testes da pasta `test`. Já o comando `npm test` usa o script definido no `package.json` e ainda não está configurado para executar o Mocha nesta aula.

## 4. Analise os cenários de teste

Os cenários abaixo verificam os valores-limite da regra e já estão implementados no arquivo `test/verificarAprovacaoAluno.test.js`:

| Média | Frequência | Resultado esperado | O que o cenário verifica |
| ---: | ---: | --- | --- |
| 3,99 | 75% | `Reprovado` | Média imediatamente abaixo de 4 |
| 4 | 75% | `Recuperação` | Limite mínimo da recuperação |
| 7 | 75% | `Aprovado` | Limite mínimo da aprovação |
| 7 | 74% | `Reprovado` | Frequência imediatamente abaixo de 75% |
| 6 | 74% | `Reprovado` | Prioridade da regra de frequência |
| 9 | 90% | `Aprovado` | Caso válido dentro da aprovação |

Ao criar um novo cenário, informe sempre:

- valores de entrada;
- resultado esperado;
- regra ou limite que está sendo verificado.

Exemplo de teste no padrão **AAA**:

```javascript
it('CT03: média 4 e frequência 75% resultam em recuperação', function () {
	// Arrange: preparar
	const resultadoEsperado = 'Recuperação'

	// Act: executar
	const resultadoEncontrado = verificarAprovacaoAluno(4, 75)

	// Assert: verificar
	assert.equal(resultadoEncontrado, resultadoEsperado)
})
```

## 5. Refatore com segurança

Refatorar significa reescrever uma função ou um trecho de código para melhorar sua qualidade interna, sem alterar o comportamento observado pelo cliente.

Durante a refatoração:

1. Execute os testes antes da alteração e confirme que estão passando.
2. Faça uma pequena melhoria no código, como reduzir aninhamentos ou tornar as condições mais claras.
3. Execute `npx mocha` novamente.
4. Compare os resultados com a execução anterior.

Os testes automatizados ajudam a garantir que a refatoração não alterou as regras de aprovação, recuperação e reprovação.

## 6. Checklist da aula

- [ ] O projeto foi aberto na raiz correta.
- [ ] As dependências foram instaladas.
- [ ] Os seis testes foram executados com sucesso.
- [ ] Os valores-limite foram identificados.
- [ ] A refatoração manteve todos os testes passando.
