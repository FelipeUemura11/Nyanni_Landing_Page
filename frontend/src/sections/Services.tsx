import { Icon } from "../components/icons/Icon";
import { services } from "../content/site";
import { cx } from "../lib/cx";

/*
  Grade "bento" no desktop (lg):
  [ destaque grande ][ t1 ][ t2 ]
  [ destaque grande ][ t3 ][ t4 ]
  [ atividades      ][ t5 ][ t6 ]
  O destaque e o bloco verde são posicionados; os demais preenchem sozinhos.
  Abaixo de lg, os dois ocupam a largura toda e os blocos viram 3 / 2 colunas.
*/
export function Services() {
    const { feature, highlight, items } = services;

    return (
        <section
            id="estrutura"
            className="section-y"
            aria-labelledby="estrutura-title"
        >
            <div className="wrapper">
                <header className="mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] max-w-160 text-center">
                    <h2 id="estrutura-title" className="heading-lg text-ink">
                        {services.title}
                    </h2>
                    <p className="mt-4 leading-[1.65] text-body">
                        {services.subtitle}
                    </p>
                </header>

                <ul className="grid auto-rows-[minmax(124px,auto)] grid-cols-2 gap-3 sm:auto-rows-[minmax(150px,auto)] sm:grid-cols-3 sm:gap-4 lg:auto-rows-[minmax(190px,auto)] lg:grid-cols-[minmax(0,2fr)_repeat(2,minmax(0,1fr))]">
                    <li
                        className={cx(
                            "relative col-span-full flex min-h-65 flex-col justify-end overflow-hidden rounded-card p-[clamp(1.5rem,3vw,2rem)] bg-feature lg:col-1 lg:row-[1/span_2] lg:min-h-0",
                            // Garante leitura do texto quando houver foto no fundo
                            feature.image &&
                                "after:absolute after:inset-0 after:bg-linear-to-t after:from-cream/95 after:to-transparent after:to-60%",
                        )}
                    >
                        {feature.image ? (
                            <img
                                className="absolute inset-0 size-full object-cover"
                                src={feature.image.src}
                                alt={feature.image.alt}
                                loading="lazy"
                            />
                        ) : null}
                        <div className="relative z-10">
                            <h3 className="mb-1.5 font-display text-[clamp(1.375rem,1.2rem+0.6vw,1.625rem)] leading-[1.2] font-normal text-ink">
                                {feature.title}
                            </h3>
                            <p className="text-[0.9375rem] text-body">
                                {feature.description}
                            </p>
                        </div>
                    </li>

                    <li className="col-span-full flex items-center gap-4 rounded-card bg-mint p-[clamp(1.5rem,3vw,2rem)] text-mint-ink lg:col-1 lg:row-3">
                        <span className="grid size-11 shrink-0 place-items-center rounded-full border border-current">
                            <Icon name={highlight.icon} size={20} />
                        </span>
                        <div>
                            <h3 className="text-lg leading-[1.3] font-medium">
                                {highlight.title}
                            </h3>
                            <p className="mt-1 text-sm">
                                {highlight.description}
                            </p>
                        </div>
                    </li>

                    {items.map((item) => (
                        <li
                            key={item.title}
                            className="flex flex-col justify-between gap-8 rounded-card bg-tile p-5 text-ink sm:p-6"
                        >
                            <Icon name={item.icon} size={20} />
                            <h3 className="text-[0.9375rem] font-medium text-[#43443f]">
                                {item.title}
                            </h3>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
