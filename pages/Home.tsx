
import React from 'react';
import { MapPin, Building2, Newspaper, FileText, Bot, Box, Users, GraduationCap, Cpu } from 'lucide-react';
import { PERSONAL_INFO, NEWS, RESEARCH_AREAS } from '../constants';

const IconMap: Record<string, any> = {
  bot: Bot,
  box: Box,
  users: Users
};

export const Home: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-8 items-center md:items-start pt-12">
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 -z-10 opacity-10"></div>
          <img 
            src={PERSONAL_INFO.avatar} 
            alt={PERSONAL_INFO.name} 
            className="w-full h-full object-cover rounded-3xl shadow-xl border-4 border-white bg-slate-200"
            onError={(e) => {
              // 容错处理：如果图片加载失败，显示名字缩写生成的占位头像
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(PERSONAL_INFO.name)}&background=2563eb&color=fff&size=256`;
            }}
          />
        </div>
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{PERSONAL_INFO.name}</h1>
          <p className="text-xl text-blue-600 font-medium mb-4">{PERSONAL_INFO.title}</p>
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-600">
              <Building2 size={18} /> <span>{PERSONAL_INFO.institution}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-600">
              <MapPin size={18} /> <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-lg max-w-2xl mb-8">
            {PERSONAL_INFO.bio}
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg">
              Contact Me
            </a>
            <div className="flex gap-4">
              <a href={PERSONAL_INFO.socials.github} target="_blank" className="p-3 border border-slate-300 rounded-full hover:bg-slate-50 transition-all hover:border-blue-500 hover:text-blue-500"><Cpu size={20} /></a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" className="p-3 border border-slate-300 rounded-full hover:bg-slate-50 transition-all hover:border-blue-500 hover:text-blue-500"><Users size={20} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Research Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESEARCH_AREAS.map((area, idx) => {
            const Icon = IconMap[area.icon] || Bot;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education & News */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4 flex items-center gap-3">
            <Newspaper size={28} className="text-blue-600" /> Latest Updates
          </h2>
          <div className="space-y-4">
            {NEWS.map((item) => (
              <div key={item.id} className="flex gap-4 group cursor-default">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    item.type === 'education' ? 'bg-green-100 text-green-600' :
                    item.type === 'publication' ? 'bg-blue-100 text-blue-600' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {item.type === 'education' ? <GraduationCap size={16} /> : <FileText size={16} />}
                  </div>
                  <div className="w-px h-full bg-slate-200 mt-2"></div>
                </div>
                <div className="pb-6">
                  <div className="text-xs font-bold text-slate-400 mb-1">{item.date}</div>
                  <p className="text-slate-700 text-base">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4 flex items-center gap-3">
            <GraduationCap size={28} className="text-blue-600" /> Education
          </h2>
          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-blue-600">
              <h3 className="font-bold text-lg">Master in Artificial Intelligence Systems</h3>
              <p className="text-blue-600 font-medium">National University of Singapore</p>
              <p className="text-sm text-slate-500">Aug 2025 – Present | Singapore</p>
            </div>
            <div className="relative pl-6 border-l-2 border-slate-200">
              <h3 className="font-bold text-lg text-slate-800">Graduate Diploma in System Analysis</h3>
              <p className="text-slate-600 font-medium">National University of Singapore</p>
              <p className="text-sm text-slate-500">Jul 2023 – Jan 2025 | GPA 4.11 / 5.0</p>
            </div>
            <div className="relative pl-6 border-l-2 border-slate-200">
              <h3 className="font-bold text-lg text-slate-800">Bachelor in Intelligent Test & Control Engineering</h3>
              <p className="text-slate-600 font-medium">Harbin Institute of Technology</p>
              <p className="text-sm text-slate-500">Sep 2020 – Jun 2024 | GPA 4.02 / 5.0</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
