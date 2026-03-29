import SectionHeading from './SectionHeading';

const coreServices = [
  {
    title: 'Web Design',
    description:
      'Conversion-focused websites designed to feel clean, intuitive, and built to turn traffic into customers.',
  },
  {
    title: 'SEO',
    description:
      'Technical and on-page optimisation to improve visibility, rankings, and attract qualified traffic.',
  },
  {
    title: 'System Integration',
    description:
      'Connect your systems and tools to remove friction, improve data flow, and support scalable growth.',
  },
  {
    title: 'Automation',
    description:
      'Practical automations that reduce manual work, improve consistency, and save time every week.',
  },
  {
    title: 'Data Structuring',
    description:
      'Organise and structure your data for better reporting, cleaner integrations, and smarter decisions.',
  },
];

const supportServices = [
  {
    title: 'Branding',
    description:
      'Clean, modern brand systems designed to feel consistent, professional, and aligned with your digital presence.',
  },
  {
    title: 'Website Rebuilds',
    description:
      'Rebuild outdated websites with a modern structure, improved UX, and stronger conversion performance.',
  },
  {
    title: 'Testing & QA',
    description:
      'Thorough testing and clear reporting to identify issues, validate fixes, and ensure everything works properly.',
  },
  {
    title: 'Hosting Setup',
    description:
      'Fast, secure hosting setup and optimisation focused on performance, reliability, and scalability.',
  },
  {
    title: 'Support',
    description:
      'Ongoing support to keep your website stable, secure, and performing as your business evolves.',
  },
];

function ServiceCard({ service, index }) {
  return (
    <article
      className="group rounded-2xl border border-[#dbcfc2] bg-[#fdf9f5] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fadeUp"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <h3 className="mb-3 text-lg font-semibold text-[#2f2721] tracking-tight">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-[#5d4d42]">
        {service.description}
      </p>

      {/* subtle hover accent */}
      <div className="mt-4 h-[2px] w-0 bg-[#c2a98f] transition-all duration-300 group-hover:w-12"></div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">

        <SectionHeading
          eyebrow="Services"
          title="Web, data and systems built for growth"
          description="Designed to simplify complexity, improve performance, and connect the parts of your business that matter."
        />

        {/* Core Services */}
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

        {/* Support Services */}
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
