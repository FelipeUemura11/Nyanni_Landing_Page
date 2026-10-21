import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "../components/icons/Icon";
import { Reveal } from "../components/ui/Reveal";
import { testimonial } from "../content/site";
import { cx } from "../lib/cx";

const SETA =
    "mx-2 grid size-11 shrink-0 cursor-pointer place-items-center rounded-full border border-line-strong bg-white p-2.5 text-ink transition-colors duration-150 hover:border-green hover:text-green-dark disabled:pointer-events-none disabled:opacity-40";

/** Tempo de cada depoimento na tela antes de avançar sozinho. */
const INTERVALO_MS = 4700;

// Quem pediu menos movimento no sistema não recebe a troca automática.
const reduzirMovimento = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
).matches;

/**
 * Texto do depoimento limitado a 5 linhas, para todos os cards terem a mesma altura.
 * A seta só aparece quando o texto foi cortado; ela expande o card e mostra tudo.
 */
function TextoDepoimento({
    id,
    texto,
    aberto,
    alternar,
}: {
    id: string;
    texto: string;
    aberto: boolean;
    alternar: () => void;
}) {
    const ref = useRef<HTMLParagraphElement>(null);
    const [cortado, setCortado] = useState(false);

    // Mede se o texto passa das 5 linhas (muda com a largura da tela).
    useEffect(() => {
        const p = ref.current;
        if (!p || aberto) return;
        const medir = () => setCortado(p.scrollHeight > p.clientHeight + 1);
        medir();
        const observer = new ResizeObserver(medir);
        observer.observe(p);
        return () => observer.disconnect();
    }, [aberto]);

    return (
        <>
            <p
                ref={ref}
                id={id}
                className={cx(
                    "min-h-[8em] text-sm leading-[1.6] text-ink text-justify",
                    !aberto && "line-clamp-5",
                )}
            >
                {texto}
            </p>
            <button
                type="button"
                onClick={alternar}
                aria-expanded={aberto}
                aria-controls={id}
                className={cx(
                    "inline-flex cursor-pointer items-center gap-1 self-start text-sm font-medium text-green hover:text-green-dark",
                    !cortado && !aberto && "invisible",
                )}
            >
                {aberto ? "Mostrar menos" : "Ler mais"}
                <Icon
                    name="chevronDown"
                    size={16}
                    className={cx(
                        "transition-transform duration-200",
                        aberto && "rotate-180",
                    )}
                />
            </button>
        </>
    );
}

export function Testimonials() {
    // `loop` faz o carrossel seguir sempre para a direita, voltando ao 1º depois do último.
    // O autoplay pausa com o mouse em cima ou com foco do teclado e retoma depois.
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { align: "start", loop: true },
        [
            Autoplay({
                delay: INTERVALO_MS,
                active: !reduzirMovimento,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            }),
        ],
    );
    const [podeVoltar, setPodeVoltar] = useState(false);
    const [podeAvancar, setPodeAvancar] = useState(false);
    const [posicoes, setPosicoes] = useState(0); // quantas bolinhas
    const [atual, setAtual] = useState(0); // qual bolinha está ativa
    const [aberto, setAberto] = useState<number | null>(null); // depoimento expandido
    const total = testimonial.items.length;

    // Com um depoimento aberto, o carrossel para de andar até ele ser fechado.
    useEffect(() => {
        const autoplay = emblaApi?.plugins().autoplay;
        if (!autoplay || reduzirMovimento) return;
        if (aberto === null) autoplay.play();
        else autoplay.stop();
    }, [emblaApi, aberto]);

    useEffect(() => {
        if (!emblaApi) return;

        const fechar = () => setAberto(null);
        emblaApi.on("select", fechar);

        const atualizar = () => {
            setPodeVoltar(emblaApi.canScrollPrev());
            setPodeAvancar(emblaApi.canScrollNext());
            setPosicoes(emblaApi.scrollSnapList().length);
            setAtual(emblaApi.selectedScrollSnap());
        };

        atualizar();
        emblaApi.on("select", atualizar).on("reInit", atualizar);

        return () => {
            emblaApi.off("select", atualizar).off("reInit", atualizar);
            emblaApi.off("select", fechar);
        };
    }, [emblaApi]);

    return (
        <section
            id="testimonials"
            className="bg-cream section-y"
            aria-labelledby="testimonials-title"
            aria-roledescription="carousel"
        >
            <div className="wrapper">
                <Reveal
                    as="h2"
                    id="testimonials-title"
                    className="mb-[clamp(2rem,4vw,3rem)] text-center heading-lg text-ink"
                >
                    {testimonial.title}
                </Reveal>
                <Reveal delay={120} className="flex items-center">
                    <button
                        type="button"
                        className={SETA}
                        onClick={() => emblaApi?.scrollPrev()}
                        disabled={!podeVoltar}
                        aria-label="Anterior"
                    >
                        <Icon name="arrowRight" className="rotate-180" />
                    </button>
                    <div
                        ref={emblaRef}
                        className="min-w-0 flex-1 overflow-hidden"
                    >
                        {/* items-start: abrir um card não estica os vizinhos */}
                        <ul className="-ml-5 flex items-start">
                            {testimonial.items.map((t, i) => (
                                <li
                                    key={t.id}
                                    aria-roledescription="slide"
                                    aria-label={`Depoimento ${i + 1} de ${total}`}
                                    className="flex min-w-0 flex-[0_0_100%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)]"
                                >
                                    <div className="flex w-full flex-col gap-2.5 rounded-card border border-line px-5.5 pt-6 pb-7">
                                        <TextoDepoimento
                                            id={`depoimento-${t.id}`}
                                            texto={t.description}
                                            aberto={aberto === t.id}
                                            alternar={() =>
                                                setAberto((a) =>
                                                    a === t.id ? null : t.id,
                                                )
                                            }
                                        />
                                        <div className="mt-auto flex items-center justify-between pt-2">
                                            <span className="grid size-10 place-items-center rounded-full bg-tile text-ink">
                                                <Icon name={t.icon} size={18} />
                                            </span>
                                            <h3 className="text-base leading-[1.35] font-medium text-ink">
                                                {t.name}
                                            </h3>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        type="button"
                        className={SETA}
                        onClick={() => emblaApi?.scrollNext()}
                        disabled={!podeAvancar}
                        aria-label="Próximo"
                    >
                        <Icon name="arrowRight" />
                    </button>
                </Reveal>

                {posicoes > 1 && (
                    <div
                        role="group"
                        aria-label="Escolher depoimento"
                        className="mt-6 flex flex-wrap justify-center"
                    >
                        {Array.from({ length: posicoes }, (_, i) => (
                            <button
                                key={i}
                                type="button"
                                // Com `slidesToScroll: 1`, a posição i começa no depoimento i + 1
                                aria-label={`Ir para o depoimento ${i + 1}`}
                                aria-current={i === atual ? "true" : undefined}
                                onClick={() => emblaApi?.scrollTo(i)}
                                className="group grid size-6 cursor-pointer place-items-center"
                            >
                                <span
                                    className={cx(
                                        "h-2.5 rounded-full transition-[width,background-color] duration-200",
                                        i === atual
                                            ? "w-5 bg-green"
                                            : "w-2.5 bg-muted group-hover:bg-green",
                                    )}
                                />
                            </button>
                        ))}
                    </div>
                )}
                <p className="sr-only" aria-live="polite" aria-atomic="true">
                    {posicoes > 0 &&
                        `Mostrando a partir do depoimento ${atual + 1} de ${total}`}
                </p>
            </div>
        </section>
    );
}
