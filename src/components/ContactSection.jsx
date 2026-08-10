import React, { useEffect } from 'react';
import { AUTHOR_INFO } from '../data/portfolioData';
import { Mail, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  useEffect(() => {
    // Dynamically load Tally embed script for auto-height scaling
    const scriptUrl = "https://tally.so/widgets/embed.js";
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      document.body.appendChild(script);
    } else if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  const handleDownloadVCard = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:${AUTHOR_INFO.name}
N:Kundu;Aurghyadip;;;
TITLE:${AUTHOR_INFO.role}
ORG:${AUTHOR_INFO.institution}
EMAIL;TYPE=INTERNET,WORK:${AUTHOR_INFO.email}
TEL;TYPE=CELL:${AUTHOR_INFO.phone}
URL:${AUTHOR_INFO.github}
NOTE:Assistant Professor of Computer Science & Engineering and Open Source Developer.
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${AUTHOR_INFO.name.replace(/\s+/g, '_')}_Academic_Contact.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-12 lg:py-16 px-6 sm:px-10 lg:px-12 border-none">
      {/* Eyebrow */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-crimson)] tracking-widest uppercase font-semibold">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-crimson)]"></span>
          <span>Communication</span>
        </div>

        <button
          onClick={handleDownloadVCard}
          className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-body hover:text-[var(--accent-crimson)] font-mono text-xs flex items-center gap-1.5 transition-all duration-200 shadow-sm cursor-pointer"
          title="Download contact details as .vcf file"
        >
          <Mail size={12} className="text-[var(--accent-crimson)]" />
          <span>Save Contact (.vcf)</span>
        </button>
      </div>

      <div className="relative rounded-2xl p-6 sm:p-10 bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-page)] border border-[var(--border-main)] shadow-lg overflow-hidden">
        {/* Decorative Glow Orb */}
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[var(--glow-orb)] rounded-full blur-3xl pointer-events-none" />

        <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold theme-title mb-3 tracking-tight">
          Office Hours & Academic Inquiries
        </h2>
        <p className="text-xs sm:text-sm theme-body max-w-2xl mb-6 leading-relaxed">
          Open to collaborative research projects, guest lectures, curriculum advisory, and academic roles. Students and researchers can get in touch via email, LinkedIn, or the form below.
        </p>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
          <a 
            href={`mailto:${AUTHOR_INFO.email}`} 
            className="glass-card p-3 rounded-xl flex items-center gap-2.5 hover:border-[var(--accent-crimson)] transition-all duration-200 group"
          >
            <Mail className="w-4 h-4 text-[var(--accent-crimson)] shrink-0 group-hover:scale-110 transition-transform" />
            <div className="min-w-0">
              <span className="block font-mono text-[9px] uppercase theme-muted tracking-wider">Email</span>
              <span className="text-xs font-medium theme-title truncate block group-hover:text-[var(--accent-crimson)]">adkundu</span>
            </div>
          </a>

          <a 
            href={AUTHOR_INFO.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-card p-3 rounded-xl flex items-center gap-2.5 hover:border-[var(--accent-crimson)] transition-all duration-200 group"
          >
            <i className="fa-brands fa-linkedin text-base text-[var(--accent-gold)] shrink-0 group-hover:scale-110 transition-transform"></i>
            <div className="min-w-0">
              <span className="block font-mono text-[9px] uppercase theme-muted tracking-wider">LinkedIn</span>
              <span className="text-xs font-medium theme-title truncate block group-hover:text-[var(--accent-crimson)]">aurghyadip</span>
            </div>
          </a>

          <a 
            href={AUTHOR_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-card p-3 rounded-xl flex items-center gap-2.5 hover:border-[var(--accent-crimson)] transition-all duration-200 group"
          >
            <i className="fa-brands fa-github text-base text-[var(--accent-gold)] shrink-0 group-hover:scale-110 transition-transform"></i>
            <div className="min-w-0">
              <span className="block font-mono text-[9px] uppercase theme-muted tracking-wider">GitHub</span>
              <span className="text-xs font-medium theme-title truncate block group-hover:text-[var(--accent-crimson)]">aurghya-0</span>
            </div>
          </a>

          <a 
            href={AUTHOR_INFO.twitter} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-card p-3 rounded-xl flex items-center gap-2.5 hover:border-[var(--accent-crimson)] transition-all duration-200 group"
          >
            <i className="fa-brands fa-x-twitter text-base text-[var(--accent-gold)] shrink-0 group-hover:scale-110 transition-transform"></i>
            <div className="min-w-0">
              <span className="block font-mono text-[9px] uppercase theme-muted tracking-wider">Twitter</span>
              <span className="text-xs font-medium theme-title truncate block group-hover:text-[var(--accent-crimson)]">aurghyadip</span>
            </div>
          </a>

          <a 
            href={AUTHOR_INFO.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-card p-3 rounded-xl flex items-center gap-2.5 hover:border-[var(--accent-crimson)] transition-all duration-200 group"
          >
            <i className="fa-brands fa-instagram text-base text-[var(--accent-crimson)] shrink-0 group-hover:scale-110 transition-transform"></i>
            <div className="min-w-0">
              <span className="block font-mono text-[9px] uppercase theme-muted tracking-wider">Instagram</span>
              <span className="text-xs font-medium theme-title truncate block group-hover:text-[var(--accent-crimson)]">aurghyadip</span>
            </div>
          </a>
        </div>

        {/* Tally Embedded Form Container */}
        <div className="bg-[var(--bg-card)] p-4 sm:p-6 rounded-xl border border-[var(--border-main)] mb-6 overflow-hidden shadow-sm">
          <h3 className="font-['Cinzel'] text-base font-semibold theme-title mb-4 flex items-center gap-2">
            <MessageSquare size={15} className="text-[var(--accent-crimson)]" />
            <span>Send a Message</span>
          </h3>

          <iframe
            data-tally-src="https://tally.so/embed/vGv75d?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            src="https://tally.so/embed/vGv75d?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="320"
            className="w-full border-0 rounded-xl"
            title="Academic Contact Form"
          ></iframe>
        </div>

        {/* Footer Copy */}
        <div className="pt-5 border-t border-[var(--border-main)] font-mono text-[10px] sm:text-[11px] theme-muted text-center">
          © 2026 {AUTHOR_INFO.name}. Built with React, Vite & Tailwind CSS. Designed for academic presentation & GitHub Pages.
        </div>
      </div>
    </section>
  );
}
