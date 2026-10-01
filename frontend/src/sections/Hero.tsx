import { Icon } from "../components/icons/Icon";
import { Button } from "../components/ui/Button";
import { Photo } from "../components/ui/Photo";
import { hero } from "../content/site";

export function Hero() {
    return (
        <section
            id="inicio"
            className="pt-[clamp(2.5rem,7vw,6rem)] pb-[clamp(4rem,8vw,7rem)]"
            aria-labelledby="hero-title"
        >
            <div className="wrapper grid items-center gap-[clamp(2.5rem,6vw,5.5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
                <div className="animate-rise motion-reduce:animate-none">
                    <h1
                        id="hero-title"
                        className="mb-6 font-display text-[clamp(2.75rem,1.5rem+4vw,4.5rem)] leading-[1.04] font-normal tracking-[-0.02em] text-ink"
                    >
                        <span className="block">{hero.titleLine}</span>{" "}
                        {hero.titlePrefix}{" "}
                        <em className="text-green-deep italic">{hero.titleAccent}</em>
                    </h1>
                    <p className="mb-9 max-w-[33rem] text-[clamp(1rem,0.95rem+0.3vw,1.125rem)] leading-[1.7] text-body">
                        {hero.lead}
                    </p>
                    <div className="flex flex-wrap gap-3.5">
                        <Button href={hero.primaryCta.href} className="max-[420px]:w-full">
                            {hero.primaryCta.label}
                            <Icon name="arrowRight" size={16} />
                        </Button>
                        <Button
                            variant="outline"
                            href={hero.secondaryCta.href}
                            className="max-[420px]:w-full"
                        >
                            {hero.secondaryCta.label}
                        </Button>
                    </div>
                </div>

                <div className="animate-rise-late motion-reduce:animate-none">
                    <Photo
                        className="aspect-[4/3.6] max-h-[680px] rounded-card object-[center_30%] shadow-photo lg:aspect-[3/4] lg:object-center"
                        src={hero.image.src}
                        alt={hero.image.alt}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
