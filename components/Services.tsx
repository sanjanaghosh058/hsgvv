import { Card, CardContent } from '@/components/ui/card';
import { Code2, Globe, Palette, Bug, Bot, Zap } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'MERN Stack Development',
    description: 'Full-stack web applications using MongoDB, Express.js, React, and Node.js with modern best practices.',
    features: ['RESTful APIs', 'Database Design', 'Authentication', 'Real-time Features']
  },
  {
    icon: Globe,
    title: 'Next.js Websites',
    description: 'High-performance, SEO-optimized websites and web applications built with Next.js and React.',
    features: ['SSR/SSG', 'Performance Optimization', 'SEO Ready', 'Modern UI/UX']
  },
  {
    icon: Palette,
    title: 'Landing Pages',
    description: 'Conversion-focused landing pages designed to drive engagement and maximize business results.',
    features: ['Responsive Design', 'A/B Testing Ready', 'Fast Loading', 'CRO Optimized']
  },
  {
    icon: Bug,
    title: 'Bug Fixes & Features',
    description: 'Quick bug resolution and feature enhancements for existing applications across all tech stacks.',
    features: ['Code Review', 'Performance Fixes', 'New Features', 'Refactoring']
  },
  {
    icon: Bot,
    title: 'AI Agent Development',
    description: 'Intelligent AI agents and chatbots that automate tasks and enhance user experiences.',
    features: ['Natural Language Processing', 'Custom Training', 'API Integration', 'Smart Automation']
  },
  {
    icon: Zap,
    title: 'AI Automation Workflows',
    description: 'End-to-end automation solutions that streamline business processes using AI and machine learning.',
    features: ['Process Automation', 'Data Processing', 'Workflow Optimization', 'AI Integration']
  }
];

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            My Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive development solutions tailored to bring your vision to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}