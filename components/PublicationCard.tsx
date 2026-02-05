
import React from 'react';
import { FileText, Code, Youtube, ExternalLink } from 'lucide-react';
import { Publication } from '../types';
import { PERSONAL_INFO } from '../constants';

export const PublicationCard: React.FC<{ pub: Publication }> = ({ pub }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-wrap gap-2 mb-3">
        {pub.tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-2 text-slate-800 leading-snug">{pub.title}</h3>
      <p className="text-slate-600 text-sm mb-3">
        {pub.authors.map((author, idx) => (
          <span key={author} className={author === PERSONAL_INFO.name ? "font-bold text-slate-900 underline" : ""}>
            {author}{idx < pub.authors.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <div className="flex items-center gap-2 mb-4">
        <span className="font-semibold text-blue-600">{pub.venue}</span>
        <span className="text-slate-400">|</span>
        <span className="text-slate-500">{pub.year}</span>
      </div>
      
      <div className="flex flex-wrap gap-4 border-t border-slate-100 pt-4">
        {pub.links?.pdf && (
          <a href={pub.links.pdf} className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-blue-600 font-medium">
            <FileText size={16} /> PDF
          </a>
        )}
        {pub.links?.code && (
          <a href={pub.links.code} className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-blue-600 font-medium">
            <Code size={16} /> Code
          </a>
        )}
        {pub.doi && (
          <a href={`https://doi.org/${pub.doi}`} className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-blue-600 font-medium ml-auto">
            DOI <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
};
