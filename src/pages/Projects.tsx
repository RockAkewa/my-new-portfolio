import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
// Import website screenshots
import npiConsultingImg from '@/assets/screenshots/npi-consulting.png';
import leapBizImg from '@/assets/screenshots/leap-biz.png';
import theaishopImg from '@/assets/screenshots/theaishop.png';
import skycreekDentalImg from '@/assets/screenshots/skycreek-dental.png';
import cimarronFamilyDentistryImg from '@/assets/screenshots/cimarron-family-dentistry.png';
import dfwSmileDesignImg from '@/assets/screenshots/dfw-smile-design.png';
import cedarCreekSmilesImg from '@/assets/screenshots/cedar-creek-smiles.png';
import cdoAmarilloImg from '@/assets/screenshots/cdo-amarillo.png';
import samChoddsImg from '@/assets/screenshots/sam-chodds.png';
import dentalStudioSfImg from '@/assets/screenshots/dental-studio-sf.png';
import southTulsaSmilesImg from '@/assets/screenshots/south-tulsa-smiles.png';
import addisonTxFamilyDentistryImg from '@/assets/screenshots/addison-tx-family-dentistry.png';
import lugoffSmilesImg from '@/assets/screenshots/lugoff-smiles.png';
import monroeDentalImg from '@/assets/screenshots/monroe-dental.png';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'wordpress-scratch', label: 'WordPress from Scratch' },
    { id: 'wordpress-employer', label: 'WordPress at Employer' },
    { id: 'maintenance', label: 'Maintenance & Debugging' },
    { id: 'hardcoded', label: 'Hardcoded WordPress' },
    { id: 'html-svelte', label: 'HTML/SvelteKit' },
  ];

  const projects = [
    // WordPress from Scratch
    {
      id: 1,
      title: 'NPI Consulting',
      url: 'https://www.npiconsulting.co.za',
      category: 'wordpress-scratch',
      description: 'Professional consulting website built from scratch with custom WordPress theme and functionality.',
      image: npiConsultingImg
    },
    {
      id: 2,
      title: 'Leap-Biz',
      url: 'https://www.leap-biz.com',
      category: 'wordpress-scratch',
      description: 'Modern business website with advanced WordPress customizations and SEO optimization.',
      image: leapBizImg
    },
    {
      id: 3,
      title: 'The AI Shop',
      url: 'https://www.theaishop.ai',
      category: 'wordpress-scratch',
      description: 'AI-focused e-commerce platform built with WooCommerce and custom integrations.',
      image: theaishopImg
    },

    // WordPress at Employer
    {
      id: 4,
      title: 'Sky Creek Dental',
      url: 'https://www.skycreekdental.com',
      category: 'wordpress-employer',
      description: 'Dental practice website with appointment booking and patient portal integration.',
      image: skycreekDentalImg
    },
    {
      id: 5,
      title: 'Cimarron Family Dentistry',
      url: 'https://cimarronfamilydentistry.com/',
      category: 'wordpress-employer',
      description: 'Family dentistry website with modern design and conversion optimization.',
      image: cimarronFamilyDentistryImg
    },

    // Maintenance & Debugging
    {
      id: 6,
      title: 'DFW Smile Design',
      url: 'https://www.dfwsmiledesign.com',
      category: 'maintenance',
      description: 'Ongoing maintenance, security updates, and performance optimization.',
      image: dfwSmileDesignImg
    },
    {
      id: 7,
      title: 'Cedar Creek Smiles',
      url: 'https://cedarcreeksmiles.com',
      category: 'maintenance',
      description: 'WordPress debugging, plugin conflicts resolution, and site optimization.',
      image: cedarCreekSmilesImg
    },
    {
      id: 8,
      title: 'CDO Amarillo',
      url: 'https://cdofamarillo.com',
      category: 'maintenance',
      description: 'Site recovery, security hardening, and ongoing maintenance services.',
      image: cdoAmarilloImg
    },
    {
      id: 9,
      title: 'Sam Chodds',
      url: 'https://www.samchodds.com',
      category: 'maintenance',
      description: 'Performance optimization, database cleanup, and security improvements.',
      image: samChoddsImg
    },
    {
      id: 10,
      title: 'Dental Studio SF',
      url: 'https://dentalstudiosf.com',
      category: 'maintenance',
      description: 'WordPress troubleshooting, theme updates, and functionality enhancements.',
      image: dentalStudioSfImg
    },

    // Hardcoded WordPress
    {
      id: 11,
      title: 'South Tulsa Smiles',
      url: 'https://www.southtulsasmiles.com',
      category: 'hardcoded',
      description: 'Custom hardcoded WordPress theme with advanced functionality and performance optimization.',
      image: southTulsaSmilesImg
    },
    {
      id: 12,
      title: 'Addison TX Family Dentistry',
      url: 'https://www.addisontxfamilydentistry.com',
      category: 'hardcoded',
      description: 'Fully custom WordPress implementation with hardcoded templates and optimizations.',
      image: addisonTxFamilyDentistryImg
    },

    // HTML/SvelteKit
    {
      id: 13,
      title: 'Lugoff Smiles',
      url: 'https://www.lugoffsmiles.com',
      category: 'html-svelte',
      description: 'Modern HTML website with advanced JavaScript functionality and smooth animations.',
      image: lugoffSmilesImg
    },
    {
      id: 14,
      title: 'Monroe Dental',
      url: 'https://www.monroedental.net',
      category: 'html-svelte',
      description: 'SvelteKit-powered website with server-side rendering and optimal performance.',
      image: monroeDentalImg
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryLabel = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.label : categoryId;
  };

  return (
    <Layout>
      <div className="min-h-screen px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-border-light flex-1 max-w-32"></div>
              <span className="section-number">PORTFOLIO</span>
              <div className="h-px bg-border-light flex-1 max-w-32"></div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-space-grotesk font-bold">
              My <span className="text-primary">Projects</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of my work spanning custom WordPress development, 
              maintenance & optimization, and modern web applications. Each project represents 
              a unique challenge and solution.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="transition-all duration-200"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                url={project.url}
                category={getCategoryLabel(project.category)}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 py-16 bg-muted/30 rounded-2xl">
            <div className="max-w-4xl mx-auto px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-space-grotesk font-bold mb-4">
                  Project Statistics
                </h2>
                <p className="text-muted-foreground">
                  Numbers that reflect my experience and commitment to quality
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-space-grotesk font-bold text-primary mb-2">
                     {projects.length}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-space-grotesk font-bold text-primary mb-2">
                    8+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-space-grotesk font-bold text-primary mb-2">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-space-grotesk font-bold text-primary mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Support Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;