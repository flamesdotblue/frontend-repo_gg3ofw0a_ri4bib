import { Database, Braces, Shield } from 'lucide-react';

const steps = [
  {
    title: 'Store & Stream with SVDB',
    desc: 'Write datasets and model states directly to the chain using SVDB — a native, verifiable datastore.',
    color: '#8c00ff',
    Icon: Database,
  },
  {
    title: 'Compose On-Chain AI',
    desc: 'Build agents, prompts, and inference pipelines entirely on-chain with deterministic execution.',
    color: '#ffc400',
    Icon: Braces,
  },
  {
    title: 'Verify & Settle',
    desc: 'Proofs and receipts make AI outputs auditable. Finalize to blockspace for trustless consumption.',
    color: '#ff3f7f',
    Icon: Shield,
  },
];

export default function HowItWorks() {
  return (
    <section id="technology" className="bg-black text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold">How it works</h2>
          <p className="mt-2 text-white/90 max-w-2xl">
            A clean architecture for AI on-chain: data, compute, and verification stitched together in a single, flat-color system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ title, desc, color, Icon }, idx) => (
            <div key={idx} className="relative" role="article" aria-label={title}>
              <div className="absolute top-2 left-2 w-full h-full rounded-xl border-4 border-black" style={{ backgroundColor: 'black' }} aria-hidden="true"></div>
              <div
                className="relative rounded-xl border-4 border-black p-5 min-h-[200px] bg-white text-black"
                style={{ backgroundColor: color, color: '#000000' }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-white border-4 border-black rounded-md p-2">
                    <Icon className="w-5 h-5 text-black" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-extrabold">{title}</h3>
                </div>
                <p className="mt-3 font-semibold leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-xl border-4 border-black bg-white text-black p-5">
            <h3 className="text-xl font-extrabold">SVDB Spotlight</h3>
            <p className="mt-2 font-semibold">A flat schematic of on-chain data flow.</p>
            <svg viewBox="0 0 560 220" className="w-full mt-4" role="img" aria-label="SVDB data flow diagram">
              <rect x="0" y="0" width="560" height="220" fill="white" />
              <g>
                <rect x="24" y="40" width="140" height="60" fill="#8c00ff" stroke="black" strokeWidth="6" rx="14" />
                <text x="94" y="76" textAnchor="middle" fontSize="16" fontWeight="800" fill="black">Client</text>

                <rect x="210" y="40" width="140" height="60" fill="#ffc400" stroke="black" strokeWidth="6" rx="14" />
                <text x="280" y="76" textAnchor="middle" fontSize="16" fontWeight="800" fill="black">SVDB</text>

                <rect x="396" y="40" width="140" height="60" fill="#ff3f7f" stroke="black" strokeWidth="6" rx="14" />
                <text x="466" y="76" textAnchor="middle" fontSize="16" fontWeight="800" fill="black">Chain</text>

                <line x1="164" y1="70" x2="210" y2="70" stroke="black" strokeWidth="6" markerEnd="url(#arrow)" />
                <line x1="350" y1="70" x2="396" y2="70" stroke="black" strokeWidth="6" markerEnd="url(#arrow)" />
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="black" />
                  </marker>
                </defs>
              </g>
              <g>
                <rect x="210" y="130" width="140" height="60" fill="#450693" stroke="black" strokeWidth="6" rx="14" />
                <text x="280" y="166" textAnchor="middle" fontSize="16" fontWeight="800" fill="white">Verifier</text>
                <line x1="280" y1="100" x2="280" y2="130" stroke="black" strokeWidth="6" markerEnd="url(#arrow)" />
              </g>
            </svg>
          </div>

          <div className="rounded-xl border-4 border-black p-5" style={{ backgroundColor: '#450693' }}>
            <h3 className="text-xl font-extrabold text-white">Use Cases</h3>
            <ul className="mt-3 grid gap-3">
              {['Agents', 'Verifiable ML', 'DeFi + AI'].map((item) => (
                <li key={item} className="bg-white text-black border-4 border-black rounded-md px-3 py-2 font-bold">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
