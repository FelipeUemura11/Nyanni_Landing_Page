import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { WhatsAppFab } from "./components/layout/WhatsAppFab";
import { CareProfiles } from "./sections/CareProfiles";
import { Faq } from "./sections/Faq";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Pillars } from "./sections/Pillars";
import { Services } from "./sections/Services";
import { Visit } from "./sections/Visit";

/**
 * Percurso de decisão da família (ver proposta):
 * apresentação → filosofia → tipos de acolhimento → serviços → dúvidas → agendamento.
 */
function App() {
    return (
        <>
            <a className="fixed top-3 left-3 z-[100] -translate-y-[200%] rounded-full bg-green px-5 py-3 font-medium text-cream no-underline transition-transform duration-200 ease-soft focus-visible:translate-y-0" href="#conteudo">
                Pular para o conteúdo
            </a>
            <Header />
            <main id="conteudo">
                <Hero />
                <Pillars />
                <About />
                <CareProfiles />
                <Services />
                <Faq />
                <Visit />
            </main>
            <Footer />
            <WhatsAppFab />
        </>
    );
}

export default App;
