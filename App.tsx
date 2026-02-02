
import React from 'react';
import Navbar from './components/Navbar';
import SectionHeading from './components/SectionHeading';
import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  SKILLS, 
  PERSONAL_PROJECTS, 
  EDUCATION, 
  CERTIFICATIONS, 
  VOLUNTEERING,
  HOBBIES,
  LANGUAGES 
} from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-beige-light pt-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sapGreen/5 -skew-x-12 transform translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-sapGreen/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto text-center z-10">
          <p className="text-sapGreen font-medium tracking-[0.3em] uppercase mb-4 animate-fade-in-up">Welcome to my space</p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-sapGreen mb-6 leading-tight">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-xl md:text-2xl text-sapGreen-light font-light mb-10 italic">
            {PERSONAL_INFO.title}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-sapGreen text-beige rounded-full font-medium hover:bg-sapGreen-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 border border-sapGreen text-sapGreen rounded-full font-medium hover:bg-sapGreen hover:text-beige transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading title="About Me" />
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {PERSONAL_INFO.summary}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-serif font-bold text-sapGreen uppercase tracking-wider text-sm mb-2">Location</h4>
                  <p className="text-gray-600">{PERSONAL_INFO.location}</p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sapGreen uppercase tracking-wider text-sm mb-2">Email</h4>
                  <p className="text-gray-600">{PERSONAL_INFO.email}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-beige-dark rounded-2xl overflow-hidden shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700">
                <img src="mangesh Profile.jpeg" alt="Mangesh's Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-sapGreen rounded-2xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-beige-light px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Work Experience" />
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-sapGreen/20 -translate-x-1/2"></div>
                
                <div className={`md:flex items-start gap-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="inline-block px-4 py-1 bg-sapGreen/10 text-sapGreen rounded-full text-sm font-semibold mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-sapGreen">{exp.company}</h3>
                    <p className="text-sapGreen-light font-medium italic mb-4">{exp.role}</p>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 top-2 w-4 h-4 rounded-full bg-sapGreen shadow-md -translate-x-1/2 z-10"></div>
                  
                  <div className="md:w-1/2 mt-4 md:mt-0">
                    <div className="space-y-6">
                      {exp.projects.map((proj, pIdx) => (
                        <div key={pIdx} className="bg-white p-6 rounded-xl shadow-sm border border-sapGreen/5 hover:shadow-md transition-shadow">
                          <h4 className="font-bold text-sapGreen mb-1">{proj.title}</h4>
                          <p className="text-gray-600 text-sm mb-3">{proj.description}</p>
                          <div className="flex gap-4">
                            {proj.links?.map((link, lIdx) => (
                              <a key={lIdx} href={link.url} className="text-xs font-bold text-sapGreen hover:underline uppercase tracking-tighter">
                                {link.label} ↗
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-sapGreen px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Technical Arsenal" light />
          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((skillGroup, idx) => (
              <div key={idx} className="p-8 bg-sapGreen-dark/50 border border-beige/10 rounded-2xl backdrop-blur-sm group hover:border-beige/30 transition-all">
                <h3 className="text-beige font-serif font-bold text-xl mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-beige-dark"></span>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 bg-beige/5 text-beige text-xs font-medium rounded-full border border-beige/10 group-hover:bg-beige group-hover:text-sapGreen transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Personal Projects" subtitle="A selection of independent work focusing on functionality and user experience." />
          <div className="grid md:grid-cols-2 gap-12">
            {PERSONAL_PROJECTS.map((project, idx) => (
              <div key={idx} className="group overflow-hidden rounded-3xl bg-beige-light border border-beige-dark flex flex-col">
                <div className="aspect-video bg-gray-200 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-sapGreen/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href="#" className="bg-beige text-sapGreen px-6 py-2 rounded-full font-bold">View Details</a>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech?.map((t, ti) => (
                      <span key={ti} className="text-[10px] uppercase tracking-wider font-bold text-sapGreen-light">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-sapGreen mb-4">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Extra Sections */}
      <section className="py-24 bg-beige-light px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Education" />
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l border-sapGreen/20">
                  <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-sapGreen"></div>
                  <p className="text-sapGreen font-bold text-sm tracking-widest uppercase mb-1">{edu.period}</p>
                  <h4 className="text-xl font-serif font-bold text-sapGreen">{edu.degree}</h4>
                  <p className="text-gray-600 mb-1">{edu.institution}</p>
                  <p className="text-sapGreen-light font-medium text-sm">{edu.stats}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <SectionHeading title="Certifications" />
              <ul className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <li key={idx} className="flex justify-between items-center p-4 bg-white rounded-lg border border-sapGreen/5 shadow-sm">
                    <span className="font-medium text-sapGreen">{cert.name}</span>
                    <span className="text-xs text-gray-500 font-bold">{cert.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <SectionHeading title="Volunteering" />
            <div className="space-y-10">
              {VOLUNTEERING.map((vol, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm border border-sapGreen/5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-sapGreen">{vol.organization}</h4>
                    <span className="text-[10px] font-bold text-sapGreen-light uppercase tracking-widest">{vol.period}</span>
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase mb-3 tracking-tighter">{vol.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{vol.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-sapGreen text-beige py-24 px-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-sapGreen-dark"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Let's build something <span className="text-beige-dark italic">remarkable</span> together.</h2>
              <div className="space-y-6">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-beige/20 flex items-center justify-center group-hover:bg-beige group-hover:text-sapGreen transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-beige/50 uppercase tracking-widest">Email Me</p>
                    <p className="text-lg">{PERSONAL_INFO.email}</p>
                  </div>
                </a>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-beige/20 flex items-center justify-center group-hover:bg-beige group-hover:text-sapGreen transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-beige/50 uppercase tracking-widest">Call Me</p>
                    <p className="text-lg">{PERSONAL_INFO.phone}</p>
                  </div>
                </a>
              </div>

              <div className="mt-12 flex gap-4">
                <a href={PERSONAL_INFO.links.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 border border-beige/20 rounded-full flex items-center justify-center hover:bg-beige hover:text-sapGreen transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href={PERSONAL_INFO.links.github} target="_blank" rel="noreferrer" className="w-10 h-10 border border-beige/20 rounded-full flex items-center justify-center hover:bg-beige hover:text-sapGreen transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>

            <div className="bg-beige-light p-8 rounded-3xl text-gray-800">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-sapGreen uppercase tracking-widest mb-2">Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-sapGreen/20 py-2 focus:border-sapGreen outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-sapGreen uppercase tracking-widest mb-2">Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-sapGreen/20 py-2 focus:border-sapGreen outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-sapGreen uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-sapGreen/20 py-2 focus:border-sapGreen outline-none transition-colors" placeholder="How can I help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-sapGreen text-beige rounded-xl font-bold hover:bg-sapGreen-dark transition-all shadow-md">Send Message</button>
              </form>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-beige/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-beige/40">© {new Date().getFullYear()} Harsh Kishor Chudasama. Built for high-end results.</p>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-beige/60">
              {LANGUAGES.map((lang, i) => (
                <span key={i}>{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
