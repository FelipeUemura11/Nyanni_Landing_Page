/**
 * Conteúdo da landing page da Nyanni.
 *
 * Todo texto, link e imagem do site vive aqui: para trocar o conteúdo
 * não é preciso mexer nos componentes.
 *
 * Ao mudar serviços, FAQ ou contato, atualize também public/llms.txt
 * (resumo do site lido por assistentes de IA).
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

export const seo = {
    siteUrl: "https://nyanni.vercel.app/",
    title: "Nyanni Residencial Sênior | Casa de repouso e cuidado para idosos",
    description:
        "Residencial sênior com cuidado 24h, enfermagem, fisioterapia, alimentação, conforto de lar e convivência para idosos. Agende uma visita à Nyanni.",
    areaServed: "Curitiba e região metropolitana",
    sameAs: [] as string[],
} as const;

export const contact = {
    phoneNumber: "+5541991760974", // usado no link tel:
    phoneDisplay: "(41) 99176-0974",
    whatsappNumber: "5541992274233", // DDI + DDD + número, só dígitos
    whatsappDisplay: "(41) 99227-4233",
    email: "nyannicasaderepouso@gmail.com",
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
    lead: "Residencial sênior com cuidado 24h, conforto de lar e novas amizades. Descubra a tranquilidade de estar em um lugar pensado para bem-estar, autonomia e dignidade.",
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
        "A Nyanni reúne estrutura de casa de repouso, residencial para idosos e equipe de cuidado contínuo para apoiar diferentes fases da vida com atenção individual.",
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
                "Estamos muito felizes com o cuidado que minha mãe recebe no lar! É muito bom saber que ela está sendo tão bem cuidada, assistida e acolhida por pessoas que demonstram tanto carinho e atenção no dia a dia. Toda a equipe é muito atenciosa, e isso faz toda a diferença para nós, familiares. Sempre que temos alguma solicitação, somos ouvidos com carinho, e nossas sugestões e preocupações são levadas em consideração. Mais do que um lugar para ficar, sentimos que ela está em um ambiente onde existe cuidado, respeito, carinho e dedicação. Isso nos traz muita tranquilidade e segurança, pois sabemos que ela está em boas mãos. Nosso agradecimento a toda a equipe por esse cuidado tão especial com ela!",
            name: "Silvia e Sonia",
            icon: "user",
        },
        {
            id: 2,
            description:
                "Minha mãe, no auge de seus 89 anos, com Alzheimer. Por ser filha única, tive que me render a ter esta decisão difícil e a procurar uma instituição de acolhimento aos idosos. No dia em que marquei, cheguei no Lar Nyanni e fui atendida pela Liz, só conseguia olhar a correntinha que ela tinha no pescoço e dizia “Fé”, e foi esta fé que me fez tomar uma das decisões mais difíceis da minha vida e levá-la para o Lar. Posso dizer que foi a melhor coisa: no Lar ela foi cuidada com muito amor, e posso afirmar com certeza que teve uma sobrevida, com as atividades lúdicas e com os cuidados médicos e fisioterapêuticos. O Lar Nyanni “desmonta” aquela visão antiga e preconceituosa de um “asilo”: lá é literalmente uma casa que cuida de nossos idosos com amor e respeito.",
            name: "Carla Wozniak",
            icon: "user",
        },
        {
            id: 3,
            description:
                "Conheci a Nyanni Casa de Repouso em 2022, quando precisei escolher um lar para o meu pai, e hoje, com mais de quatro anos fazendo parte dessa história, só posso dizer que encontrei o lugar perfeito. Desde o primeiro dia, a atenção e a dedicação da equipe me trouxeram uma tranquilidade imensa. O ambiente é impecável: tudo sempre muito limpo, organizado e mantido com um rigor admirável no cumprimento dos horários de medicação, refeições e atividades. A postura da equipe é extremamente proativa e todos os profissionais são altamente capacitados. Mas o grande diferencial da Nyanni vai muito além da excelência técnica. Nos momentos em que meu pai, devido à senilidade, acabou arrumando alguma confusão, a equipe de acolhimento e o corpo técnico souberam contornar a situação com uma paciência, calma e amor impressionantes. Em pouco tempo, ele já estava tranquilo novamente. Hoje, ele está completamente adaptado ao lar e tem uma convivência maravilhosa por lá. Para mim, como filho, não há preço que pague a paz de ter o coração tranquilo sabendo que ele está sendo tão bem cuidado. Claro que continuo presente e fazendo a minha parte no dia a dia, mas a verdade é que a Nyanni se tornou nossa referência. Na prática, viramos uma única família cuidando de alguém muito especial — até porque lá eles não tratam as pessoas como pacientes, mas sim como moradores e membros da própria família. Recomendo a Nyanni de olhos fechados e com todo o meu carinho. Espero que continuemos juntos nessa caminhada por muitos e muitos anos!",
            name: "Maikel Monteiro",
            icon: "user",
        },
        {
            id: 4,
            description:
                "O Lar Nyanni é muito acolhedor, bem administrado e organizado. A proprietária é muito humanizada, trata os idosos com carinho, dignidade e responsabilidade com as comorbidades e tratamentos dos mesmos. Já tive experiência em outros lares, esse é o único que recomendo sem ressalvas.",
            name: "Deise de Melo Filipak",
            icon: "user",
        },
        {
            id: 5,
            description:
                "Minha experiência com o Lar Nyanni: meu marido, Cirlei, já está no lar há quase sete anos e tem demência. Após uma internação devido a um acidente, os médicos constataram que, a partir daquele momento, ele precisaria de cuidados em tempo integral. Depois de eu e meus filhos visitarmos algumas instituições e alguns lares, conhecemos o lar no qual o colocamos. De início, ele era bem mais dependente de cuidados e, com dedicação, carinho, as medicações ministradas, fisioterapia e alguns exercícios cognitivos, ele se tornou mais independente. Sou grata pelos cuidados, carinho e dedicação com que a Liz e sua equipe cuidam de seus idosos. E, com a convivência, acabamos nos tornando uma família. Gratidão ao Lar Nyanni.",
            name: "Nilza, esposa do Cirlei",
            icon: "user",
        },
        {
            id: 6,
            description:
                "Me chamo Jeniffer Lambach e em um dos momentos mais difíceis da minha vida conheci a “Família” do Lar Nyanni. No começo, eu tinha receio de deixar minha avó sob os cuidados de pessoas até então estranhas. Comecei deixando a minha avó apenas durante o dia, mas em pouco tempo percebi o quão bem minha pequena era cuidada e, em alguns dias de adaptação, optei por começar a deixá-la constantemente no lar. Nos primeiros meses me senti péssima, pois me sentia culpada por deixar uma das pessoas que mais cuidou de mim na infância sob os cuidados de terceiros. Com o passar do tempo tive certeza que havia escolhido um ótimo lar para ela, pois o tratamento que ela recebia lá sem dúvida nenhuma era melhor do que o tratamento que eu oferecia, não por falta de vontade, muito menos por falta de amor, mas sim por falta de experiência com uma doença tão avassaladora quanto o Alzheimer. Ao decorrer desses três anos que minha avó morou no Lar Nyanni, nós fomos muito bem acolhidos. A qualquer alteração no estado de saúde ou até mesmo de humor da minha avó eu recebia avisos do pessoal do Lar. Ela ganhou peso e, semanalmente, quando eu a visitava, ela sempre tinha uma peripécia nova que ela e as cuidadoras haviam inventado. Infelizmente, este ano minha pequena nos deixou e eu recebi todo o apoio da Família Nyanni, assim como tive apoio ao longo dos três anos que ela residiu no lar. Sou eternamente grata por fazer parte dessa história e por vocês fazerem parte da minha vida. E, sem dúvida nenhuma, ela também foi muito grata a vocês. Obrigada Família Nyanni.",
            name: "Jeniffer Lambach",
            icon: "user",
        },
        {
            id: 7,
            description:
                "Minha experiência com o Lar Nyanni começou no ano de 2022, quando meu pai, com 89 anos, tinha dificuldade para andar e se coordenar sozinho, e eu, a filha, recém-operada da coluna, não conseguia mais cuidar dele. Conheci o Lar Nyanni passando na frente. Enquanto família, ponderamos a existência de horários fixos para alimentação, atividade física e descanso, trazendo um conforto emocional para ele, garantindo medicação no horário correto, suporte em mobilidade e prevenção de quedas. Para a família, a decisão muitas vezes transforma uma relação de desgaste: no lar, as visitas passaram a ser de qualidade e afeto, com a certeza de que ele estava sendo assistido. Essa experiência foi ímpar: conheci muitas pessoas, fiz amizades, e os cuidados não foram só com o meu pai, mas também com a família, temerosa do passo que estávamos dando. O processo dele no Lar Nyanni foi com muita atenção, carinho e cuidado; havia amorosidade nas relações e tolerância com ele. A alimentação, a limpeza, o espaço físico e a localização de fácil acesso sempre foram muito bons. Desde o início percebemos o quanto ele era bem cuidado e o carinho e a atenção da equipe. Ele ficou no lar por 8 meses e, após esse período, veio a falecer de causas naturais. Aproveito para agradecer a todos que, ao longo desse tempo, deram atenção e carinho ao meu pai, em especial a Liz e o Paulo, que vêm fazendo um excelente trabalho.",
            name: "Elines Zanoni",
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
        "Uma estrutura completa de serviços para garantir saúde, conforto e bem-estar todos os dias, com apoio para idosos independentes e residentes que precisam de cuidados contínuos.",
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
            icon: "stethoscope",
            title: "Médica Geriatra",
            description:
                "Acompanhamento médico especializado no envelhecimento, cuidando da saúde de cada residente de forma preventiva e integrada.",
            points: [
                "Consultas e avaliações geriátricas periódicas",
                "Revisão e ajuste das medicações",
                "Orientação à equipe e às famílias",
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
            title: "Cuidados/Cuidador",
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
                "Fisio em grupo geral",
                "Fisio neuro cognitivo funcional",
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
                { label: "Unidades", href: "#estrutura" },
                { label: "Blog", href: "#about" },
            ],
        },
        {
            title: "Serviços",
            links: [
                { label: "Portal da Família", href: "#cuidados" },
                { label: "Agendar Visita", href: "#contact" },
            ],
        },
    ],
    credits: "Design para longevidade e dignidade.",
};
