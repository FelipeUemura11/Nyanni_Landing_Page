import { Icon } from "../components/icons/Icon";
import { faq } from "../content/site";
import styles from "./Faq.module.css";

export function Faq() {
    return (
        <section
            id="faq"
            className={styles.section}
            aria-labelledby="faq-title"
        >
            <div className={`container ${styles.grid}`}>
                <div className={styles.intro}>
                    <h2 id="faq-title" className="heading-lg">
                        {faq.title}
                    </h2>
                    <p>{faq.intro}</p>
                    <a className={styles.moreLink} href="#agendar">
                        Ficou alguma dúvida? Fale com a equipe
                    </a>
                </div>

                <div className={styles.list}>
                    {faq.items.map((item) => (
                        <details key={item.question} className={styles.item}>
                            <summary className={styles.question}>
                                {item.question}
                                <Icon
                                    name="chevronDown"
                                    size={20}
                                    className={styles.chevron}
                                />
                            </summary>
                            <p className={styles.answer}>{item.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
