import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ParticleBackground } from './components/common/ParticleBackground';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ResumeModal } from './components/common/ResumeModal';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        
        {/* Subtle dynamic particle & ambient canvas background */}
        <ParticleBackground />

        {/* Sticky Glassmorphic Navigation */}
        <Navbar onOpenResume={() => setResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="relative z-10 flex flex-col">
          <Hero onOpenResume={() => setResumeModalOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Downloadable / Printable Resume Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
}

export default App;
