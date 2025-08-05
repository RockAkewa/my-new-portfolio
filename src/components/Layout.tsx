import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, Phone, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageToggle from './LanguageToggle';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/about', label: 'About Me', icon: User },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">

      {/* Desktop Sidebar */}
      <LanguageToggle />
      <aside className="fixed left-0 top-0 z-50 h-full w-80 bg-nav-bg p-6 hidden lg:flex flex-col">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-white/20">
            <img 
              src="/lovable-uploads/c98726ba-2596-48de-8deb-4bfeac017d8e.png" 
              alt="Rock Akewa" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-nav-fg font-space-grotesk font-semibold text-lg text-center">
            Rock Akewa
          </h2>
          <p className="text-nav-fg/80 text-sm text-center">Web / WordPress Developer</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full bg-white/10 border-white/20 text-nav-fg hover:bg-white/20"
            asChild
          >
            <a href="/resume.pdf" download="Rock_Akewa_Resume.pdf">
              <Download size={16} className="mr-2" />
              Download Resume
            </a>
          </Button>

          <Button 
            variant="outline" 
            size="sm" 
            className="w-full bg-white/10 border-white/20 text-nav-fg hover:bg-white/20"
            asChild
          >
            <a 
              href="https://www.linkedin.com/in/rock-akewa/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} className="mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="text-nav-fg/60 text-xs text-center">
            <p>© 2024 Rock Akewa</p>
            <p className="mt-1">All rights reserved</p>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-nav-bg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20">
              <img 
                src="/lovable-uploads/c98726ba-2596-48de-8deb-4bfeac017d8e.png" 
                alt="Rock Akewa" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-nav-fg font-space-grotesk font-semibold text-sm">
                Rock Akewa
              </h2>
              <p className="text-nav-fg/80 text-xs">Web Developer</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-nav-fg p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-nav-bg border-t border-white/20 p-4">
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Icon size={20} />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="lg:ml-80 min-h-screen pt-20 lg:pt-0">
        {children}
      </main>
    </div>
  );
};

export default Layout;