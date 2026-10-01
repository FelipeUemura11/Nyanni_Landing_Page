import { useEffect, useState } from "react";

/**
 * Observa as seções informadas e retorna o id da que está no centro da tela.
 * Usado para destacar o item ativo do menu.
 */
export function useActiveSection(ids: readonly string[]): string | null {
    const [activeId, setActiveId] = useState<string | null>(null);
    const key = ids.join("|");

    useEffect(() => {
        const elements = key
            .split("|")
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                }
            },
            { rootMargin: "-45% 0px -50% 0px" },
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [key]);

    return activeId;
}
