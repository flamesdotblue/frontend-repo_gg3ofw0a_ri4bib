import { useState } from 'react';
import { Menu, X, Rocket, BookOpen, Cpu, Users, Code } from 'lucide-react';

const navItems = [
  { name: 'technology', label: 'Technology', icon: Cpu },
  { name: 'developers', label: 'Developers', icon: Code },
  { name: 'docs', label: 'Docs', icon: BookOpen },
  { name: 'community', label: 'Community', icon: Users },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b-4 border-black" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-black rounded">
            <div className="bg-[#ffc400] border-4 border-black rounded-md p-2">
              <Rocket className="w-5 h-5 text-black" aria-hidden="true" />
            </div>
            <span className="text-xl font-extrabold tracking-tight">ArthaChain</span>
          </a>

          <nav className="hidden md:flex items-center gap-2" aria-label="Primary">
            {navItems.map(({ name, label, icon: Icon }) => (
              <a
                key={name}
                href={`#${name}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border-4 border-black bg-white text-black hover:-translate-y-0.5 transition-transform focus:outline-none focus:ring-4 focus:ring-black"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold">{label}</span>
              </a>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border-4 border-black bg-white text-black focus:outline-none focus:ring-4 focus:ring-black"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4" role="navigation" aria-label="Mobile">
            <ul className="grid gap-2">
              {navItems.map(({ name, label, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={`#${name}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-md border-4 border-black bg-white text-black focus:outline-none focus:ring-4 focus:ring-black"
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span className="text-sm font-semibold">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
