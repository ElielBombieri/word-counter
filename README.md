# PraticandoNode

Projeto simples em Node.js que lê um arquivo de texto, identifica palavras duplicadas por parágrafo e grava o resultado em um novo arquivo.

## O que ele faz

- Lê o arquivo `arquivos/texto-kanban.txt`
- Conta palavras com 3 ou mais caracteres em cada parágrafo
- Detecta palavras repetidas dentro de cada parágrafo
- Gera `arquivos/resultado.txt` com as palavras duplicadas encontradas

## Estrutura do projeto

- `src/index.js` - lógica principal de contagem de palavras e extração de parágrafos
- `src/cli.js` - ponto de entrada que lê o arquivo, processa o texto e salva o resultado
- `src/helpers.js` - monta o conteúdo de saída para o arquivo de resultado
- `src/erros/funcoesErros.js` - tratamento básico de erros de arquivo
- `arquivos/` - diretório com os arquivos de texto de entrada e saída

## Como executar

1. Instale as dependências (se necessário):

```bash
npm install
```

2. Execute o script:

```bash
node src/cli.js
```

3. Verifique o arquivo de saída:

- `arquivos/resultado.txt`

## Observações

- O código usa `fs` do Node.js para leitura e escrita de arquivos.
- O arquivo de entrada padrão é `arquivos/texto-kanban.txt`.
- O arquivo de saída é gerado em `arquivos/resultado.txt`.

## Licença

ISC
