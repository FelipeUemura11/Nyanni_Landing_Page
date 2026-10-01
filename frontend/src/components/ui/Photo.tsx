import { useState } from "react";
import { cx } from "../../lib/cx";

interface PhotoProps {
    src?: string;
    alt: string;
    className?: string;
    priority?: boolean;
}

/**
 * Imagem com fallback: se o arquivo não existir (ex.: fotos reais ainda não
 * entregues), mostra um bloco neutro no lugar em vez de um ícone quebrado.
 */
export function Photo({ src, alt, className, priority = false }: PhotoProps) {
    const [failed, setFailed] = useState(false);

    if (!src || failed) {
        return (
            <div
                role="img"
                aria-label={alt}
                className={cx(
                    "grid min-h-[200px] w-full place-items-center bg-linear-160 from-sand to-tile text-[0.8125rem] tracking-[0.02em] text-muted",
                    className,
                )}
            >
                <span aria-hidden="true">Foto do espaço</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={cx("block h-full w-full bg-sand object-cover", className)}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            onError={() => setFailed(true)}
        />
    );
}
