import { Icon } from "../components/icons/Icon";
import { Reveal } from "../components/ui/Reveal";
import { pillars } from "../content/site";

export function Pillars() {
    return (
        <section className="border-y border-line bg-sand">
            <ul className="wrapper grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-4 md:gap-6">
                {pillars.map((pillar, i) => (
                    <Reveal
                        as="li"
                        key={pillar.title}
                        delay={i * 100}
                        className="flex flex-col items-center gap-3 text-center text-sm tracking-[0.02em] text-ink"
                    >
                        <span className="grid size-10 place-items-center rounded-full bg-cream text-green">
                            <Icon name={pillar.icon} size={18} />
                        </span>
                        {pillar.title}
                    </Reveal>
                ))}
            </ul>
        </section>
    );
}
