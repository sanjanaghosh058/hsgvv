import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Remotely',
    position: 'Full Stack Developer',
    period: 'Aug 2024 - Aug 2025',
    location: 'Remote',
    type: 'Full-time',
    description: 'Leading full-stack development projects, implementing modern web solutions, and collaborating with cross-functional teams to deliver high-quality products.',
    achievements: [
      'Developed and maintained multiple client applications',
      'Implemented AI-driven features and automation workflows',
      'Optimized application performance and user experience',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    company: 'Feedzai',
    position: 'Frontend Developer Intern',
    period: 'Sep 2023 - Jan 2024',
    location: 'Remote',
    type: 'Internship',
    description: 'Contributed to the development of fraud detection systems and financial technology solutions, focusing on user interface development and optimization.',
    achievements: [
      'Built responsive and interactive user interfaces',
      'Collaborated with UX/UI designers to implement designs',
      'Participated in code reviews and team meetings',
      'Learned enterprise-level development practices'
    ]
  },
  {
    company: 'HacktoberFest',
    position: 'Open Source Contributor',
    period: 'Oct 2024',
    location: 'Remote',
    type: 'Volunteer',
    description: 'Active contributor to open source projects during Hacktoberfest, focusing on web development, documentation, and community engagement.',
    achievements: [
      'Contributed to multiple open source repositories',
      'Fixed bugs and implemented new features',
      'Improved documentation and code quality',
      'Collaborated with global developer community'
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My professional journey building impactful solutions and gaining valuable experience
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="ml-16 md:ml-0 shadow-xl border-0 group hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-1">
                            {exp.position}
                          </h3>
                          <div className="flex items-center text-blue-600 font-semibold mb-2">
                            <Building className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-slate-500 text-sm mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-slate-900 text-sm">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-slate-600 text-sm flex items-start">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}