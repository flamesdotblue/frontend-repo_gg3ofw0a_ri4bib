import { Rocket, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              AI, Finally On-Chain.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90">
              ArthaChain runs AI on-chain via SVDB — our native on-chain database. Build verifiable agents, datasets, and inference directly on the ledger.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#developers"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border-4 border-black bg-[#8c00ff] text-white hover:-translate-y-0.5 transition-transform focus:outline-none focus:ring-4 focus:ring-black font-bold"
              >
                <Rocket className="w-5 h-5" aria-hidden="true" />
                Start Building
              </a>
              <a
                href="#technology"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border-4 border-black bg-white text-black hover:-translate-y-0.5 transition-transform focus:outline-none focus:ring-4 focus:ring-black font-bold"
              >
                <BookOpen className="w-5 h-5" aria-hidden="true" />
                Read the Tech
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3" aria-label="Key metrics">
              {[
                { label: 'TPS', value: '30,000+' },
                { label: 'Finality', value: '~1s' },
                { label: 'Fees', value: '< $0.001' },
              ].map((m) => (
                <div key={m.label} className="bg-[#ffc400] text-black rounded-lg border-4 border-black p-4">
                  <div className="text-2xl font-extrabold">{m.value}</div>
                  <div className="text-sm font-semibold">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[320px] sm:h-[380px] lg:h-[440px]">
            {/* Flat-color doodle scene */}
            <svg
              role="img"
              aria-label="Neural network with orbiting tokens"
              viewBox="0 0 600 480"
              className="w-full h-full"
            >
              <rect x="0" y="0" width="600" height="480" fill="black" />
              {/* Nodes */}
              {[
                { cx: 100, cy: 240, color: '#8c00ff' },
                { cx: 220, cy: 120, color: '#ffc400' },
                { cx: 220, cy: 360, color: '#ff3f7f' },
                { cx: 360, cy: 240, color: '#450693' },
                { cx: 500, cy: 160, color: '#8c00ff' },
                { cx: 500, cy: 320, color: '#ffc400' },
              ].map((n, i) => (
                <g key={i}>
                  <circle cx={n.cx} cy={n.cy} r="26" fill={n.color} stroke="black" strokeWidth="6" />
                  <circle cx={n.cx} cy={n.cy} r="8" fill="white" stroke="black" strokeWidth="4" />
                </g>
              ))}
              {/* Links */}
              {[
                [100, 240, 220, 120],
                [100, 240, 220, 360],
                [220, 120, 360, 240],
                [220, 360, 360, 240],
                [360, 240, 500, 160],
                [360, 240, 500, 320],
              ].map((l, i) => (
                <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke="white" strokeWidth="4" />
              ))}
              {/* Orbiting tokens */}
              <g>
                <circle cx="360" cy="240" r="80" fill="none" stroke="white" strokeWidth="4" strokeDasharray="8 8" />
                <circle cx="440" cy="240" r="14" fill="#ff3f7f" stroke="black" strokeWidth="4" />
                <circle cx="280" cy="240" r="14" fill="#ffc400" stroke="black" strokeWidth="4" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
