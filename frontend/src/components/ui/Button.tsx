import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
} from "react";
import { cx } from "../../lib/cx";

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

// A cor da borda fica só nas variantes: duas classes de border-color na
// mesma string conflitam e o Tailwind não garante qual vence.
// O brilho é um ::before (before:) com um degradê que fica escondido à
// esquerda e desliza até a direita no hover (igual ao projeto contabilidade).
// `overflow-hidden` recorta o brilho nas bordas arredondadas do botão.
const BASE =
    "relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border font-medium leading-none whitespace-nowrap no-underline transition-colors duration-200 ease-soft before:pointer-events-none before:absolute before:inset-y-0 before:-left-full before:w-full before:bg-linear-to-r before:from-transparent before:to-transparent before:transition-[left] before:duration-600 before:ease-out hover:before:left-full [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-0.5";

const VARIANTS: Record<Variant, string> = {
    primary:
        "border-transparent bg-green text-cream before:via-white/[0.041] hover:bg-green-dark",
    outline:
        "border-line-strong bg-white text-ink before:via-green/10 hover:border-green hover:text-green-dark",
};

const SIZES: Record<Size, string> = {
    md: "min-h-12 px-6 text-[0.9375rem]",
    sm: "min-h-10 px-[1.125rem] text-sm",
};

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
                    BASE,
                    VARIANTS[variant],
                    SIZES[size],
                    block && "w-full",
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
                BASE,
                VARIANTS[variant],
                SIZES[size],
                block && "w-full",
                className,
            )}
            {...buttonProps}
        >
            {children}
        </button>
    );
}
