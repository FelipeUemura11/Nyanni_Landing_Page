import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { WhatsAppFab } from "./components/layout/WhatsAppFab";
import { CareProfiles } from "./sections/CareProfiles";
import { Faq } from "./sections/Faq";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Pillars } from "./sections/Pillars";
import { Services } from "./sections/Services";
import { Visit } from "./sections/Contact";
import { Testimonials } from "./sections/Testimonials";

/**
 * Percurso de decisão da família (ver proposta):
 * apresentação → filosofia → tipos de acolhimento → serviços → dúvidas → agendamento.
 */
function App() {
    return (
        <>
            <Header />
            <main id="conteudo">
                <Hero />
                <Pillars />
                <About />
                <CareProfiles />
                <Services />
                <Faq />
                <Testimonials />
                <Visit />
            </main>
            <Footer />
            <WhatsAppFab />
        </>
    );
}

export default App;
