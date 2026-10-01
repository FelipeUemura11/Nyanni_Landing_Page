# Nyanni Residencial Sênior · Landing page

Landing page de página única (React 19 + TypeScript + Vite) que conduz a família
pelo percurso de decisão e termina no agendamento de visita.

## Rodando

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # checagem de tipos + build de produção em /dist
npm run lint
```

## Estrutura

```
src/
├── content/site.ts        ← TODO o conteúdo (textos, links, contato, imagens)
├── sections/              ← uma seção da página por arquivo (+ .module.css)
│   Hero · Pillars · About · CareProfiles · Services · Faq · Visit
├── components/
│   ├── layout/            Header (menu mobile, item ativo), Footer, WhatsAppFab
│   ├── ui/                Button (<a> ou <button>), Photo (com fallback)
│   └── icons/Icon.tsx     ícones SVG inline (sem dependência)
├── hooks/                 useScrolled, useActiveSection
├── lib/                   cx, links de WhatsApp/e-mail
└── index.css              design tokens (cores, fontes, espaçamentos) + utilitários
public/images/             hero.png, about.png
```

Estilo com CSS Modules (nativo do Vite), sem dependências além de React.

## Trocando conteúdo

Edite apenas `src/content/site.ts`. Cada `href` do menu aponta para o `id` de uma seção:

| Menu        | Seção                                 |
| ----------- | ------------------------------------- |
| A Nyanni    | `#a-nyanni` · Nossa filosofia         |
| Cuidados    | `#cuidados` · Tipos de acolhimento    |
| Estrutura   | `#estrutura` · Serviços               |
| Experiência | `#experiencia` · Faixa de pilares     |
| Famílias    | `#agendar` · Agendamento de visita    |
| FAQ         | `#faq`                                |

### Fotos

Coloque os arquivos em `public/images/` com os mesmos nomes:

- `hero.png`: proporção 3:4 (atual: 960 × 1280)
- `about.png`: proporção 4:3 (atual: 1280 × 960)

Se um arquivo faltar, o componente `Photo` mostra um bloco neutro no lugar.
O card "Acompanhamento Individual" aceita foto opcional em `services.feature.image`.

## Antes de publicar

Procure por `TODO(conteúdo)` em `site.ts`:

- [ ] WhatsApp e e-mail oficiais (`contact`)
- [ ] Respostas do FAQ validadas com a proprietária
- [ ] Links do rodapé (Unidades, Blog, Portal da Família, Privacidade)
