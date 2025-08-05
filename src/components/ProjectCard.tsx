import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  url: string;
  category: string;
  description?: string;
  image: string;
}

const ProjectCard = ({ title, url, category, description, image }: ProjectCardProps) => {
  return (
    <div className="project-card group">
      <div className="aspect-video overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-space-grotesk font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">
              {category}
            </p>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            asChild
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
            </a>
          </Button>
        </div>
        
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="mt-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            asChild
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              View Live Site
              <ExternalLink size={14} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;