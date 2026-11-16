# Carlos Lemos — Portfólio

Portfólio pessoal em **Vue 3 + TypeScript**, com a aparência original synthwave/anos 80 preservada. Uma aplicação estática, sem API e sem necessidade de SSR.

## Desenvolvimento

Requer Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
npm run typecheck
npm test
npm run build
npm run preview
```

O resultado de produção fica em `dist/` e pode ser servido por Nginx. Para deploy no domínio na raiz, utilize `root /usr/share/nginx/html;` com `index index.html;`. Não é necessário Node em produção.

## Estrutura

- `src/App.vue`: montagem da página e estado de idioma, filtro, animação e rolagem.
- `src/components/`: seções e elementos reutilizáveis (cards, métricas, navegação, fundo).
- `src/content/portfolio.ts`: textos PT/EN, experiências, métricas, projetos, links e tecnologias.
- `src/types.ts`: contratos TypeScript para os componentes e os dados.
- `src/utils/projects.ts`: filtro de projetos puro e testável.
- `src/styles.css`: estilos do portfólio original, sem framework visual.
- `public/assets/`: GIF e imagem estática do fundo original.
- `public/curriculo-carlos-lemos.pdf`: currículo para download.

A alternância PT/EN atualiza textos, document.lang e metadados. Preferências são salvas no navegador quando permitido. O GIF respeita `prefers-reduced-motion` na primeira visita e pode ser pausado manualmente. Os filtros de projetos não dependem de manipulação direta do DOM.

## Segurança e manutenção

Conteúdo renderizado com interpolação padrão do Vue (sem `v-html`); links externos usam `rel="noopener noreferrer"`. Sem analytics, rastreadores, chamadas remotas ou segredos no frontend. O servidor deve definir seus próprios cabeçalhos de segurança e cache.

### Nginx (produção estática)

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location /assets/ { expires 30d; add_header Cache-Control "public"; }
    location / { try_files $uri $uri/ /index.html; }
}
```

Não coloque o código-fonte nem `node_modules` no diretório publicado: copie apenas o conteúdo de `dist/`. Os ativos existentes foram movidos para `public/` preservando seus bytes.

As descrições de Gestão Lab e Verdinho Eventos dizem respeito à atuação nesses produtos, não à autoria individual de todas as funcionalidades.
