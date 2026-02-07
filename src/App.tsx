import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects } from './data/projects';

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseCase = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const currentProject = projects.find((p) => p.id === selectedProject);

  return (
    <div className="min-h-screen bg-cyber-darker text-white font-inter">
      <Navigation />
      <main>
        <Hero />
        <Projects onProjectClick={handleProjectClick} />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />

      {/* Case Study Modal */}
      {currentProject && (
        <CaseStudy project={currentProject} onClose={handleCloseCase} />
      )}
    </div>
  );
}

export default App;
