import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <section id="developers" className="bg-black text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Developers</h2>
            <p className="mt-2 text-white/90 max-w-2xl">Quickstart with SDKs, CLI and templates. Flat-color, high-contrast code blocks coming soon.</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'SDK', color: '#8c00ff' },
                { title: 'CLI', color: '#ffc400' },
                { title: 'Faucet', color: '#ff3f7f' },
              ].map((c) => (
                <div key={c.title} className="relative">
                  <div className="absolute top-2 left-2 w-full h-full rounded-xl border-4 border-black" style={{ backgroundColor: 'black' }} aria-hidden="true"></div>
                  <div className="relative rounded-xl border-4 border-black p-5 font-extrabold text-black" style={{ backgroundColor: c.color }}>
                    {c.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
