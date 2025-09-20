export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I am a software developer with <span className="font-semibold text-blue-600">11 months of experience</span>, 
              now working as a freelancer. I specialize in web development, AI automation, and SaaS product building.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              My journey in tech has been driven by a passion for creating innovative solutions that solve real-world problems. 
              I combine modern web technologies with AI-powered automation to deliver exceptional digital experiences.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-2">🚀 Expertise</h3>
                <p className="text-slate-600">Full-stack development with modern frameworks and AI integration</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-2">💼 Focus</h3>
                <p className="text-slate-600">SaaS products, enterprise solutions, and automation workflows</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    S
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Subhrajit Mukherjee</h3>
                    <p className="text-slate-600">Full-Stack Developer</p>
                  </div>
                </div>
                
                <div className="space-y-3 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Experience</span>
                    <span className="font-semibold text-slate-900">11+ Months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Freelancing</span>
                    <span className="font-semibold text-blue-600">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Specialization</span>
                    <span className="font-semibold text-slate-900">MERN & AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}