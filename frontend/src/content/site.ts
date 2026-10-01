/**
 * Conteúdo da landing page da Nyanni.
 *
 * Todo texto, link e imagem do site vive aqui: para trocar o conteúdo
 * não é preciso mexer nos componentes.
 *
 * Itens marcados com TODO(conteúdo) precisam ser validados ou substituídos
 * com a proprietária antes da publicação (ver "Próximos passos" na proposta).
 */
import type { IconName } from "../components/icons/Icon";

export interface NavLink {
    label: string;
    href: string;
}

export interface IconItem {
    icon: IconName;
    title: string;
    description?: string;
}

export interface ImageAsset {
    src: string;
    alt: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

/** Imagens ficam em /public/images. Respeita o `base` do Vite no deploy. */
const image = (file: string): string =>
    `${import.meta.env.BASE_URL}images/${file}`;

// ---------------------------------------------------------------------------
// Marca e contato
// ---------------------------------------------------------------------------

export const brand = {
    name: "Nyanni",
    fullName: "Nyanni Residencial Sênior",
    tagline:
        "Um espaço dedicado a proporcionar longevidade com dignidade, conforto e alegria.",
} as const;

/** TODO(conteúdo): substituir pelo WhatsApp e e-mail oficiais da casa. */
export const contact = {
    whatsappNumber: "5541900000000", // DDI + DDD + número, só dígitos
    whatsappDisplay: "(41) 90000-0000",
    email: "contato@nyanni.com.br",
    greeting: "Olá! Gostaria de saber mais sobre a Nyanni.",
} as const;

// ---------------------------------------------------------------------------
// Navegação — cada href aponta para o id de uma seção da página
// ---------------------------------------------------------------------------

export const navigation: NavLink[] = [
    { label: "Sobre Nós", href: "#about" },
    { label: "Cuidados", href: "#cuidados" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Famílias", href: "#agendar" },
    { label: "FAQ", href: "#faq" },
];

// ---------------------------------------------------------------------------
// Seções
// ---------------------------------------------------------------------------

export const hero = {
    titleLine: "Um novo capítulo",
    titlePrefix: "para",
    titleAccent: "viver bem.",
    lead: "Cuidado constante, conforto de lar e novas amizades. Descubra a tranquilidade de estar em um lugar pensado para o seu bem-estar, autonomia e dignidade.",
    primaryCta: { label: "Agendar uma visita", href: "#agendar" },
    secondaryCta: { label: "Conheça a Nyanni", href: "#about" },
    image: {
        src: image("hero.webp"),
        alt: "Residente de cabelos grisalhos sorrindo enquanto lê um livro em uma poltrona, em uma sala iluminada por luz natural",
    } satisfies ImageAsset,
};

export const pillars: IconItem[] = [
    { icon: "heart", title: "Cuidado Humanizado" },
    { icon: "home", title: "Ambiente Acolhedor" },
    { icon: "users", title: "Vida Ativa e Social" },
    { icon: "family", title: "Família Sempre Presente" },
];

export const about = {
    eyebrow: "Nossa filosofia",
    title: "Mais do que morar. É continuar vivendo.",
    paragraphs: [
        "Acreditamos que a longevidade deve ser celebrada com autonomia, dignidade e propósito. Nossos espaços foram cuidadosamente desenhados para não parecerem clínicas, mas sim extensões acolhedoras de um lar.",
        "Aqui, a segurança técnica é invisível aos olhos, mas presente em cada detalhe, permitindo que os residentes vivam com liberdade e que as famílias tenham paz de espírito.",
    ],
    image: {
        src: image("about.webp"),
        alt: "Quatro residentes conversando e rindo em uma sala de estar, com chá e vinho sobre a mesa de centro",
    } satisfies ImageAsset,
};

export const careProfiles = {
    title: "Acolhimento para diferentes momentos",
    items: [
        {
            icon: "personStanding",
            title: "Idosos Independentes",
            description:
                "Buscam convívio social, segurança e praticidade no dia a dia, sem abrir mão da autonomia.",
        },
        {
            icon: "handHelping",
            title: "Auxílio na Rotina",
            description:
                "Precisam de suporte pontual para medicação, higiene ou mobilidade, com respeito à privacidade.",
        },
        {
            icon: "users",
            title: "Famílias em Busca de Segurança",
            description:
                "Procuram a tranquilidade de saber que seu ente querido está cuidado 24h por profissionais qualificados.",
        },
        {
            icon: "briefcaseMedical",
            title: "Cuidados Contínuos",
            description:
                "Estrutura completa e equipe multidisciplinar para casos de maior dependência física ou cognitiva.",
        },
    ] satisfies IconItem[],
};

export const services = {
    title: "Cuidado integral e personalizado",
    subtitle:
        "Uma estrutura completa de serviços para garantir saúde, conforto e bem-estar todos os dias.",
    feature: {
        title: "Acompanhamento Individual",
        description: "Plano de cuidados único para cada residente.",
        // Opcional: foto de fundo do card. Sem imagem, usa o fundo em degradê do layout.
        image: undefined as ImageAsset | undefined,
    },
    highlight: {
        icon: "brain",
        title: "Atividades Cognitivas",
        description: "Estímulo mental diário",
    } satisfies IconItem,
    // A ordem abaixo é a ordem dos blocos na grade (duas colunas à direita)
    items: [
        { icon: "utensils", title: "Alimentação" },
        { icon: "pillBottle", title: "Medicação" },
        { icon: "shieldPlus", title: "Enfermagem" },
        { icon: "stretch", title: "Fisioterapia" },
        { icon: "shirt", title: "Lavanderia" },
        { icon: "bath", title: "Higiene" },
    ] satisfies IconItem[],
};

/** TODO(conteúdo): validar todas as respostas com a proprietária. */
export const faq = {
    title: "Perguntas frequentes",
    intro: "As dúvidas que as famílias costumam trazer no primeiro contato.",
    items: [
        {
            question: "Posso conhecer a casa antes de decidir?",
            answer: "Sim. Agende uma visita para conhecer os espaços, a rotina e a equipe. Familiares são bem-vindos para acompanhar.",
        },
        {
            question: "A família pode visitar o residente?",
            answer: "Sim. A presença da família faz parte do nosso jeito de cuidar. Os horários de visita são combinados com a equipe para respeitar a rotina de cada residente.",
        },
        {
            question: "Como funciona o acompanhamento de saúde?",
            answer: "Cada residente tem um plano de cuidados individual, com enfermagem, controle de medicação e fisioterapia de acordo com a necessidade.",
        },
        {
            question: "Vocês recebem idosos com maior dependência?",
            answer: "Sim. Os cuidados contínuos contam com estrutura completa e equipe multidisciplinar para casos de maior dependência física ou cognitiva.",
        },
        {
            question: "Como são definidos os valores?",
            answer: "Os valores variam conforme o nível de cuidado de cada residente. A equipe apresenta as opções durante a visita ou pelo WhatsApp.",
        },
    ] satisfies FaqItem[],
};

export const visit = {
    eyebrow: "Agende uma visita",
    title: "Venha conhecer a Nyanni com sua família",
    lead: "A melhor forma de decidir é ver de perto. Conte um pouco sobre quem vai morar aqui e a equipe confirma o melhor horário com você.",
    forOptions: [
        { value: "familiar", label: "Um familiar" },
        { value: "mim", label: "Para mim" },
    ],
    periodOptions: [
        { value: "manha", label: "Manhã" },
        { value: "tarde", label: "Tarde" },
        { value: "qualquer", label: "Qualquer período" },
    ],
};

export const footer = {
    // TODO(conteúdo): páginas ainda não existem; atualizar os hrefs quando forem criadas
    columns: [
        {
            title: "Sobre Nós",
            links: [
                { label: "Unidades", href: "#" },
                { label: "Blog", href: "#" },
            ],
        },
        {
            title: "Serviços",
            links: [
                { label: "Portal da Família", href: "#" },
                { label: "Agendar Visita", href: "#agendar" },
            ],
        },
    ],
    credits: "Design para longevidade e dignidade.",
};
