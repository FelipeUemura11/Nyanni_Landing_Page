import { brand, contact, faq, hero, seo, services } from "../../content/site";
import { buildWhatsAppLink } from "../../lib/whatsapp";

const absoluteUrl = (path = "") => new URL(path, seo.siteUrl).toString();
const imageUrl = (src: string) =>
    src.startsWith("http") ? src : absoluteUrl(src.replace(/^\//, ""));

export function StructuredData() {
    const graph = [
        {
            "@type": "WebSite",
            "@id": absoluteUrl("#website"),
            url: seo.siteUrl,
            name: brand.fullName,
            inLanguage: "pt-BR",
            description: seo.description,
        },
        {
            "@type": "LocalBusiness",
            "@id": absoluteUrl("#localbusiness"),
            name: brand.fullName,
            url: seo.siteUrl,
            description: seo.description,
            image: imageUrl(hero.image.src),
            logo: absoluteUrl("logo.png"),
            email: contact.email,
            telephone: contact.phoneDisplay,
            priceRange: "$$",
            areaServed: seo.areaServed,
            sameAs: seo.sameAs,
            contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: contact.whatsappDisplay,
                url: buildWhatsAppLink(contact.whatsappNumber, contact.greeting),
                availableLanguage: ["pt-BR"],
            },
            makesOffer: services.items.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    description: service.summary ?? service.description,
                },
            })),
        },
        {
            "@type": "FAQPage",
            "@id": absoluteUrl("#faq"),
            mainEntity: faq.items.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                },
            })),
        },
        {
            "@type": "WebPage",
            "@id": absoluteUrl("#webpage"),
            url: seo.siteUrl,
            name: seo.title,
            description: seo.description,
            inLanguage: "pt-BR",
            isPartOf: { "@id": absoluteUrl("#website") },
            about: { "@id": absoluteUrl("#localbusiness") },
            primaryImageOfPage: {
                "@type": "ImageObject",
                url: imageUrl(hero.image.src),
            },
        },
    ];

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": graph,
                }),
            }}
        />
    );
}
