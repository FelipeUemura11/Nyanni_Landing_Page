import { useState } from "react";
import { cx } from "../../lib/cx";
import styles from "./Photo.module.css";

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
                className={cx(styles.placeholder, className)}
            >
                <span aria-hidden="true">Foto do espaço</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={cx(styles.photo, className)}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            onError={() => setFailed(true)}
        />
    );
}
