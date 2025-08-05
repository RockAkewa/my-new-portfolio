import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Linkedin, MapPin, Clock, ExternalLink, Download } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+27 73 754 7805',
      href: 'tel:+27737547805',
      description: 'Call me directly for urgent matters'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'rock@leap-biz.com',
      href: 'mailto:rock@leap-biz.com',
      description: 'Best way to reach me for project discussions'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/rock-akewa/',
      description: 'Professional networking and updates'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cape Town, South Africa',
      href: null,
      description: 'Available for remote work worldwide'
    }
  ];

  const services = [
    {
      title: 'WordPress Development',
      description: 'Custom WordPress websites built from scratch with modern design and functionality',
      features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Multi-site Setup']
    },
    {
      title: 'Website Maintenance',
      description: 'Ongoing support and optimization for existing WordPress websites',
      features: ['Security Updates', 'Performance Optimization', 'Backup Management', 'Bug Fixes']
    },
    {
      title: 'SEO & Performance',
      description: 'Technical SEO optimization and website performance improvements',
      features: ['Site Speed Optimization', 'SEO Audits', 'Analytics Setup', 'CallRail Integration']
    },
    {
      title: 'Training & Support',
      description: 'WordPress training and ongoing technical support for your team',
      features: ['Content Management', 'Security Best Practices', 'Performance Tips', '24/7 Support']
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM SAST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM SAST' },
    { day: 'Sunday', hours: 'Emergency only' }
  ];

  return (
    <Layout>
      <div className="min-h-screen px-6 lg:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-border-light flex-1 max-w-32"></div>
              <span className="section-number">CONTACT</span>
              <div className="h-px bg-border-light flex-1 max-w-32"></div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-space-grotesk font-bold">
              Let's <span className="text-primary">Connect</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? I'm here to help bring your vision to life. 
              Whether you need a new website, maintenance for an existing one, or technical consultation, 
              let's discuss how we can work together.
            </p>
          </div>

          {/* Contact Methods */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const content = (
                  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200 h-full">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      
                      <div>
                        <h3 className="font-space-grotesk font-semibold text-lg mb-1">
                          {method.label}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {method.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                      
                      {method.href && (
                        <div className="mt-auto">
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </div>
                );

                return method.href ? (
                  <a 
                    key={index}
                    href={method.href}
                    target={method.label === 'LinkedIn' ? '_blank' : undefined}
                    rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    className="block group"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Services */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-space-grotesk font-bold mb-4">
                How I Can Help
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive web development services tailored to your needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200"
                >
                  <h3 className="font-space-grotesk font-semibold text-xl mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Working Hours */}
          <section className="mb-20">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-space-grotesk font-bold mb-4">
                  Working Hours
                </h2>
                <p className="text-muted-foreground">
                  I'm available for meetings and consultations during these hours (SAST)
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-space-grotesk font-semibold text-lg">
                    Availability Schedule
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> For urgent matters outside business hours, 
                    please call directly or send an email with "URGENT" in the subject line.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 bg-gradient-to-r from-primary/10 to-hero-accent/10 rounded-2xl">
            <div className="max-w-3xl mx-auto px-8">
              <h2 className="text-3xl font-space-grotesk font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's discuss your requirements and create something amazing together. 
                I'm committed to delivering high-quality solutions that drive real results for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:rock@leap-biz.com?subject=Project Inquiry">
                    Send an Email
                    <Mail className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+27737547805">
                    Call Now
                    <Phone className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" asChild>
                  <a href="/resume.pdf" download="Rock_Akewa_Resume.pdf">
                    Download Resume
                    <Download className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;