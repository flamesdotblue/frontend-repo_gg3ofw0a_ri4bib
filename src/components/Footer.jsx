export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-extrabold">ArthaChain</h4>
            <p className="mt-2 text-white/90 max-w-xs">Build verifiable AI agents on a Layer-1 with a native on-chain database.</p>
          </div>
          <div>
            <h5 className="font-extrabold text-[#ffc400]">Build</h5>
            <ul className="mt-3 grid gap-2">
              <li><a className="hover:underline focus:outline-none focus:ring-4 focus:ring-black rounded" href="#developers">Developers</a></li>
              <li><a className="hover:underline focus:outline-none focus:ring-4 focus:ring-black rounded" href="#docs">Docs</a></li>
              <li><a className="hover:underline focus:outline-none focus:ring-4 focus:ring-black rounded" href="#technology">Technology</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-extrabold text-[#ff3f7f]">Community</h5>
            <ul className="mt-3 grid gap-2">
              <li><a className="hover:underline focus:outline-none focus:ring-4 focus:ring-black rounded" href="#community">Discord</a></li>
              <li><a className="hover:underline focus:outline-none focus:ring-4 focus:ring-black rounded" href="#community">Telegram</a></li>
              <li><a className="hover:underline focus:outline-none focus:ring-4 focus:ring-black rounded" href="#community">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-extrabold text-[#8c00ff]">Get Involved</h5>
            <ul className="mt-3 grid gap-2">
              <li><a className="hover:underline focus:outline-none focus:ring-4 focus:ring-black rounded" href="#grants">Apply for Grants</a></li>
              <li><a className="hover:underline focus:outline-none focus:ring-4 focus:ring-black rounded" href="#validators">Run a Node</a></li>
              <li><a className="hover:underline focus:outline-none focus:ring-4 focus:ring-black rounded" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md border-4 border-black bg-white text-black font-bold">
            <span className="text-sm">“Design a doodle-first, neo-tech, futuristic Web3/Blockchain website for ArthaChain using ONLY these flat colors: #450693 #8c00ff #ff3f7f #ffc400, plus pure black and white for contrast. NO GRADIENTS anywhere. Use bold black keylines, sticker-like cards, offset shadows (no blur), and flat vector illustrations. The site must be multi-page (not a single page) and developer-centric, inspired by the clarity of Sonic Labs, Shardeum, and Avalanche while strictly following the flat-color, no-gradient rule.”</span>
          </div>
          <p className="text-sm text-white/80">© {new Date().getFullYear()} ArthaChain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
