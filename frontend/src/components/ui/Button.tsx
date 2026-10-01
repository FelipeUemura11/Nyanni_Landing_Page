import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
} from "react";
import { cx } from "../../lib/cx";
import styles from "./Button.module.css";

type Variant = "primary" | "outline";
type Size = "sm" | "md";

interface BaseProps {
    variant?: Variant;
    size?: Size;
    block?: boolean;
    className?: string;
    children: ReactNode;
}

type LinkProps = BaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ButtonProps = LinkProps | NativeButtonProps;

/** Botão da marca. Renderiza <a> quando recebe `href`, senão <button>. */
export function Button(props: ButtonProps) {
    if (props.href !== undefined) {
        const {
            variant = "primary",
            size = "md",
            block,
            className,
            children,
            ...anchorProps
        } = props;
        return (
            <a
                className={cx(
                    styles.button,
                    styles[variant],
                    styles[size],
                    block && styles.block,
                    className,
                )}
                {...anchorProps}
            >
                {children}
            </a>
        );
    }

    const {
        variant = "primary",
        size = "md",
        block,
        className,
        children,
        type = "button",
        ...buttonProps
    } = props;

    return (
        <button
            type={type}
            className={cx(
                styles.button,
                styles[variant],
                styles[size],
                block && styles.block,
                className,
            )}
            {...buttonProps}
        >
            {children}
        </button>
    );
}
