import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Database, Palette } from 'lucide-react';
import rockHeadshot from '@/assets/rock-headshot.jpg';
import npiConsultingImg from '@/assets/screenshots/npi-consulting.png';
import leapBizImg from '@/assets/screenshots/leap-biz.png';
import skycreekDentalImg from '@/assets/screenshots/skycreek-dental.png';


const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className={`space-y-8 ${isVisible ? 'fade-in-left' : 'opacity-0'}`}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-hero-accent rounded-lg flex items-center justify-center">
                    <span className="hero-number text-lg font-bold">01</span>
                  </div>
                  <div className="h-px bg-border-light flex-1"></div>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-space-grotesk font-bold leading-tight">
                  Hello, I'm{' '}
                  <span className="text-primary">Rock!</span>
                </h1>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-hero-accent rounded-lg flex items-center justify-center">
                    <span className="hero-number text-lg font-bold">02</span>
                  </div>
                  <div className="h-px bg-border-light flex-1"></div>
                </div>
                
                <h2 className="text-3xl lg:text-5xl font-space-grotesk font-bold text-foreground">
                  I design{' '}
                  <Palette className="inline-block w-8 h-8 lg:w-12 lg:h-12 text-primary" />{' '}
                  and develop{' '}
                  <Code className="inline-block w-8 h-8 lg:w-12 lg:h-12 text-primary" />
                </h2>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-hero-accent rounded-lg flex items-center justify-center">
                    <span className="hero-number text-lg font-bold">03</span>
                  </div>
                  <div className="h-px bg-border-light flex-1"></div>
                </div>
                
                <h3 className="text-3xl lg:text-5xl font-space-grotesk font-bold">
                  websites.
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  I also build robust WordPress solutions, optimize for SEO, and create seamless user experiences.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href="/projects">
                    View My Work
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                >
                  <a href="/contact">
                    Let's Talk
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className={`flex justify-center lg:justify-end ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
              <div className="relative">
                <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-8 ring-hero-accent/20 shadow-2xl">
                  <img 
                    src={rockHeadshot} 
                    alt="Rock Akewa - Web Developer" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-lg animate-pulse">
                  <Code className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-hero-accent rounded-lg flex items-center justify-center shadow-lg animate-pulse">
                  <Database className="w-8 h-8 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-sm">Learn more</span>
              <ArrowDown size={20} />
            </div>
          </div>
        </section>
        
        {/* Preview Section */}
        <section className="py-20 px-6 lg:px-12 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px bg-border-light flex-1 max-w-32"></div>
                <span className="section-number">04</span>
                <div className="h-px bg-border-light flex-1 max-w-32"></div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-space-grotesk font-bold">
                Featured Projects
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A selection of websites I've built, from custom WordPress solutions to modern web applications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
              <div className="project-card group">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={npiConsultingImg} 
                    alt="NPI Consulting"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-space-grotesk font-semibold text-lg mb-2 group-hover:text-primary transition-colors">NPI Consulting</h3>
                  <p className="text-sm text-muted-foreground">WordPress from Scratch</p>
                </div>
              </div>
              
              <div className="project-card group">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={leapBizImg} 
                    alt="Leap-Biz"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-space-grotesk font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Leap-Biz</h3>
                  <p className="text-sm text-muted-foreground">Business Website</p>
                </div>
              </div>
              
              <div className="project-card group">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={skycreekDentalImg} 
                    alt="Sky Creek Dental"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-space-grotesk font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Sky Creek Dental</h3>
                  <p className="text-sm text-muted-foreground">Healthcare Website</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <a href="/projects">
                  View All Projects
                  <ArrowDown className="ml-2 w-4 h-4 rotate-[-90deg]" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
