# Passo a passo da aula 4

## 1. Preparar o projeto

1. Abra o VS Code.
2. Crie uma pasta para o projeto.
3. Abra essa pasta no VS Code.
4. Acesse **Terminal > Novo Terminal**.
5. Verifique o shell utilizado no terminal. Não use o PowerShell; altere para **Bash**.

## 2. Inicializar o projeto Node.js

No terminal, execute:

```bash
npm init -y
```

### O que significa cada parte do comando?

- `npm`: gerenciador de pacotes do Node.js. Consulte a [documentação do npm](https://www.npmjs.com/) e do [Node.js](https://nodejs.org/pt-br).
- `init`: inicializa um novo projeto.
- `-y`: aceita as configurações padrão durante a inicialização.

Depois, abra o arquivo `package.json` e adicione ou altere a propriedade `type`:

```json
{
  "type": "module"
}
```

## 3. Criar a estrutura do projeto

Crie as seguintes pastas:

```text
source/  ou  src/  # código-fonte
test/                # testes do código-fonte
```

Dentro de `source` (ou `src`), crie o arquivo:

```text
verificarAprovacaoAluno.js
```

## 4. Criar a função

No arquivo `verificarAprovacaoAluno.js`, crie a função que será testada.

Conceitos utilizados:

- `function`: define uma função.
- Nome da função: identifica a função.
- `()`: representa os parâmetros da função.
- `{}`: delimita o conteúdo da função.
- `if`: executa um trecho de código se uma condição for verdadeira.
- `>=`: operador "maior ou igual a".
- `&&`: operador lógico "e".
- `||`: operador lógico "ou".

Para consultar outros operadores, veja a [documentação sobre comparações em JavaScript](https://www.w3schools.com/js/js_comparisons.asp).

## 5. Instalar o Mocha

O [Mocha](https://mochajs.org/) será utilizado para criar e executar os testes. Instale-o como dependência de desenvolvimento:

```bash
npm i -D mocha
```

No comando:

- `npm`: gerenciador de pacotes do Node.js.
- `i` ou `install`: instala uma biblioteca.
- `-D`: adiciona a biblioteca como dependência de desenvolvimento.
- `mocha`: nome da biblioteca/framework de testes.

## 6. Criar o arquivo de teste

Na pasta `test`, crie um arquivo com o mesmo nome do arquivo testado e acrescente `.test.js`:

```text
verificarAprovacaoAluno.js       # arquivo com a função
verificarAprovacaoAluno.test.js  # arquivo de teste
```

No arquivo de teste:

1. Crie uma suíte de testes utilizando `describe`.
2. Dentro do `describe`, adicione os casos de teste utilizando `it`.
3. Crie as variáveis `resultadoEsperado` e `resultadoEncontrado`.
4. Importe o `assert` para realizar as asserções:

	```js
	import assert from 'node:assert';
	```

5. Utilize `assert.equal` para comparar o resultado esperado com o resultado encontrado.

## 7. Exportar e importar a função

Sempre que for testar uma função criada por você:

1. Garanta que ela foi exportada, adicionando `export` antes de `function`:

	```js
	export function verificarAprovacaoAluno() {
	  // implementação da função
	}
	```

2. Importe a função no arquivo de teste:

	```js
	import { verificarAprovacaoAluno } from '../source/verificarAprovacaoAluno.js';
	```

No exemplo:

- `import`: comando para importar algo.
- `{ verificarAprovacaoAluno }`: nome da função que será importada.
- `from`: indica a origem do que será importado.
- `'../source/verificarAprovacaoAluno.js'`: caminho do arquivo que define a função.

## 8. Executar os testes

No terminal, execute:

```bash
npx mocha
```

