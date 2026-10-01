/**
 * Monta um link wa.me com mensagem pré-preenchida.
 * @param phone Número com DDI e DDD (qualquer formatação; só os dígitos são usados)
 */
export function buildWhatsAppLink(phone: string, message?: string): string {
    const digits = phone.replace(/\D/g, "");
    const base = `https://wa.me/${digits}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function buildMailtoLink(
    email: string,
    subject: string,
    body: string,
): string {
    const params = new URLSearchParams({ subject, body });
    // URLSearchParams codifica espaço como "+", que clientes de e-mail não interpretam
    return `mailto:${email}?${params.toString().replace(/\+/g, "%20")}`;
}
