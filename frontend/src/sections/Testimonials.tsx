import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { Icon } from "../components/icons/Icon";
import { testimonial } from "../content/site";
import { cx } from "../lib/cx";

const SETA =
    "mx-2 grid size-11 shrink-0 cursor-pointer place-items-center rounded-full border border-line-strong bg-white p-2.5 text-ink transition-colors duration-150 hover:border-green hover:text-green-dark disabled:pointer-events-none disabled:opacity-40";

export function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
    const [podeVoltar, setPodeVoltar] = useState(false);
    const [podeAvancar, setPodeAvancar] = useState(false);
    const [posicoes, setPosicoes] = useState(0); // quantas bolinhas
    const [atual, setAtual] = useState(0); // qual bolinha está ativa
    const total = testimonial.items.length;

    useEffect(() => {
        if (!emblaApi) return;

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
                <h2
                    id="testimonials-title"
                    className="mb-[clamp(2rem,4vw,3rem)] text-center heading-lg text-ink"
                >
                    {testimonial.title}
                </h2>
                <div className="flex items-center">
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
                        <ul className="-ml-5 flex">
                            {testimonial.items.map((t, i) => (
                                <li
                                    key={t.id}
                                    aria-roledescription="slide"
                                    aria-label={`Depoimento ${i + 1} de ${total}`}
                                    className="flex min-w-0 flex-[0_0_100%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
                                >
                                    <div className="flex w-full flex-col gap-2.5 rounded-card border border-line px-5.5 pt-6 pb-7">
                                        <p className="text-sm leading-[1.6] text-ink">
                                            {t.description}
                                        </p>
                                        <div className="mt-auto flex items-center justify-between pt-4">
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
                </div>

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
