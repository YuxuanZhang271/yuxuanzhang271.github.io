
import React from 'react';
import { Briefcase, FolderRoot, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { EXPERIENCES, PROJECTS, SKILLS, PERSONAL_INFO } from '../constants';

export const Experience: React.FC = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Experience & Skills</h1>
        <p className="text-slate-600">Professional internships, lab research, and technical proficiency.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Briefcase className="text-blue-600" /> Internships
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="font-semibold text-slate-800">{exp.organization}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2 text-slate-600 text-sm">
                        <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <FolderRoot className="text-blue-600" /> Selected Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h3 className="font-bold mb-1">{proj.title}</h3>
                  <div className="text-xs text-blue-600 font-bold mb-3 uppercase tracking-wider">{proj.type}</div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {proj.highlights.map((h, i) => <li key={i}>• {h}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Terminal className="text-blue-600" /> Skills
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.programming.map(s => <span key={s} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg">{s}</span>)}
                </div>
              </div>
              
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Tools & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.tools.map(s => <span key={s} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">{s}</span>)}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Languages</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  {SKILLS.languages.map(l => <div key={l}>• {l}</div>)}
                </div>
              </div>
            </div>
          </section>

          <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl shadow-blue-100">
            <h3 className="font-bold text-xl mb-4">Availability</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Open to collaborative research opportunities in Embodied AI and Robotics. Feel free to contact me for PhD applications or internships starting in late 2026.
            </p>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="block text-center bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
