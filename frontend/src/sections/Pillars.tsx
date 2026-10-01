import { Icon } from "../components/icons/Icon";
import { pillars } from "../content/site";
import styles from "./Pillars.module.css";

export function Pillars() {
    return (
        <section
            id="experiencia"
            className={styles.strip}
            aria-labelledby="experiencia-title"
        >
            <h2 id="experiencia-title" className="visually-hidden">
                Como é viver na Nyanni
            </h2>
            <ul className={`container ${styles.list}`}>
                {pillars.map((pillar) => (
                    <li key={pillar.title} className={styles.item}>
                        <span className={styles.icon}>
                            <Icon name={pillar.icon} size={18} />
                        </span>
                        {pillar.title}
                    </li>
                ))}
            </ul>
        </section>
    );
}
