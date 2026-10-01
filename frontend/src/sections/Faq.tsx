import { Icon } from "../components/icons/Icon";
import { faq } from "../content/site";

export function Faq() {
    return (
        <section
            id="faq"
            className="bg-sand section-y"
            aria-labelledby="faq-title"
        >
            <div className="wrapper grid items-start gap-[clamp(2rem,6vw,5.5rem)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                <div>
                    <h2 id="faq-title" className="heading-lg text-ink">
                        {faq.title}
                    </h2>
                    <p className="mt-4 mb-6 max-w-104 leading-[1.7] text-body">
                        {faq.intro}
                    </p>
                    <a
                        className="text-[0.9375rem] font-medium text-green-dark underline decoration-green/40 underline-offset-4 hover:decoration-current"
                        href="#contact"
                    >
                        Ficou alguma dúvida? Fale com a equipe
                    </a>
                </div>

                <div className="border-t border-line-strong">
                    {faq.items.map((item) => (
                        <details
                            key={item.question}
                            className="group border-b border-line-strong"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[1.0625rem] font-medium text-ink [&::-webkit-details-marker]:hidden">
                                {item.question}
                                <Icon
                                    name="chevronDown"
                                    size={20}
                                    className="shrink-0 text-green transition-transform duration-250 ease-soft group-open:rotate-180"
                                />
                            </summary>
                            <p className="max-w-152 pr-10 pb-6 leading-[1.7] text-body">
                                {item.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
