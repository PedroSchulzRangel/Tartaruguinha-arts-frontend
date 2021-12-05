import { PageMenu } from './components/PageMenu';
import { IntroPage } from './components/IntroPage';
import { CarouselShowcase } from './components/CarouselShowcase';
import { HistorySection } from './components/HistorySection';
import { ProjectsSection } from './components/ProjectsSection';
import { PartnersSection } from './components/PartnersSection';
import { Footer } from './components/Footer';

import './App.scss';


function App() {
  return (
    <>
      <PageMenu />
      <IntroPage />
      <div id="Carrossel">
        <CarouselShowcase />
      </div>
      <div id="História">
        <HistorySection />
      </div>
      <div id="Parcerias">
        <PartnersSection />
      </div>
      <div id="Projetos">
        <ProjectsSection />
      </div>
      <div id="Contato">
        <Footer />
      </div>
    </>
  );
}

export default App;
