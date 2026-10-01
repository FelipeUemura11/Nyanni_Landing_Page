import { Icon } from "../components/icons/Icon";
import { careProfiles } from "../content/site";
import styles from "./CareProfiles.module.css";

export function CareProfiles() {
    return (
        <section
            id="cuidados"
            className={styles.section}
            aria-labelledby="cuidados-title"
        >
            <div className="container">
                <h2
                    id="cuidados-title"
                    className={`heading-lg ${styles.title}`}
                >
                    {careProfiles.title}
                </h2>

                <ul className={styles.grid}>
                    {careProfiles.items.map((profile) => (
                        <li key={profile.title} className={styles.card}>
                            <span className={styles.icon}>
                                <Icon name={profile.icon} size={18} />
                            </span>
                            <h3 className={styles.cardTitle}>
                                {profile.title}
                            </h3>
                            <p className={styles.cardText}>
                                {profile.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
