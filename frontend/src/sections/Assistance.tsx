import { Icon } from "../components/icons/Icon";
import { Reveal } from "../components/ui/Reveal";
import { assistance } from "../content/site";

export function Assistance() {
    return (
        <section
            id="cuidados"
            className="bg-green-dark section-y"
            aria-labelledby="cuidados-title"
        >
            <div className="wrapper">
                <Reveal
                    as="h2"
                    id="cuidados-title"
                    className="mb-[clamp(2rem,4vw,3rem)] text-center heading-lg text-white"
                >
                    {assistance.title}
                </Reveal>

                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {assistance.items.map((profile, i) => (
                        <Reveal
                            as="li"
                            key={profile.title}
                            delay={i * 100}
                            className="bg-green flex flex-col gap-2.5 rounded-card px-5.5 pt-6 pb-7"
                        >
                            <span className="mb-3.5 grid size-10 place-items-center rounded-full bg-tile text-ink">
                                <Icon name={profile.icon} size={18} />
                            </span>
                            <h3 className="text-base leading-[1.35] font-medium text-white">
                                {profile.title}
                            </h3>
                            <p className="text-sm leading-[1.6] text-muted">
                                {profile.description}
                            </p>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </section>
    );
}
