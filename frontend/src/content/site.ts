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
    { label: "FAQ", href: "#faq" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Contato", href: "#contact" },
];

// ---------------------------------------------------------------------------
// Seções
// ---------------------------------------------------------------------------

export const hero = {
    titleLine: "Um novo capítulo",
    titlePrefix: "para",
    titleAccent: "viver bem.",
    lead: "Cuidado constante, conforto de lar e novas amizades. Descubra a tranquilidade de estar em um lugar pensado para o seu bem-estar, autonomia e dignidade.",
    primaryCta: { label: "Agendar uma visita", href: "#contact" },
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

export const testimonial = {
    title: "O que as pessoas falam Sobre Nós",
    items: [
        {
            id: 1,
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley,",
            name: "cliente 1",
            icon: "user",
        },
        {
            id: 2,
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley,",
            name: "cliente 2",
            icon: "user",
        },
        {
            id: 3,
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley,",
            name: "cliente 3",
            icon: "user",
        },
        {
            id: 4,
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley,",
            name: "cliente 4",
            icon: "user",
        },
        {
            id: 5,
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley,",
            name: "cliente 5",
            icon: "user",
        },
        {
            id: 6,
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley,",
            name: "cliente 6",
            icon: "user",
        },
        {
            id: 7,
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley,",
            name: "cliente 7",
            icon: "user",
        },
        {
            id: 8,
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley,",
            name: "cliente 8",
            icon: "user",
        },
    ],
} satisfies {
    title: string;
    items: { id: number; description: string; name: string; icon: IconName }[];
};

export const assistance = {
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

/** Conteúdo exibido no modal ao clicar em um serviço. */
export interface ServiceDetail {
    icon: IconName;
    title: string;
    /** Resumo curto exibido no card. */
    summary?: string;
    /** Texto do modal. */
    description: string;
    points: string[];
    /** Foto do modal. Sem imagem, mostra um bloco neutro no lugar. */
    image?: ImageAsset;
}

/**
 * TODO(conteúdo): textos dos modais são provisórios; validar com a proprietária
 * e adicionar as fotos reais (campo `image`, arquivos em /public/images).
 * A ordem abaixo é a ordem dos blocos na grade.
 */
export const services = {
    title: "Cuidado integral e personalizado",
    subtitle:
        "Uma estrutura completa de serviços para garantir saúde, conforto e bem-estar todos os dias.",
    hint: "Toque em um item para saber mais",
    items: [
        {
            icon: "user",
            title: "Acompanhamento Individual",
            summary: "Plano de cuidados único para cada residente.",
            description:
                "Cada residente é conhecido pelo nome, pela história e pelas preferências. A equipe monta um plano de cuidados sob medida e o revisa sempre que a necessidade muda.",
            points: [
                "Avaliação inicial com a família",
                "Plano de cuidados individual e revisado com frequência",
                "Equipe de referência para cada residente",
            ],
        },
        {
            icon: "utensils",
            title: "Alimentação",
            description:
                "Refeições preparadas com carinho, equilibradas e adaptadas às necessidades e ao gosto de cada pessoa.",
            points: [
                "Cardápio variado e nutritivo",
                "Dietas específicas (restrições, texturas, diabetes)",
                "Lanches ao longo do dia e hidratação acompanhada",
            ],
        },
        {
            icon: "pillBottle",
            title: "Medicação",
            description:
                "Controle rigoroso de horários e doses, seguindo a prescrição médica de cada residente.",
            points: [
                "Administração por equipe treinada",
                "Registro de cada dose",
                "Comunicação com médicos e familiares",
            ],
        },
        {
            icon: "shieldPlus",
            title: "Enfermagem",
            description:
                "Acompanhamento de saúde diário para cuidar de perto e agir cedo diante de qualquer mudança.",
            points: [
                "Aferição de sinais vitais",
                "Curativos e cuidados clínicos",
                "Encaminhamento rápido quando necessário",
            ],
        },
        {
            icon: "stretch",
            title: "Fisioterapia",
            description:
                "Exercícios e atividades que preservam a mobilidade, o equilíbrio e a independência.",
            points: [
                "Sessões conforme a necessidade",
                "Prevenção de quedas",
                "Reabilitação e manutenção da força",
            ],
        },
        {
            icon: "shirt",
            title: "Lavanderia",
            description:
                "Roupas e enxoval sempre limpos, identificados e cuidados com atenção.",
            points: [
                "Roupas pessoais identificadas",
                "Roupa de cama e banho inclusas",
                "Entrega organizada no quarto",
            ],
        },
        {
            icon: "bath",
            title: "Higiene",
            description:
                "Apoio no banho e na higiene pessoal, com respeito à privacidade e à dignidade.",
            points: [
                "Auxílio conforme o grau de autonomia",
                "Cuidado com pele e conforto",
                "Ambiente seguro e acessível",
            ],
        },
        {
            icon: "brain",
            title: "Atividades Cognitivas",
            summary: "Estímulo mental diário",
            description:
                "Atividades que mantêm a mente ativa, fortalecem a memória e promovem convívio e alegria.",
            points: [
                "Jogos, música e leitura",
                "Oficinas e atividades em grupo",
                "Estímulo adaptado a cada pessoa",
            ],
        },
    ] satisfies ServiceDetail[],
};

/** TODO(conteúdo): validar todas as respostas com a proprietária. */
export const faq = {
    title: "Perguntas frequentes",
    intro: "Escolher um lugar de cuidado para quem você ama é uma decisão importante, e é natural ter dúvidas. Reunimos aqui as perguntas que as famílias mais trazem no primeiro contato, sobre visitas, rotina, cuidados e valores. Se não encontrar o que procura, nossa equipe responde com calma e sem compromisso.",
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

export const contact_form = {
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
                { label: "Agendar Visita", href: "#contact" },
            ],
        },
    ],
    credits: "Design para longevidade e dignidade.",
};
