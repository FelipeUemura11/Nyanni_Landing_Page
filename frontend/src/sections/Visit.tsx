import { useId, useRef, useState } from "react";
import type { ComponentProps } from "react";
import { Icon } from "../components/icons/Icon";
import { Button } from "../components/ui/Button";
import { brand, contact, visit } from "../content/site";
import { buildWhatsAppLink } from "../lib/whatsapp";
import styles from "./Visit.module.css";

interface VisitForm {
    name: string;
    visitFor: string;
    period: string;
    message: string;
}

type SubmitHandler = NonNullable<ComponentProps<"form">["onSubmit"]>;

const INITIAL_FORM: VisitForm = {
    name: "",
    visitFor: visit.forOptions[0].value,
    period: visit.periodOptions[0].value,
    message: "",
};

const labelOf = (options: { value: string; label: string }[], value: string) =>
    options.find((option) => option.value === value)?.label ?? value;

function buildMessage(form: VisitForm): string {
    const lines = [
        `Olá! Gostaria de agendar uma visita à ${brand.name}.`,
        "",
        `Nome: ${form.name.trim()}`,
        `A visita é para: ${labelOf(visit.forOptions, form.visitFor).toLowerCase()}`,
        `Melhor período: ${labelOf(visit.periodOptions, form.period).toLowerCase()}`,
    ];
    if (form.message.trim()) lines.push("", form.message.trim());
    return lines.join("\n");
}

export function Visit() {
    const [form, setForm] = useState<VisitForm>(INITIAL_FORM);
    const [nameError, setNameError] = useState<string | null>(null);
    const [sentLink, setSentLink] = useState<string | null>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const id = useId();

    const update = <K extends keyof VisitForm>(key: K, value: VisitForm[K]) => {
        setForm((current) => ({ ...current, [key]: value }));
        if (key === "name" && nameError) setNameError(null);
    };

    const handleSubmit: SubmitHandler = (event) => {
        event.preventDefault();

        if (form.name.trim().length < 2) {
            setNameError(
                "Informe seu nome para a equipe saber com quem vai conversar.",
            );
            nameRef.current?.focus();
            return;
        }

        const link = buildWhatsAppLink(
            contact.whatsappNumber,
            buildMessage(form),
        );
        window.open(link, "_blank", "noopener,noreferrer");
        setSentLink(link);
    };

    return (
        <section
            id="agendar"
            className={styles.section}
            aria-labelledby="agendar-title"
        >
            <div className={`container ${styles.grid}`}>
                <div className={styles.copy}>
                    <p className={`eyebrow ${styles.eyebrow}`}>
                        {visit.eyebrow}
                    </p>
                    <h2
                        id="agendar-title"
                        className={`heading-lg ${styles.title}`}
                    >
                        {visit.title}
                    </h2>
                    <p className={styles.lead}>{visit.lead}</p>

                    <ul className={styles.contactList}>
                        <li>
                            <a
                                className={styles.contactLink}
                                href={buildWhatsAppLink(
                                    contact.whatsappNumber,
                                    contact.greeting,
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className={styles.contactIcon}>
                                    <Icon name="phone" size={18} />
                                </span>
                                <span>
                                    <span className={styles.contactLabel}>
                                        WhatsApp
                                    </span>
                                    {contact.whatsappDisplay}
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className={styles.contactLink}
                                href={`mailto:${contact.email}`}
                            >
                                <span className={styles.contactIcon}>
                                    <Icon name="mail" size={18} />
                                </span>
                                <span>
                                    <span className={styles.contactLabel}>
                                        E-mail
                                    </span>
                                    {contact.email}
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className={styles.field}>
                            <label
                                className={styles.label}
                                htmlFor={`${id}-name`}
                            >
                                Seu nome
                            </label>
                            <input
                                ref={nameRef}
                                id={`${id}-name`}
                                className={styles.input}
                                type="text"
                                autoComplete="name"
                                value={form.name}
                                onChange={(event) =>
                                    update("name", event.target.value)
                                }
                                aria-invalid={nameError ? true : undefined}
                                aria-describedby={
                                    nameError ? `${id}-name-error` : undefined
                                }
                                required
                            />
                            {nameError ? (
                                <p
                                    id={`${id}-name-error`}
                                    className={styles.error}
                                >
                                    {nameError}
                                </p>
                            ) : null}
                        </div>

                        <div className={styles.row}>
                            <fieldset className={styles.fieldset}>
                                <legend className={styles.label}>
                                    A visita é para
                                </legend>
                                <div className={styles.choices}>
                                    {visit.forOptions.map((option) => (
                                        <label
                                            key={option.value}
                                            className={styles.choice}
                                        >
                                            <input
                                                type="radio"
                                                className="visually-hidden"
                                                name={`${id}-for`}
                                                value={option.value}
                                                checked={
                                                    form.visitFor ===
                                                    option.value
                                                }
                                                onChange={() =>
                                                    update(
                                                        "visitFor",
                                                        option.value,
                                                    )
                                                }
                                            />
                                            <span>{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </fieldset>

                            <div className={styles.field}>
                                <label
                                    className={styles.label}
                                    htmlFor={`${id}-period`}
                                >
                                    Melhor período
                                </label>
                                <select
                                    id={`${id}-period`}
                                    className={`${styles.input} ${styles.select}`}
                                    value={form.period}
                                    onChange={(event) =>
                                        update("period", event.target.value)
                                    }
                                >
                                    {visit.periodOptions.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label
                                className={styles.label}
                                htmlFor={`${id}-message`}
                            >
                                Mensagem{" "}
                                <span className={styles.optional}>
                                    (opcional)
                                </span>
                            </label>
                            <textarea
                                id={`${id}-message`}
                                className={`${styles.input} ${styles.textarea}`}
                                rows={3}
                                placeholder="Conte um pouco sobre a rotina ou as necessidades de quem vai morar aqui."
                                value={form.message}
                                onChange={(event) =>
                                    update("message", event.target.value)
                                }
                            />
                        </div>

                        <Button type="submit" block>
                            Enviar pelo WhatsApp
                            <Icon name="arrowRight" size={16} />
                        </Button>

                        <div aria-live="polite">
                            {sentLink ? (
                                <p className={styles.status}>
                                    <Icon name="check" size={18} />
                                    <span>
                                        Sua mensagem foi aberta no WhatsApp. É
                                        só tocar em enviar por lá.{" "}
                                        <a
                                            href={sentLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Abrir de novo
                                        </a>
                                    </span>
                                </p>
                            ) : null}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
