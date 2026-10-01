import { Icon } from "../components/icons/Icon";
import { testimonial } from "../content/site";


export function Testimonials(){
    return (
        <section
            id="testimonials"
            className="bg-cream section-y"
        >
            <div className="wrapper">
                <h2 id="testimonials-title" className="mb-[clamp(2rem,4vw,3rem)] text-center heading-lg text-dark">
                    {testimonial.title}
                </h2>
                <ul className="grid gap-5 sm:grid-cils-2 lg:grid-cols-4">
                    {testimonial.items.map((t) => (
                        <li 
                            key={t.id}
                            className="flex flex-col gap-2.5 rounded-card border border-line px-5.5 pt-6 pb-7">
                            <p className="text-sm leading-[1.6] text-ink">
                                {t.description}
                            </p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="grid size-10 place-items-center rounded-full bg-tile text-ink">
                                    <Icon name={t.icon} size={18} />
                                </span>
                                <h3 className="text-base leading-[1.35] font-medium text-ink">
                                    {t.name}
                                </h3>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}