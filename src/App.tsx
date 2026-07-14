import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-mesh min-h-screen flex flex-col relative selection:bg-primary-container selection:text-on-primary-container font-body-md text-on-background">
      <Header />
      <main className="flex-grow pt-32 relative z-10">
        <Hero />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
