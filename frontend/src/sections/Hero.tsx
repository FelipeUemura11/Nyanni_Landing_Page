import { Icon } from "../components/icons/Icon";
import { Button } from "../components/ui/Button";
import { Photo } from "../components/ui/Photo";
import { hero } from "../content/site";
import styles from "./Hero.module.css";

export function Hero() {
    return (
        <section
            id="inicio"
            className={styles.hero}
            aria-labelledby="hero-title"
        >
            <div className={`container ${styles.grid}`}>
                <div className={styles.copy}>
                    <h1 id="hero-title" className={styles.title}>
                        <span className={styles.line}>{hero.titleLine}</span>{" "}
                        {hero.titlePrefix} <em>{hero.titleAccent}</em>
                    </h1>
                    <p className={styles.lead}>{hero.lead}</p>
                    <div className={styles.actions}>
                        <Button href={hero.primaryCta.href}>
                            {hero.primaryCta.label}
                            <Icon name="arrowRight" size={16} />
                        </Button>
                        <Button variant="outline" href={hero.secondaryCta.href}>
                            {hero.secondaryCta.label}
                        </Button>
                    </div>
                </div>

                <div className={styles.media}>
                    <Photo
                        className={styles.photo}
                        src={hero.image.src}
                        alt={hero.image.alt}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
