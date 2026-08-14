import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import PdfDrawings from './components/PdfDrawings';
import GallerySlider from './components/GallerySlider';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />
      {!loading && (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <PdfDrawings />
            <GallerySlider />
            <Services />
            <Contact />
          </main>
          <Footer />
          <Cursor />
        </>
      )}
    </>
  );
}

export default App;
