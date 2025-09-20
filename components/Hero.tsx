'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Subhrajit_Mukherjee_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Subhrajit Mukherjee
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer | AI Automation | MERN & Next.js Specialist
          </p>
          
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
            Transforming ideas into powerful digital solutions with cutting-edge technology and AI-driven automation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Hire Me <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              onClick={downloadResume}
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Download CV <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-slate-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}