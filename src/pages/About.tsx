import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { GraduationCap, Briefcase, Award, MapPin, Calendar } from 'lucide-react';
import rockHeadshot from '@/assets/rock-headshot.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    'WordPress Development',
    'Custom Themes & Plugins',
    'SEO Optimization',
    'WooCommerce',
    'HTML/CSS/JavaScript',
    'PHP & MySQL',
    'SvelteKit',
    'CallRail Integration',
    'Google Analytics',
    'Wordfence Security',
    'Site Performance',
    'API Integration'
  ];

  const experience = [
    {
      title: 'Web Developer - Tech Support',
      company: 'Pain Free Dental Marketing',
      location: 'Dallas, Texas',
      period: 'Aug 2024 - Nov 2024',
      description: 'Managed and maintained multiple WordPress websites for dental clients, implementing SEO best practices and CallRail integrations.'
    },
    {
      title: 'Web Developer / Maintenance Support',
      company: 'Leap-Biz',
      location: 'Johannesburg, South Africa',
      period: '2022 - Present',
      description: 'Designed, developed, and maintained WordPress websites with custom themes and plugins, focusing on speed optimization and SEO.'
    },
    {
      title: 'WordPress Developer',
      company: 'NPI Governance Consulting',
      location: 'Johannesburg, South Africa',
      period: '2023 - 2023',
      description: 'Led major website improvement projects, resolved HTML issues, and implemented security enhancements.'
    },
    {
      title: 'WordPress Trainer',
      company: 'NPI Shuttleworth Academy',
      location: 'Johannesburg, South Africa',
      period: '2024 - 2024',
      description: 'Provided WordPress training to teams, covering website management, security, and performance optimization.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Information Technology',
      school: 'Damelin College',
      period: '2019-2022'
    },
    {
      degree: 'CCNA Network System Admin',
      school: 'CISCO Online Training',
      period: '2022'
    },
    {
      degree: 'Fullstack web development',
      school: 'Code Academy',
      period: '2022'
    },
    {
      degree: 'Advanced Java script',
      school: 'Coursera',
      period: '2022'
    },
    {
      degree: 'Advanced Cyber Security',
      school: 'Coursera',
      period: '2024'
    },
    {
      degree: 'Certified Penetration Testing Specialist',
      school: 'HTB Academy',
      period: '2024'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen px-6 lg:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-border-light flex-1 max-w-32"></div>
              <span className="section-number">ABOUT ME</span>
              <div className="h-px bg-border-light flex-1 max-w-32"></div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-space-grotesk font-bold">
              Who is <span className="text-primary">Rock?</span>
            </h1>
          </div>

          {/* Hero Section */}
          <div className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-space-grotesk font-semibold">
                Passionate WordPress Developer & Digital Solutions Architect
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As a highly skilled WordPress Web Developer with extensive experience in the digital 
                  marketing industry, I specialize in building, maintaining, and optimizing WordPress 
                  websites that drive real business results.
                </p>
                
                <p>
                  My background includes working with leading digital marketing agencies, particularly 
                  in the healthcare sector, where I've developed and managed client websites to improve 
                  performance, security, and SEO rankings.
                </p>
                
                <p>
                  I have deep expertise in website customization, plugin development, theme integration, 
                  and troubleshooting complex technical issues. My strong knowledge of SEO, CallRail, 
                  and various web development tools ensures that I create high-performing, user-friendly 
                  websites that meet both technical and business objectives.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="/resume.pdf" download="Rock_Akewa_Resume.pdf">
                    Download Resume
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact">
                    Let's Work Together
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden ring-8 ring-hero-accent/20 shadow-2xl">
                  <img 
                    src={rockHeadshot} 
                    alt="Rock Akewa" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg border">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Cape Town, SA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-space-grotesk font-bold mb-4">
                Technical Expertise
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive skill set covering the full spectrum of modern web development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-all duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-space-grotesk font-bold mb-4">
                Professional Experience
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Building digital solutions across diverse industries and markets
              </p>
            </div>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-space-grotesk font-semibold mb-1">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium text-primary">{job.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-space-grotesk font-bold mb-4">
                Education & Certifications
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Continuous learning and professional development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-space-grotesk font-semibold text-lg mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {edu.school}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-space-grotesk font-bold mb-4">
                Languages
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {['English', 'French', 'Spanish'].map((language) => (
                <div 
                  key={language}
                  className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-all duration-200"
                >
                  <h3 className="font-space-grotesk font-semibold text-lg">
                    {language}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16 bg-muted/30 rounded-2xl">
            <div className="max-w-3xl mx-auto px-8">
              <h2 className="text-3xl font-space-grotesk font-bold mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you need a new WordPress website, want to optimize an existing site, 
                or require ongoing maintenance and support, I'm here to help bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/projects">
                    View My Work
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact">
                    Start a Project
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

export default About;