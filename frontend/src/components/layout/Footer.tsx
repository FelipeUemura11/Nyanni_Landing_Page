import { brand, footer } from "../../content/site";
import styles from "./Footer.module.css";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.top}`}>
                <div className={styles.about}>
                    <p className={styles.brand}>{brand.fullName}</p>
                    <p className={styles.tagline}>{brand.tagline}</p>
                </div>

                {footer.columns.map((column) => (
                    <nav key={column.title} aria-label={column.title}>
                        <h2 className={styles.colTitle}>{column.title}</h2>
                        <ul className={styles.links}>
                            {column.links.map((link) => (
                                <li key={link.label}>
                                    <a className={styles.link} href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}
            </div>

            <div className={`container ${styles.bottom}`}>
                <p>
                    © {year} {brand.fullName}. Todos os direitos reservados.{" "}
                    {footer.credits}
                </p>
            </div>
        </footer>
    );
}
