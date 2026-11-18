# Elevate — Árvore de links

Página de links da Elevate Marketing, com a mesma identidade visual da landing page
(fundo `#181818`, vermelho `#CC0000`, fonte Glancyr, fotos do Isaac).

## Estrutura

```
index.html          estrutura, textos e links
css/links.css       estilos, animações e hovers
js/links.js         animação de entrada e ano do rodapé
assets/fonts/       Glancyr Light / Regular / Medium (.woff2)
assets/img/         logo, textura, fotos e favicons
```

## Como editar

- **Links e textos dos cards:** no `index.html`, dentro de `<nav class="links">`.
  Cada card é um `<a class="card">`: `href` é o link, `card__title` é o texto
  e `btn` é o botão.
- **Mensagem do WhatsApp:** o texto pronto fica no parâmetro `?text=` do link `wa.me`.
- **Foto de cada card:** `background-image` no `<span class="card__img">`.

## Publicação

Suba o conteúdo deste repositório para a pasta `links/` do site, que fica
publicado em `https://elvtmkt.com.br/links/`. Todos os caminhos são relativos,
então a página também funciona em qualquer outra pasta.

A fonte Glancyr é comercial: confira se a licença cobre uso na web.
