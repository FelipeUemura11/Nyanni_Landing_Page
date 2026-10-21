# Nyanni Residencial Sênior · Landing page

Landing page da **Nyanni Residencial Sênior**, casa de repouso em Curitiba e região
metropolitana. A página apresenta a casa, os cuidados e os serviços, mostra
depoimentos de famílias e termina no agendamento de visita (formulário ou WhatsApp).

Site: https://nyanni.com.br/

## Tecnologias

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Embla Carousel (carrossel de depoimentos)
- Lucide (ícones)

## Como rodar

Requer Node.js instalado.

```bash
cd frontend
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # checagem de tipos + build de produção em frontend/dist
npm run preview   # serve o build localmente
npm run lint      # ESLint
npm run format    # Prettier
```

## Estrutura

```
frontend/
├── public/            imagens, favicon, robots.txt, sitemap.xml, llms.txt
└── src/
    ├── content/site.ts   todo o conteúdo do site (textos, contatos, depoimentos)
    ├── sections/         uma seção da página por arquivo
    ├── components/       layout, UI, ícones e SEO (dados estruturados)
    ├── hooks/            hooks de scroll e visibilidade
    └── lib/              utilitários (links de WhatsApp/e-mail, cx)
```

Para alterar textos, contatos ou depoimentos, edite apenas
`frontend/src/content/site.ts`. Se mudar informações da casa, atualize também
`frontend/public/llms.txt`, que é o resumo lido por assistentes de IA.

Mais detalhes (design tokens, fotos, checklist antes de publicar) em
[frontend/README.md](frontend/README.md).
