import { useEffect, useRef, useState } from "react";

/**
 * Diz quando um elemento entra na tela pela primeira vez.
 * Depois de visto, para de observar: a animação roda uma vez só.
 */
export function useInView<T extends Element>() {
    const ref = useRef<T>(null);
    // Navegador sem IntersectionObserver: mostra tudo de uma vez
    const [inView, setInView] = useState(
        () => typeof IntersectionObserver === "undefined",
    );

    useEffect(() => {
        const element = ref.current;
        if (!element || typeof IntersectionObserver === "undefined") return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setInView(true);
                observer.disconnect();
            },
            // 15% do elemento visível, com 8% de folga na borda de baixo
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return [ref, inView] as const;
}
