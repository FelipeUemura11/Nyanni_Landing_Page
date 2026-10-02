import { useEffect, useRef } from "react";
import type { ServiceDetail } from "../../content/site";
import { Icon } from "../icons/Icon";
import { Photo } from "./Photo";

interface ServiceModalProps {
    service: ServiceDetail | null;
    onClose: () => void;
}

/** Modal nativo (<dialog>): foco preso, Esc fecha e leitores de tela entendem. */
export function ServiceModal({ service, onClose }: ServiceModalProps) {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) return;

        if (service && !dialog.open) {
            dialog.showModal();
            document.body.style.overflow = "hidden";
        }
        if (!service && dialog.open) dialog.close();

        return () => {
            document.body.style.overflow = "";
        };
    }, [service]);

    return (
        <dialog
            ref={ref}
            aria-labelledby="service-modal-title"
            className="service-modal"
            onClose={onClose}
            // Clique no fundo escurecido (o próprio <dialog>) fecha
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            {service ? (
                <div className="grid overflow-hidden rounded-panel bg-cream md:grid-cols-[1fr_1fr]">
                    <Photo
                        src={service.image?.src}
                        alt={service.image?.alt ?? service.title}
                        className="aspect-4/3 md:aspect-auto md:min-h-105"
                    />
                    <div className="relative flex flex-col gap-4 p-6 sm:p-8">
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Fechar"
                            className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-sand text-ink transition-colors hover:bg-tile"
                        >
                            <Icon name="close" size={18} />
                        </button>
                        <span className="grid size-12 place-items-center rounded-full bg-mint text-mint-ink">
                            <Icon name={service.icon} size={22} />
                        </span>
                        <h3
                            id="service-modal-title"
                            className="font-display text-[1.625rem] leading-[1.2] text-ink"
                        >
                            {service.title}
                        </h3>
                        <p className="leading-[1.65] text-body">
                            {service.description}
                        </p>
                        <ul className="mt-1 flex flex-col gap-2.5">
                            {service.points.map((point) => (
                                <li
                                    key={point}
                                    className="flex items-start gap-2.5 text-[0.9375rem] text-ink"
                                >
                                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-sage text-green-deep">
                                        <Icon
                                            name="check"
                                            size={12}
                                            strokeWidth={2.5}
                                        />
                                    </span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : null}
        </dialog>
    );
}
