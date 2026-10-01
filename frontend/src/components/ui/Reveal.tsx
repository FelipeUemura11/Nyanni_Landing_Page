import type { CSSProperties, ElementType, HTMLAttributes } from "react";
import { useInView } from "../../hooks/useInView";
import { cx } from "../../lib/cx";

interface RevealProps extends HTMLAttributes<HTMLElement> {
    /** Tag HTML que será renderizada (padrão: div). */
    as?: ElementType;
    /** Atraso em ms. Use `i * 100` para escalonar itens de uma lista. */
    delay?: number;
}

/**
 * Faz o conteúdo surgir (fade + leve subida) quando entra na tela ao rolar.
 * O visual fica na classe `reveal` do index.css; aqui só detectamos a entrada
 * e ligamos o atributo data-revealed.
 */
export function Reveal({
    as: Component = "div",
    delay = 0,
    className,
    style,
    ...rest
}: RevealProps) {
    const [ref, revealed] = useInView<HTMLElement>();

    return (
        <Component
            ref={ref}
            data-revealed={revealed}
            className={cx("reveal", className)}
            style={
                { "--reveal-delay": `${delay}ms`, ...style } as CSSProperties
            }
            {...rest}
        />
    );
}
