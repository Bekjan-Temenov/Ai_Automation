import React, { useEffect } from 'react';
import useRevealOnScroll from '../utils/useRevealOnScroll';

const SkillBar: React.FC<{ label: string; percent: string }> = ({ label, percent }) => {
  const barRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    barRef.current?.classList.add('animate');
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span className="text-accent-orange">{percent}</span>
      </div>
      <div className="skill-bar">
        <div
          ref={barRef}
          className="skill-progress"
          style={{ '--skill-width': percent } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

const TimeLineItem: React.FC<{ side: 'left' | 'right'; year: string; title: string; text: string }> = ({
  side,
  year,
  title,
  text,
}) => (
  <div className={`timeline-item flex items-center`}>
    {side === 'right' && (
      <>
        <div className="w-1/2 pr-8 text-right">
          <h3 className="text-xl font-bold mb-2">{year}</h3>
          <h4 className="text-lg font-semibold text-accent-orange mb-2">{title}</h4>
          <p className="text-gray-300">{text}</p>
        </div>
        <div className="w-4 h-4 bg-accent-orange rounded-full border-4 border-primary-black z-10" />
        <div className="w-1/2 pl-8" />
      </>
    )}
    {side === 'left' && (
      <>
        <div className="w-1/2 md:ml-44" />
        <div className="w-4 h-4 bg-accent-orange rounded-full border-4 border-primary-black z-10" />
        <div className="w-1/2 pl-8">
          <h3 className="text-xl font-bold mb-2">{year}</h3>
          <h4 className="text-lg font-semibold text-accent-orange mb-2">{title}</h4>
          <p className="text-gray-300">{text}</p>
        </div>
      </>
    )}
  </div>
);

const About: React.FC = () => {
  useRevealOnScroll();

  const handleAvatarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transform = 'scale(1.1)';
    setTimeout(() => (el.style.transform = 'scale(1)'), 200);
  };

  return (
    <div className="flex flex-col bg-primary-black text-warm-white">
    
      <nav className="fixed top-0 w-full z-40 bg-primary-black/80 backdrop-blur-md border-b border-charcoal/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-accent-orange">Bekzhan</a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-accent-orange transition-colors">Home</a>
            <a href="/portfolio" className="hover:text-accent-orange transition-colors">Portfolio</a>
            <a href="/about" className="text-accent-orange">About</a>
            <a href="/#contact" className="bg-accent-orange hover:bg-orange-600 px-6 py-2 rounded-lg transition-all">
              Write in Telegram
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center reveal-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The person behind the automation - passionate about technology, efficiency, and helping businesses grow.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center reveal-up">
            <div
              className="avatar-container relative inline-block cursor-pointer"
              onClick={handleAvatarClick}
            >
              <img
                src="resources/avatar-bekzhan.png"
                alt="Bekzhan"
                className="w-80 h-80 rounded-2xl object-cover border-4 border-accent-orange"
              />
              <div className="skill-chip">n8n</div>
              <div className="skill-chip">AI Agents</div>
              <div className="skill-chip">Fullstack</div>
              <div className="skill-chip">Automation</div>
              <div className="skill-chip">Python</div>
              <div className="skill-chip">Node.js</div>
            </div>
          </div>

          <div className="reveal-up">
            <h2 className="text-3xl font-bold mb-6">Hi, I'm Bekzhan</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I create AI systems that take care of routine tasks so you can focus on what truly matters - growing your business and enjoying your life. With over 5 years of experience in automation and AI, I've helped dozens of businesses eliminate repetitive work and scale their operations.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My approach combines cutting-edge AI technologies with practical business sense. I don't just build automations - I build solutions that deliver real, measurable results. Whether it's reducing manual work by 90% or increasing conversion rates by 340%, I focus on outcomes that impact your bottom line.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-charcoal/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent-orange mb-2">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-charcoal/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent-orange mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal-up">
            <h2 className="text-4xl font-bold mb-6">My Journey</h2>
            <p className="text-xl text-gray-300">From curious developer to automation specialist - here's how I got here.</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-charcoal" />
            <div className="space-y-16">
              <TimeLineItem side="right" year="2024 - Present" title="AI Automation Specialist" text="Building advanced AI automation systems for businesses worldwide. Specializing in n8n workflows, AI agents, and full-stack automation solutions." />
              <TimeLineItem side="left" year="2022 - 2024" title="Full-Stack Developer" text="Developed web applications and began integrating automation tools. Discovered the power of workflow automation and AI integration." />
              <TimeLineItem side="right" year="2020 - 2022" title="Backend Developer" text="Focused on building scalable backend systems and APIs. Gained deep experience with databases, cloud services, and system architecture." />
              <TimeLineItem side="left" year="2019 - 2020" title="Junior Developer" text="Started my journey in software development. Learned the fundamentals and discovered my passion for solving complex problems." />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal-up">
            <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>
            <p className="text-xl text-gray-300">My toolkit for building powerful automation solutions.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="reveal-up">
              <h3 className="text-2xl font-bold mb-8 text-accent-orange">Automation & AI</h3>
              <div className="space-y-6">
                <SkillBar label="n8n Workflows" percent="95%" />
                <SkillBar label="OpenAI Integration" percent="90%" />
                <SkillBar label="AI Agent Development" percent="85%" />
                <SkillBar label="Workflow Optimization" percent="92%" />
              </div>
            </div>

            <div className="reveal-up">
              <h3 className="text-2xl font-bold mb-8 text-accent-orange">Development</h3>
              <div className="space-y-6">
                <SkillBar label="Python" percent="88%" />
                <SkillBar label="Node.js" percent="85%" />
                <SkillBar label="React/Next.js" percent="80%" />
                <SkillBar label="Database Design" percent="82%" />
              </div>
            </div>
          </div>

          <div className="mt-16 reveal-up">
            <h3 className="text-2xl font-bold mb-8 text-center text-accent-orange">Platforms & APIs</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { emoji: '🤖', name: 'Telegram API' },
                { emoji: '📺', name: 'YouTube API' },
                { emoji: '☁️', name: 'Vercel' },
                { emoji: '🗄️', name: 'Supabase' },
                { emoji: '📊', name: 'MongoDB' },
                { emoji: '🔥', name: 'Firebase' },
              ].map((p) => (
                <div key={p.name} className="bg-charcoal/50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <div className="text-sm font-semibold">{p.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="reveal-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to automate your workflows and scale your business? I'm here to help you build the perfect solution.
            </p>
            <a
              href="https://t.me/temen0v"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-orange hover:bg-orange-600 px-12 py-6 rounded-2xl text-2xl font-bold transition-all transform hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;