import { useId, useRef, useState } from "react";
import type { ComponentProps } from "react";
import { Icon } from "../components/icons/Icon";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { brand, contact, contact_form } from "../content/site";
import { buildWhatsAppLink } from "../lib/whatsapp";

/* Classes reaproveitadas pelos campos do formulário */
const LABEL = "text-lg text-ink";
const FIELD = "grid content-start gap-2";
const INPUT =
    "min-h-12 w-full rounded-field border border-line-strong bg-white px-4 py-3 text-base text-ink transition-[border-color,box-shadow] duration-150 placeholder:text-[#8a8cab] focus:border-green focus:shadow-[0_0_0_3px_rgb(59_63_140/0.2)] focus:outline-none aria-[invalid=true]:border-error";

interface ContactForm {
    name: string;
    visitFor: string;
    period: string;
    message: string;
}

type SubmitHandler = NonNullable<ComponentProps<"form">["onSubmit"]>;

const INITIAL_FORM: ContactForm = {
    name: "",
    visitFor: contact_form.forOptions[0].value,
    period: contact_form.periodOptions[0].value,
    message: "",
};

const labelOf = (options: { value: string; label: string }[], value: string) =>
    options.find((option) => option.value === value)?.label ?? value;

function buildMessage(form: ContactForm): string {
    const lines = [
        `Olá! Gostaria de agendar uma visita à ${brand.name}.`,
        "",
        `Nome: ${form.name.trim()}`,
        `A visita é para: ${labelOf(contact_form.forOptions, form.visitFor).toLowerCase()}`,
        `Melhor período: ${labelOf(contact_form.periodOptions, form.period).toLowerCase()}`,
    ];
    if (form.message.trim()) lines.push("", form.message.trim());
    return lines.join("\n");
}

export function Contact() {
    const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
    const [nameError, setNameError] = useState<string | null>(null);
    const [sentLink, setSentLink] = useState<string | null>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const id = useId();

    const update = <K extends keyof ContactForm>(
        key: K,
        value: ContactForm[K],
    ) => {
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
            id="contact"
            className="bg-forest section-y text-cream [--focus-ring:var(--color-cream)]"
            aria-labelledby="contact-title"
        >
            <div className="wrapper grid items-center gap-[clamp(2.5rem,6vw,5.5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
                <Reveal>
                    <p className="eyebrow text-sage">{contact_form.eyebrow}</p>
                    <h2
                        id="contact-title"
                        className="mt-4 mb-5 max-w-[16ch] heading-lg text-cream"
                    >
                        {contact_form.title}
                    </h2>
                    <p className="max-w-120 leading-[1.7] text-cream/80">
                        {contact_form.lead}
                    </p>

                    <ul className="mt-9 grid gap-4">
                        <li>
                            <a
                                className="group inline-flex items-center gap-3.5 text-cream no-underline"
                                href={buildWhatsAppLink(
                                    contact.whatsappNumber,
                                    contact.greeting,
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="grid size-11 place-items-center rounded-full border border-cream/30">
                                    <Icon name="phone" size={18} />
                                </span>
                                <span className="underline-offset-4 group-hover:underline">
                                    <span className="block text-xs text-sage">
                                        WhatsApp
                                    </span>
                                    {contact.whatsappDisplay}
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="group inline-flex items-center gap-3.5 text-cream no-underline"
                                href={`mailto:${contact.email}`}
                            >
                                <span className="grid size-11 place-items-center rounded-full border border-cream/30">
                                    <Icon name="mail" size={18} />
                                </span>
                                <span className="underline-offset-4 group-hover:underline">
                                    <span className="block text-xs text-sage">
                                        E-mail
                                    </span>
                                    {contact.email}
                                </span>
                            </a>
                        </li>
                    </ul>
                </Reveal>

                <Reveal
                    delay={150}
                    className="@container rounded-panel bg-cream p-[clamp(1.5rem,3.5vw,2.5rem)] text-ink [--focus-ring:var(--color-green)]"
                >
                    <form
                        className="grid gap-5.5"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className={FIELD}>
                            <label className={LABEL} htmlFor={`${id}-name`}>
                                Seu nome
                            </label>
                            <input
                                ref={nameRef}
                                id={`${id}-name`}
                                className={INPUT}
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
                                    className="text-[0.8125rem] text-error"
                                >
                                    {nameError}
                                </p>
                            ) : null}
                        </div>

                        <div className="grid gap-x-4 gap-y-5.5 @lg:grid-cols-[auto_minmax(0,1fr)]">
                            <fieldset className="m-0 grid min-w-0 content-start gap-2 border-0 p-0">
                                <legend className={LABEL}>
                                    A visita é para
                                </legend>
                                <div className="flex flex-nowrap gap-2">
                                    {contact_form.forOptions.map((option) => (
                                        <label key={option.value}>
                                            <input
                                                type="radio"
                                                className="peer sr-only"
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
                                            <span className="mt-0.5 inline-flex min-h-12 cursor-pointer items-center rounded-lg border border-line-strong bg-white px-4.5 text-[0.9375rem] transition-colors duration-150 peer-checked:border-green peer-checked:bg-green peer-checked:text-cream peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-green hover:border-green">
                                                {option.label}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </fieldset>

                            <div className={FIELD}>
                                <label
                                    className={LABEL}
                                    htmlFor={`${id}-period`}
                                >
                                    Melhor período
                                </label>
                                <select
                                    id={`${id}-period`}
                                    className={`${INPUT} cursor-pointer select-chevron pr-11`}
                                    value={form.period}
                                    onChange={(event) =>
                                        update("period", event.target.value)
                                    }
                                >
                                    {contact_form.periodOptions.map(
                                        (option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </option>
                                        ),
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className={FIELD}>
                            <label className={LABEL} htmlFor={`${id}-message`}>
                                Mensagem{" "}
                                <span className="font-normal text-muted">
                                    (opcional)
                                </span>
                            </label>
                            <textarea
                                id={`${id}-message`}
                                className={`${INPUT} min-h-27 resize-y leading-[1.55]`}
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
                                <p className="flex gap-2.5 rounded-field bg-mint px-4 py-3.5 text-[0.9375rem] leading-[1.55] text-mint-ink">
                                    <Icon
                                        name="check"
                                        size={18}
                                        className="mt-0.5 shrink-0"
                                    />
                                    <span>
                                        Sua mensagem foi aberta no WhatsApp. É
                                        só tocar em enviar por lá.{" "}
                                        <a
                                            className="font-semibold text-inherit"
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
                </Reveal>
            </div>
        </section>
    );
}
