import { Icon } from "../components/icons/Icon";
import { careProfiles } from "../content/site";

export function CareProfiles() {
    return (
        <section
            id="cuidados"
            className="section-y bg-sand"
            aria-labelledby="cuidados-title"
        >
            <div className="wrapper">
                <h2
                    id="cuidados-title"
                    className="heading-lg mb-[clamp(2rem,4vw,3rem)] text-center text-ink"
                >
                    {careProfiles.title}
                </h2>

                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {careProfiles.items.map((profile) => (
                        <li
                            key={profile.title}
                            className="flex flex-col gap-2.5 rounded-card border border-line bg-cream px-[1.375rem] pt-6 pb-7"
                        >
                            <span className="mb-3.5 grid size-10 place-items-center rounded-full bg-tile text-ink">
                                <Icon name={profile.icon} size={18} />
                            </span>
                            <h3 className="text-base leading-[1.35] font-medium text-ink">
                                {profile.title}
                            </h3>
                            <p className="text-sm leading-[1.6] text-muted">
                                {profile.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
