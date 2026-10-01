import { Icon } from "../components/icons/Icon";
import { services } from "../content/site";
import { cx } from "../lib/cx";
import styles from "./Services.module.css";

export function Services() {
    const { feature, highlight, items } = services;

    return (
        <section
            id="estrutura"
            className={styles.section}
            aria-labelledby="estrutura-title"
        >
            <div className="container">
                <header className={styles.header}>
                    <h2 id="estrutura-title" className="heading-lg">
                        {services.title}
                    </h2>
                    <p className={styles.subtitle}>{services.subtitle}</p>
                </header>

                <ul className={styles.grid}>
                    <li
                        className={cx(
                            styles.feature,
                            feature.image && styles.featureWithImage,
                        )}
                    >
                        {feature.image ? (
                            <img
                                className={styles.featureImage}
                                src={feature.image.src}
                                alt={feature.image.alt}
                                loading="lazy"
                            />
                        ) : null}
                        <div className={styles.featureContent}>
                            <h3 className={styles.featureTitle}>
                                {feature.title}
                            </h3>
                            <p className={styles.featureText}>
                                {feature.description}
                            </p>
                        </div>
                    </li>

                    <li className={styles.highlight}>
                        <span className={styles.highlightIcon}>
                            <Icon name={highlight.icon} size={20} />
                        </span>
                        <div>
                            <h3 className={styles.highlightTitle}>
                                {highlight.title}
                            </h3>
                            <p className={styles.highlightText}>
                                {highlight.description}
                            </p>
                        </div>
                    </li>

                    {items.map((item) => (
                        <li key={item.title} className={styles.tile}>
                            <Icon name={item.icon} size={20} />
                            <h3 className={styles.tileTitle}>{item.title}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
