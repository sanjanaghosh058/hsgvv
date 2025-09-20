import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Banking App',
    description: 'A comprehensive banking application with real-time transactions, account management, and financial analytics.',
    image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Next.js 14', 'Plaid', 'Dwolla', 'Appwrite', 'Sentry'],
    category: 'FinTech',
    liveDemo: 'https://banking-app-demo.vercel.app',
    github: 'https://github.com/subhrajitMukherje/banking-app'
  },
  {
    title: 'Go E-commerce Backend',
    description: 'High-performance e-commerce backend API built with Go, featuring robust architecture and scalability.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Go', 'MongoDB', 'REST API', 'Microservices'],
    category: 'Backend',
    liveDemo: 'https://go-ecommerce-api.herokuapp.com',
    github: 'https://github.com/subhrajitMukherje/go-ecommerce-backend'
  },
  {
    title: 'Enterprise LMS',
    description: 'Learning Management System for enterprises with advanced course management and analytics.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Next.js', 'AWS', 'Docker', 'Lambda', 'Clerk', 'DynamoDB', 'S3'],
    category: 'Enterprise',
    liveDemo: 'https://enterprise-lms.vercel.app',
    github: 'https://github.com/subhrajitMukherje/enterprise-lms'
  },
  {
    title: 'Inventory Management System',
    description: 'Comprehensive inventory tracking system with real-time updates and advanced reporting features.',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Next.js', 'Redux', 'Node.js', 'AWS'],
    category: 'Business',
    liveDemo: 'https://inventory-management-demo.vercel.app',
    github: 'https://github.com/subhrajitMukherje/inventory-management'
  },
  {
    title: 'AI Shorts Generator SaaS',
    description: 'AI-powered platform that automatically generates short-form video content with intelligent editing.',
    image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Next.js', 'Redis', 'AWS', 'Stripe', 'AI/ML'],
    category: 'AI/SaaS',
    liveDemo: 'https://ai-shorts-generator.vercel.app',
    github: 'https://github.com/subhrajitMukherje/ai-shorts-generator'
  },
  {
    title: 'AI Code Review Agent',
    description: 'Intelligent code review system that provides automated feedback and suggestions for code improvements.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Next.js', 'Node.js', 'AI/ML', 'Convex'],
    category: 'AI/Dev Tools',
    liveDemo: 'https://ai-code-review.vercel.app',
    github: 'https://github.com/subhrajitMukherje/ai-code-review-agent'
  },
  {
    title: 'Zomato Clone with Reels',
    description: 'Food delivery platform with Instagram-style reels for restaurants and food content discovery.',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Video API'],
    category: 'Social/Food',
    liveDemo: 'https://zomato-clone-reels.vercel.app',
    github: 'https://github.com/subhrajitMukherje/zomato-clone-reels'
  },
  {
    title: 'MERN E-commerce Platform',
    description: 'Full-featured e-commerce platform with admin panel, payment integration, and inventory management.',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe'],
    category: 'E-commerce',
    liveDemo: 'https://mern-ecommerce-platform.vercel.app',
    github: 'https://github.com/subhrajitMukherje/mern-ecommerce-platform'
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of innovative solutions I've built using cutting-edge technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg overflow-hidden bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600 text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs bg-slate-100 text-slate-700 hover:bg-slate-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}