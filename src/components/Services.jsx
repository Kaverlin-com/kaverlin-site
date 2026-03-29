import SectionHeading from './SectionHeading';

/* ---------------- ICONS ---------------- */

const icons = {
  web: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="3" y1="8" x2="21" y2="8" />
    </svg>
  ),
  seo: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  integration: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 12h8M12 8v8" />
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0A1.7 1.7 0 0 0 9 3.1V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8A1.7 1.7 0 0 0 21 11h.1a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.6 1z" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  ),
  branding: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20l4-1 9-9-3-3-9 9-1 4z" />
      <path d="M14 6l3 3" />
    </svg>
  ),
  rebuild: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <polyline points="3 3 3 9 9 9" />
    </svg>
  ),
  testing: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  hosting: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="6" rx="1" />
      <rect x="3" y="15" width="18" height="6" rx="1" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 15c1.3 1 2.7 1.5 4 1.5s2.7-.5 4-1.5" />
    </svg>
  ),
};

/* ---------------- DATA ---------------- */

const coreServices = [
  { title: 'Web Design', description: 'Conversion-focused websites designed to feel clean, intuitive, and built to turn traffic into customers.', icon: icons.web },
  { title: 'SEO', description: 'Technical and on-page optimisation to improve visibility, rankings, and attract qualified traffic.', icon: icons.seo },
  { title: 'System Integration', description: 'Connect your systems and tools to remove friction, improve data flow, and support scalable growth.', icon: icons.integration },
  { title: 'Automation', description: 'Practical automations that reduce manual work, improve consistency, and save time every week.', icon: icons.automation },
  { title: 'Data Structuring', description: 'Organise and structure your data for better reporting, cleaner integrations, and smarter decisions.', icon: icons.data },
];

const supportServices = [
  { title: 'Branding', description: 'Clean, modern brand systems designed to feel consistent, professional, and aligned with your digital presence.', icon: icons.branding },
  { title: 'Website Rebuilds', description: 'Rebuild outdated websites with a modern structure, improved UX, and stronger conversion performance.', icon: icons.rebuild },
  { title: 'Testing & QA', description: 'Thorough testing and clear reporting to identify issues, validate fixes, and ensure everything works properly.', icon: icons.testing },
  { title: 'Hosting Setup', description: 'Fast, secure hosting setup and optimisation focused on performance, reliability, and scalability.', icon: icons.hosting },
  { title: 'Support', description: 'Ongoing support to keep your website stable, secure, and performing as your business evolves.', icon: icons.support },
];

/* ---------------- CARD ---------------- */

function ServiceCard({ service, index }) {
  return (
    <article
      className="group rounded-2xl border border-[#dbcfc2] bg-[#fdf9f5] p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* ICON */}
      <div className="mb-4 text-[#8a7666] transition-all duration-300 group-hover:text-[#2f2721] group-hover:scale-105">
        {service.icon}
      </div>

      <h3 className="mb-3 text-lg font-semibold text-[#2f2721] tracking-tight">
        {service.title}
      </h3>

      <p className="text-sm leading-relaxed text-[#5d4d42]">
        {service.description}
      </p>

      <div className="mt-4 h-[2px] w-0 bg-[#c2a98f] transition-all duration-300 group-hover:w-12"></div>
    </article>
  );
}

/* ---------------- PAGE ---------------- */

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">

        <SectionHeading
          eyebrow="Services"
          title="Web, data and systems built for growth"
          description="Designed to simplify complexity, improve performance, and connect the parts of your business that matter."
        />

        <div className="mt-12">
          <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-[#8a7666]">
            Core Services
          </h3>

          <div className="grid gap-5 sm:grid-cols-2">
            {coreServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-[#8a7666]">
            Enhancement & Support
          </h3>

          <div className="grid gap-5 sm:grid-cols-2">
            {supportServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
