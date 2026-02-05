
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Briefcase, Github, Mail, Linkedin, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const NavLink = ({ to, children, icon: Icon }: { to: string; children?: React.ReactNode; icon: any }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
        isActive 
          ? 'bg-blue-600 text-white shadow-md' 
          : 'text-slate-600 hover:bg-slate-200'
      }`}
    >
      <Icon size={18} />
      <span className="font-medium">{children}</span>
    </Link>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full glass-morphism border-b border-slate-200 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-slate-900 hidden md:block">
            {PERSONAL_INFO.name}
          </Link>
          <nav className="flex gap-2 mx-auto md:mx-0">
            <NavLink to="/" icon={Home}>Home</NavLink>
            <NavLink to="/publications" icon={FileText}>Research</NavLink>
            <NavLink to="/experience" icon={Briefcase}>Experience</NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-6xl w-full mx-auto p-4 md:p-8">
        {children}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href={PERSONAL_INFO.socials.github} target="_blank" className="text-slate-400 hover:text-slate-900"><Github /></a>
            <a href={PERSONAL_INFO.socials.linkedin} target="_blank" className="text-slate-400 hover:text-slate-900"><Linkedin /></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-slate-900"><Mail /></a>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
