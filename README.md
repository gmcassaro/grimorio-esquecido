Grimório Esquecido – Documentação do Projeto
Este projeto simula um grimório mágico interativo, apresentado como um livro em 3D sobre uma mesa. Abaixo está uma visão geral de como cada arquivo funciona e como tudo se integra para criar a experiência completa.

📄 index.html — Estrutura Principal
O arquivo index.html funciona como o esqueleto do projeto. Mesmo sem o código completo aqui, é possível deduzir a estrutura pelas classes usadas no CSS e no JavaScript. A ideia é criar a metáfora de um livro aberto sobre uma mesa.

Estrutura do livro
Tudo é envolvido por uma div class="book-container", que centraliza o livro na tela. Dentro dela, há a div class="book", que reúne tanto a capa quanto o conteúdo interno.

Capa e conteúdo
A div class="cover" representa a capa do livro e traz o título “Grimório Esquecido”. Ao clicar nela, a animação de abertura é disparada. A div class="page-content" funciona como a página aberta do livro, onde todas as magias são exibidas.

Cabeçalho e busca
Dentro da área interna, há um header que contém:
- O título da página
- Um campo de busca (input id="busca") que permite filtrar magias em tempo real.
- Lista de magias

A seção principal main contém uma div id="lista-magias".
É ali que o script.js renderiza dinamicamente cada magia vinda do data.json.

🎨 style.css — Estilização e Animações

O style.css é o responsável por transformar o HTML em uma experiência estética e imersiva.

Ambientação

O body usa uma textura de madeira como fundo, simulando uma mesa.

A fonte MedievalSharp reforça o clima de fantasia.

Estrutura 3D

Com perspective e transform-style: preserve-3d, o CSS cria a ilusão de um livro tridimensional.
A .book, .cover e .page-content se alinham para compor esse objeto 3D.

Animação de abertura

A classe .open é o gatilho da animação:

Quando adicionada à .book, a capa (.cover) recebe um rotateY(-180deg).

Isso gera o efeito visual de abrir um livro de verdade.

Texturas

.cover usa textura de couro.

.page-content usa textura de papel antigo.

Ambas são combinadas com cores sólidas para aumentar o realismo.

Layout das magias

Cada magia é representada por um <article>:

O CSS usa display: flex para alinhar o texto com o ícone da escola de magia.

Os ícones são aplicados usando um ::after que depende do atributo data-school.

Responsividade

Com @media queries, o layout se adapta para telas menores:

A estrutura 3D é simplificada em celulares.

Ícones das escolas são ocultados para economizar espaço.

📚 data.json — Banco de Dados das Magias

O arquivo data.json funciona como o banco de dados do grimório. Ele contém um array de objetos, cada um representando uma magia com:

nome: Nome da magia

descricao: Resumo dos efeitos

circulo_magia: Exemplo: “1º Círculo”, “Truque”

link_referencia: URL com detalhes completos

tags: Lista de termos úteis para busca e identificação de escola de magia

Separar os dados em JSON facilita bastante:

Adicionar novas magias não exige mexer em HTML ou JS.

A busca e a renderização ficam bem mais simples.

🎨 style.css — Estilização e Animações

O style.css é o responsável por transformar o HTML em uma experiência estética e imersiva.

Ambientação

O body usa uma textura de madeira como fundo, simulando uma mesa.

A fonte MedievalSharp reforça o clima de fantasia.

Estrutura 3D

Com perspective e transform-style: preserve-3d, o CSS cria a ilusão de um livro tridimensional.
A .book, .cover e .page-content se alinham para compor esse objeto 3D.

Animação de abertura

A classe .open é o gatilho da animação:

Quando adicionada à .book, a capa (.cover) recebe um rotateY(-180deg).

Isso gera o efeito visual de abrir um livro de verdade.

Texturas

.cover usa textura de couro.

.page-content usa textura de papel antigo.

Ambas são combinadas com cores sólidas para aumentar o realismo.

Layout das magias

Cada magia é representada por um <article>:

O CSS usa display: flex para alinhar o texto com o ícone da escola de magia.

Os ícones são aplicados usando um ::after que depende do atributo data-school.

Responsividade

Com @media queries, o layout se adapta para telas menores:

A estrutura 3D é simplificada em celulares.

Ícones das escolas são ocultados para economizar espaço.

📚 data.json — Banco de Dados das Magias

O arquivo data.json funciona como o banco de dados do grimório. Ele contém um array de objetos, cada um representando uma magia com:

nome: Nome da magia

descricao: Resumo dos efeitos

circulo_magia: Exemplo: “1º Círculo”, “Truque”

link_referencia: URL com detalhes completos

tags: Lista de termos úteis para busca e identificação de escola de magia

Separar os dados em JSON facilita bastante:

Adicionar novas magias não exige mexer em HTML ou JS.

A busca e a renderização ficam bem mais simples.
