import { contact } from "../../content/site";
import { buildWhatsAppLink } from "../../lib/whatsapp";
import { Icon } from "../icons/Icon";
import styles from "./WhatsAppFab.module.css";

export function WhatsAppFab() {
    return (
        <a
            className={styles.fab}
            href={buildWhatsAppLink(contact.whatsappNumber, contact.greeting)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar com a equipe pelo WhatsApp"
        >
            <Icon name="message" size={22}/>
        </a>
    );
}
