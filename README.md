# Eletronica Sao Francisco

Site institucional estatico da Eletronica Sao Francisco, assistencia tecnica multimarcas em Guaratingueta, SP.

O projeto nao usa etapa de build nem gerenciador de pacotes. A pagina principal esta em `index.html` e carrega CSS, JavaScript e imagens locais a partir da pasta `assets/`.

## Visao geral

- Landing page responsiva em HTML, CSS e JavaScript puro.
- Conteudo em portugues do Brasil.
- Secoes para atendimento, processo, marcas e contato.
- Dados de servicos e marcas centralizados em `assets/js/config/site-data.js`.
- Imagens responsivas com versoes JPG e WebP.
- Teste automatizado para os calculos de progresso de rolagem.

## Estrutura

```text
.
|-- index.html
|-- assets/
|   |-- css/
|   |   |-- base/
|   |   |-- components/
|   |   |-- config/
|   |   `-- sections/
|   |-- img/
|   `-- js/
|       |-- config/
|       |-- features/
|       |-- sections/
|       `-- utils/
|-- scripts/
|   `-- scroll-progress.test.mjs
`-- README.md
```

## Como executar localmente

Por usar JavaScript como modulo, prefira servir a pasta do projeto com um servidor estatico local.

Com Python:

```bash
python -m http.server 8080
```

Depois acesse:

```text
http://localhost:8080
```

Tambem e possivel usar uma extensao de servidor estatico do editor, como Live Server no VS Code.

## Testes

Execute o teste disponivel com Node.js:

```bash
node --test scripts/scroll-progress.test.mjs
```

## Edicao de conteudo

- Textos principais da pagina: `index.html`.
- Servicos e marcas renderizados via JavaScript: `assets/js/config/site-data.js`.
- Estilos globais e tokens visuais: `assets/css/config/variables.css`.
- Imagens usadas no site: `assets/img/`.

Ao trocar fotos, mantenha os nomes usados no HTML ou atualize os caminhos correspondentes. Para preservar desempenho, gere tambem as versoes WebP responsivas indicadas em `assets/img/README.md`.

## Licenca

Distribuido sob a licenca MIT. Consulte `LICENSE` para mais detalhes.
