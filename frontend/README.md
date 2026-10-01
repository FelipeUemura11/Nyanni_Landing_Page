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
├── sections/              ← uma seção da página por arquivo
│   Hero · Pillars · About · CareProfiles · Services · Faq · Visit
├── components/
│   ├── layout/            Header (menu mobile, item ativo), Footer, WhatsAppFab
│   ├── ui/                Button (<a> ou <button>), Photo (com fallback)
│   └── icons/Icon.tsx     ícones do Lucide (lucide-react)
├── hooks/                 useScrolled, useActiveSection
├── lib/                   cx, links de WhatsApp/e-mail
└── index.css              Tailwind + design tokens (@theme) + utilitários
public/images/             hero.webp, about.webp
```

Estilo com Tailwind CSS v4 (plugin `@tailwindcss/vite`). Os tokens do design
(cores, fontes, raios, sombras) ficam no `@theme` de `src/index.css` e viram
classes normais: `bg-green`, `text-body`, `rounded-card`, `shadow-photo`...
Utilitários do projeto: `wrapper` (largura do conteúdo), `section-y`
(espaçamento das seções), `eyebrow` e `heading-lg`.

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
