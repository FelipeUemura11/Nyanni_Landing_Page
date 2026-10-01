import { Photo } from "../components/ui/Photo";
import { Reveal } from "../components/ui/Reveal";
import { about } from "../content/site";

export function About() {
    const [first, ...rest] = about.paragraphs;

    return (
        <section
            id="about"
            className="section-y"
            aria-labelledby="filosofia-title"
        >
            <div className="wrapper grid items-center gap-[clamp(2.5rem,6vw,5.5rem)] lg:grid-cols-2">
                <Reveal>
                    <p className="eyebrow text-body">{about.eyebrow}</p>
                    <h2
                        id="filosofia-title"
                        className="mt-4 mb-6 max-w-[20ch] heading-lg text-ink"
                    >
                        {about.title}
                    </h2>
                    <p className="mb-4 max-w-136 leading-[1.75] text-body">
                        {first}
                    </p>
                    {rest.map((paragraph) => (
                        <p
                            key={paragraph}
                            className="mb-4 max-w-136 text-[0.9375rem] leading-[1.75] text-body"
                        >
                            {paragraph}
                        </p>
                    ))}
                </Reveal>

                <Reveal delay={150}>
                    <Photo
                        className="aspect-4/3 rounded-card shadow-photo"
                        src={about.image.src}
                        alt={about.image.alt}
                    />
                </Reveal>
            </div>
        </section>
    );
}
