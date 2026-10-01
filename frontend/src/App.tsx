import { Header } from "./components/layout/Header";
import { Hero } from "./sections/Hero";
import { Pillars } from "./sections/Pillars";
import { About } from "./sections/About";
import { Assistance } from "./sections/Assistance";
import { Services } from "./sections/Services";
import { Faq } from "./sections/Faq";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/layout/Footer";
import { WhatsAppFab } from "./components/layout/WhatsAppFab";

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
                <Assistance />
                <Services />
                <Faq />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <WhatsAppFab />
        </>
    );
}

export default App;
