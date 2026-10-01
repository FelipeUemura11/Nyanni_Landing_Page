import { contact } from "../../content/site";
import { buildWhatsAppLink } from "../../lib/whatsapp";
import { Icon } from "../icons/Icon";

export function WhatsAppFab() {
    return (
        <a
            className="fixed right-[clamp(1rem,3vw,2rem)] bottom-[clamp(1rem,3vw,2rem)] z-40 grid size-14 animate-float place-items-center rounded-full bg-green text-cream shadow-float transition duration-200 ease-soft hover:-translate-y-0.5 hover:bg-green-dark motion-reduce:animate-none"
            href={buildWhatsAppLink(contact.whatsappNumber, contact.greeting)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar com a equipe pelo WhatsApp"
        >
            <Icon name="message" size={22} />
        </a>
    );
}
