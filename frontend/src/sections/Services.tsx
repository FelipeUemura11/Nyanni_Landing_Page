import { useState } from "react";
import { Icon } from "../components/icons/Icon";
import { ServiceModal } from "../components/ui/ServiceModal";
import { Reveal } from "../components/ui/Reveal";
import { services, type ServiceDetail } from "../content/site";
import { cx } from "../lib/cx";

/** Primeiro item = destaque grande; último = faixa larga em verde. */
function tileClass(index: number, total: number): string {
    if (index === 0)
        return "min-h-56 bg-green text-white sm:min-h-64 lg:min-h-0";
    if (index === total - 1) return "bg-mint text-mint-ink";
    return "bg-white text-ink ring-1 ring-line hover:ring-green/40";
}

export function Services() {
    const [selected, setSelected] = useState<ServiceDetail | null>(null);
    const { items } = services;

    return (
        <section
            id="estrutura"
            className="bg-sand section-y"
            aria-labelledby="estrutura-title"
        >
            <div className="wrapper">
                <Reveal
                    as="header"
                    className="mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] max-w-160 text-center"
                >
                    <h2 id="estrutura-title" className="heading-lg text-ink">
                        {services.title}
                    </h2>
                    <p className="mt-4 leading-[1.65] text-body">
                        {services.subtitle}
                    </p>
                    <p className="mt-3 text-sm text-green">{services.hint}</p>
                </Reveal>

                <ul className="grid auto-rows-[minmax(130px,auto)] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:auto-rows-[minmax(170px,auto)]">
                    {items.map((item, i) => {
                        const feature = i === 0;
                        const wide = i === items.length - 1;
                        return (
                            <Reveal
                                as="li"
                                key={item.title}
                                delay={i * 60}
                                className={cx(
                                    "flex",
                                    feature &&
                                        "col-span-full lg:col-span-2 lg:row-span-2",
                                    wide && "col-span-full sm:col-span-2",
                                )}
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelected(item)}
                                    aria-haspopup="dialog"
                                    className={cx(
                                        "group relative flex w-full cursor-pointer flex-col justify-between gap-6 overflow-hidden rounded-card p-5 text-left transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-float sm:p-6",
                                        tileClass(i, items.length),
                                        feature && "lg:p-8",
                                        wide &&
                                            "flex-row items-center justify-start gap-4",
                                    )}
                                >
                                    <span
                                        className={cx(
                                            "grid shrink-0 place-items-center rounded-full",
                                            feature
                                                ? "size-12 bg-white/15"
                                                : "size-10 bg-sand text-green",
                                            wide && "bg-white/60 text-mint-ink",
                                        )}
                                    >
                                        <Icon
                                            name={item.icon}
                                            size={feature ? 22 : 18}
                                        />
                                    </span>
                                    <span className="flex-1">
                                        <span
                                            className={cx(
                                                "block font-medium",
                                                feature
                                                    ? "font-display text-[clamp(1.5rem,1.2rem+0.8vw,2rem)] leading-[1.15] font-normal"
                                                    : "text-[0.9375rem]",
                                            )}
                                        >
                                            {item.title}
                                        </span>
                                        {item.summary ? (
                                            <span
                                                className={cx(
                                                    "mt-1.5 block text-sm",
                                                    feature
                                                        ? "text-white/80"
                                                        : "opacity-80",
                                                )}
                                            >
                                                {item.summary}
                                            </span>
                                        ) : null}
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className={cx(
                                            "grid size-8 shrink-0 place-items-center rounded-full border border-current opacity-60 transition-all group-hover:opacity-100 group-hover:[&>svg]:translate-x-0.5",
                                            !wide && "self-end",
                                        )}
                                    >
                                        <Icon
                                            name="arrowRight"
                                            size={15}
                                            className="transition-transform"
                                        />
                                    </span>
                                </button>
                            </Reveal>
                        );
                    })}
                </ul>
            </div>

            <ServiceModal
                service={selected}
                onClose={() => setSelected(null)}
            />
        </section>
    );
}
