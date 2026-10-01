import { brand, footer } from "../../content/site";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-mist pt-[clamp(3rem,6vw,4.5rem)]">
            <div className="wrapper grid grid-cols-2 gap-8 pb-[clamp(2.5rem,5vw,3.5rem)] sm:grid-cols-3 md:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,0.6fr))]">
                <div className="col-span-full md:col-span-1">
                    <p className="mb-4 font-display text-2xl leading-[1.2] text-ink">
                        {brand.fullName}
                    </p>
                    <p className="max-w-88 text-[0.9375rem] leading-[1.65] text-body">
                        {brand.tagline}
                    </p>
                </div>

                {footer.columns.map((column) => (
                    <nav key={column.title} aria-label={column.title}>
                        <h2 className="mb-4 text-[0.8125rem] font-semibold text-ink">
                            {column.title}
                        </h2>
                        <ul className="grid gap-2.5">
                            {column.links.map((link) => (
                                <li key={link.label}>
                                    <a
                                        className="text-sm text-body no-underline underline-offset-3 hover:text-ink hover:underline"
                                        href={link.href}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}
            </div>

            {/* pb maior no celular para o botão flutuante não cobrir o texto */}
            <div className="wrapper border-t border-[#dadcd3] pt-6 pb-22 text-center text-[0.8125rem] text-body sm:pb-8">
                <p>
                    © {year} {brand.fullName}. Todos os direitos reservados.{" "}
                    {footer.credits}
                </p>
            </div>
        </footer>
    );
}
