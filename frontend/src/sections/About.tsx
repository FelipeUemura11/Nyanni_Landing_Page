import { Photo } from "../components/ui/Photo";
import { about } from "../content/site";
import { cx } from "../lib/cx";
import styles from "./About.module.css";

export function About() {
    const [first, ...rest] = about.paragraphs;

    return (
        <section
            id="a-nyanni"
            className={styles.section}
            aria-labelledby="filosofia-title"
        >
            <div className={`container ${styles.grid}`}>
                <div>
                    <p className="eyebrow">{about.eyebrow}</p>
                    <h2
                        id="filosofia-title"
                        className={cx("heading-lg", styles.title)}
                    >
                        {about.title}
                    </h2>
                    <p className={styles.text}>{first}</p>
                    {rest.map((paragraph) => (
                        <p key={paragraph} className={styles.textSecondary}>
                            {paragraph}
                        </p>
                    ))}
                </div>

                <Photo
                    className={styles.photo}
                    src={about.image.src}
                    alt={about.image.alt}
                />
            </div>
        </section>
    );
}
