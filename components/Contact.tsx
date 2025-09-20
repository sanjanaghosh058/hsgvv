'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Twitter, Send, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'subhrajitmukh1234@gmail.com',
      link: 'mailto:subhrajitmukh1234@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Remote',
      link: ''
    },
    {
      icon: Phone,
      label: 'Availability',
      value: '24/7 for clients',
      link: ''
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/subhrajit-mukherjee-1026161b4/',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/subhrajitMukherje',
      color: 'hover:bg-gray-800'
    },
    {
      icon: Twitter,
      label: 'Twitter/X',
      link: 'https://x.com/Subhraj49268042',
      color: 'hover:bg-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              
              {submitStatus.type && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                    placeholder="Project discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                    placeholder="Tell me about your project requirements..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} className="text-blue-600 hover:text-blue-700 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-slate-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Connect With Me</h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 group ${social.color} hover:text-white`}
                    >
                      <social.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}