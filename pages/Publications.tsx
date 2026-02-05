
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { PUBLICATIONS } from '../constants';
import { PublicationCard } from '../components/PublicationCard';

export const Publications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPubs = PUBLICATIONS.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const papers = filteredPubs.filter(p => !p.isPreprint);
  const preprints = filteredPubs.filter(p => p.isPreprint);

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Research Papers</h1>
          <p className="text-slate-600">Selected work in Vision-Language-Action models and Robot Learning.</p>
        </div>
        
        <div className="relative max-w-sm w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search papers, venues, tags..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {papers.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Publications</h2>
          <div className="grid grid-cols-1 gap-6">
            {papers.map(pub => <PublicationCard key={pub.id} pub={pub} />)}
          </div>
        </section>
      )}

      {preprints.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Preprints & Submissions</h2>
          <div className="grid grid-cols-1 gap-6">
            {preprints.map(pub => <PublicationCard key={pub.id} pub={pub} />)}
          </div>
        </section>
      )}

      {filteredPubs.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
          <p className="text-slate-500 text-lg">No papers found matching your search.</p>
        </div>
      )}
    </div>
  );
};
