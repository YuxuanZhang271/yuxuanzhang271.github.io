
import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { TEACHING, PERSONAL_INFO } from '../constants';

export const Teaching: React.FC = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Teaching & Mentorship</h1>
        <p className="text-slate-600">Educational courses and leadership in artificial intelligence and computer science.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <GraduationCap className="text-blue-600" /> Courses
          </h2>
          <div className="space-y-4">
            {TEACHING.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.course}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-blue-600">
                    <CheckCircle2 size={14} /> {item.role}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {item.institution}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <GraduationCap className="text-blue-600" /> Philosophy
          </h2>
          <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl shadow-blue-100">
            <p className="text-lg italic leading-relaxed mb-6">
              "My teaching philosophy centers on curiosity-driven learning. I believe that by grounding theoretical concepts in real-world AI applications, students develop a deeper intuition and a stronger sense of ethics in technological development."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <GraduationCap />
              </div>
              <div>
                <div className="font-bold">Teaching Philosophy</div>
                <div className="text-blue-200 text-sm">Last updated: Jan 2024</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <section className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">Prospective Collaboration</h2>
          <p className="text-slate-300 text-lg max-w-3xl mb-8">
            I am always open to discussing research in Embodied AI, Robotics, and Vision-Language-Action models. If you are interested in collaborating or have questions about my work, please feel free to reach out.
          </p>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-block bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors">
            Get in Touch
          </a>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-48 -mt-48"></div>
      </section>
    </div>
  );
};
