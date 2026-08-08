import React from 'react';
import { 
  Compass, 
  DollarSign, 
  Bot, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink 
} from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "TripSolver",
      tagline: "Full-Stack AI Travel Optimization Platform",
      description: "An AI-driven itinerary builder that synthesizes real-time location data and user preferences into complete travel schedules.",
      tech: ["Next.js", "OpenAI API", "Google Places API", "Vercel"],
      icon: <Compass className="w-5 h-5 text-indigo-600" />,
      status: "Live Application",
      link: "#"
    },
    {
      title: "Salary Grabber",
      tagline: "Compensation Intelligence Platform",
      description: "Aggregates and analyzes pay transparency data across tech sectors to provide real-time market rate visibility for job seekers.",
      tech: ["Next.js", "Python", "Data Pipelines", "Tailwind CSS"],
      icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
      status: "In Active Development",
      link: "#"
    },
    {
      title: "Automated Recruiting Feedback Tracker",
      tagline: "Workflow & Candidate Tracking App",
      description: "A web application designed to streamline candidate follow-ups, tracking metrics, and notification reminders for hiring managers.",
      tech: ["Python", "Flask", "Power Automate", "REST APIs"],
      icon: <Bot className="w-5 h-5 text-blue-600" />,
      status: "Internal Tool",
      link: "#"
    },
    {
      title: "New Horizon Careers Platform",
      tagline: "Social Impact Career Resource Site",
      description: "Digital platform delivering interactive resume workshops, career guidance, and transition strategies for job seekers.",
      tech: ["WordPress", "Elementor", "Web Architecture"],
      icon: <Globe className="w-5 h-5 text-amber-600" />,
      status: "Live Site",
      link: "https://newhorizoncareers.org"
    },
    {
      title: "TTS Hardware Voice Selector",
      tagline: "Embedded Microcontroller & Audio Device",
      description: "Custom hardware prototype built with an Elegoo/Arduino Uno, LCD screen, potentiometer dial, and SD card audio module for local text-to-speech playback.",
      tech: ["C++", "Arduino / AVR", "PlatformIO", "VS Code"],
      icon: <Cpu className="w-5 h-5 text-purple-600" />,
      status: "Hardware Prototype",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Background Accent Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/50 via-slate-50 to-slate-50 -z-10" />

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        
        {/* HERO SECTION */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs text-indigo-700 font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            Talent Acquisition Leader & Tech Builder
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 max-w-3xl leading-tight">
            Building intelligent tools for career growth, travel, & automation.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Combining a technical recruiting background with full-stack development—specializing in AI integration, workflow automation, and web applications.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#projects" 
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition text-sm flex items-center gap-2 shadow-sm shadow-indigo-200"
            >
              View Featured Work
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-medium transition text-sm shadow-xs"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="space-y-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
            <p className="text-slate-500 text-sm">Applications, platforms, and hardware solutions built from the ground up.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      {project.icon}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-medium">
                      {project.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium border border-slate-200/60">
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link !== "#" && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-400 hover:text-slate-700 transition p-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL FOCUS / STACK */}
        <section className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Technical Focus & Toolkit</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-indigo-600 uppercase tracking-wider">Frontend</span>
              <ul className="space-y-1 text-slate-600 font-medium">
                <li>Next.js / React</li>
                <li>Tailwind CSS</li>
                <li>TypeScript / JS</li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-indigo-600 uppercase tracking-wider">Backend & AI</span>
              <ul className="space-y-1 text-slate-600 font-medium">
                <li>Python / Flask</li>
                <li>OpenAI API</li>
                <li>REST & Data Pipelines</li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-indigo-600 uppercase tracking-wider">Automation</span>
              <ul className="space-y-1 text-slate-600 font-medium">
                <li>Power Automate</li>
                <li>Recruiting Analytics</li>
                <li>Workflow Systems</li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold text-indigo-600 uppercase tracking-wider">Hardware & Tools</span>
              <ul className="space-y-1 text-slate-600 font-medium">
                <li>Arduino / C++</li>
                <li>PlatformIO / VS Code</li>
                <li>Vercel / GitHub</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer id="contact" className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} • Built with Next.js & Tailwind CSS</p>
          <div className="flex gap-5">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-slate-900 transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}
