export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Subhrajit Mukherjee</h3>
            <p className="text-slate-300 leading-relaxed">
              Full-Stack Developer specializing in MERN stack, Next.js, and AI automation. 
              Let's build something amazing together.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>MERN Stack Development</li>
              <li>Next.js Applications</li>
              <li>AI Automation</li>
              <li>SaaS Development</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Subhrajit Mukherjee. All rights reserved.</p>
          <p className="mt-2">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}