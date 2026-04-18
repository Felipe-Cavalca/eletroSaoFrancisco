# Instrucoes para IAs e agentes

Este arquivo orienta agentes de IA que trabalharem neste repositorio.

## Idioma

- Responda sempre em portugues do Brasil.
- Seja direto e objetivo.
- Use portugues do Brasil em commits, PRs, comentarios e resumos.

## Ambiente de trabalho

- Faca alteracoes, instalacoes, testes, lint, build e demais verificacoes dentro do devcontainer.
- O devcontainer fica em `.devcontainer/` e expoe a aplicacao na porta `8080`.
- Se o devcontainer nao estiver disponivel, avise antes de executar comandos equivalentes fora dele.
- Nao instale dependencias na maquina local sem autorizacao explicita.
- Se precisar instalar algo dentro do devcontainer para concluir a tarefa, avise e execute dentro dele.

## Escopo das alteracoes

- Mantenha mudancas pequenas e focadas no pedido.
- Preserve o padrao existente do projeto.
- Nao faca refatoracoes nao solicitadas.
- Nao altere arquivos sensiveis, como `.env`, credenciais, secrets, certificados ou configuracoes de producao, sem pedido explicito.
- Nao reverta alteracoes existentes do usuario sem autorizacao explicita.

## Testes e verificacoes

- Quando alterar codigo, rode os testes ou verificacoes aplicaveis dentro do devcontainer.
- Para este projeto, o teste automatizado disponivel e:

```bash
node --test scripts/scroll-progress.test.mjs
```

- Para validar o site localmente, use o servidor do devcontainer e acesse:

```text
http://localhost:8080
```

- Se algum teste ou verificacao nao puder ser executado, registre objetivamente o motivo.

## Git

- Nunca faca commit, push ou abra PR sem autorizacao explicita.
- Antes de qualquer commit autorizado, confirme o escopo e rode todos os testes aplicaveis.
- Use Conventional Commits em portugues do Brasil.

## Frontend

- Preserve o design e a estrutura existentes.
- Ao alterar interface, valide desktop e mobile quando possivel.
- Evite mudancas visuais amplas fora do escopo.
