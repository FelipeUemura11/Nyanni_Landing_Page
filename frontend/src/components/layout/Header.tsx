import { useEffect, useRef, useState } from "react";
import { brand, contact, hero, navigation } from "../../content/site";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrolled } from "../../hooks/useScrolled";
import { cx } from "../../lib/cx";
import { buildWhatsAppLink } from "../../lib/whatsapp";
import { Icon } from "../icons/Icon";
import { Button } from "../ui/Button";

const SECTION_IDS = ["inicio", ...navigation.map((item) => item.href.slice(1))];
const DESKTOP_QUERY = "(min-width: 1024px)"; // breakpoint `lg` do Tailwind
const whatsappHref = buildWhatsAppLink(
    contact.whatsappNumber,
    contact.greeting,
);

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleRef = useRef<HTMLButtonElement>(null);
    const scrolled = useScrolled();
    const activeId = useActiveSection(SECTION_IDS);

    useEffect(() => {
        if (!menuOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
                toggleRef.current?.focus();
            }
        };
        const desktop = window.matchMedia(DESKTOP_QUERY);
        const onViewportChange = (event: MediaQueryListEvent) => {
            if (event.matches) setMenuOpen(false);
        };

        document.addEventListener("keydown", onKeyDown);
        desktop.addEventListener("change", onViewportChange);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            desktop.removeEventListener("change", onViewportChange);
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);
    const isActive = (href: string) =>
        activeId !== null && href === `#${activeId}`;

    return (
        <header
            className={cx(
                "sticky top-0 z-50 border-b bg-cream/90 backdrop-blur-md backdrop-saturate-[1.4] transition-colors duration-250 ease-soft",
                scrolled || menuOpen ? "border-line" : "border-transparent",
            )}
        >
            <div className="wrapper flex h-18 items-center gap-8">
                <a
                    href="#inicio"
                    className="flex items-center gap-2.5 font-display text-3xl leading-none font-normal tracking-normal text-ink no-underline lg:text-5xl"
                    aria-label={`${brand.fullName}, voltar ao início`}
                >
                    <img
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt=""
                        className="h-11 w-auto lg:h-14"
                    />
                    {brand.name}
                </a>

                <nav className="mx-auto hidden lg:block" aria-label="Principal">
                    <ul className="flex gap-[clamp(1rem,2.2vw,2rem)]">
                        {navigation.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        aria-current={
                                            active ? "true" : undefined
                                        }
                                        className={cx(
                                            "relative inline-block py-1.5 text-sm no-underline transition-colors duration-150 hover:text-ink",
                                            "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-green after:transition-transform after:duration-250",
                                            active
                                                ? "text-ink after:scale-x-100"
                                                : "text-body after:scale-x-0",
                                        )}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="hidden items-center gap-6 lg:flex">
                    <a
                        className="text-sm text-body no-underline transition-colors duration-150 hover:text-ink"
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Falar conosco
                    </a>
                    <Button size="sm" href={hero.primaryCta.href}>
                        {hero.primaryCta.label}
                    </Button>
                </div>

                <button
                    ref={toggleRef}
                    type="button"
                    className="ml-auto inline-grid size-11 cursor-pointer place-items-center rounded-full border border-line-strong bg-transparent text-ink lg:hidden"
                    aria-expanded={menuOpen}
                    aria-controls="menu-mobile"
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <Icon name={menuOpen ? "close" : "menu"} size={22} />
                </button>
            </div>

            <div
                id="menu-mobile"
                className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-cream pt-2 pb-8 lg:hidden"
                hidden={!menuOpen}
            >
                <nav className="wrapper" aria-label="Principal (celular)">
                    <ul className="grid">
                        {navigation.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        aria-current={
                                            active ? "true" : undefined
                                        }
                                        onClick={closeMenu}
                                        className={cx(
                                            "block border-b border-line py-4 text-[1.0625rem] no-underline",
                                            active ? "text-green" : "text-ink",
                                        )}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="mt-7 grid gap-3">
                        <Button
                            href={hero.primaryCta.href}
                            block
                            onClick={closeMenu}
                        >
                            {hero.primaryCta.label}
                        </Button>
                        <Button
                            variant="outline"
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            block
                        >
                            Falar conosco
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
