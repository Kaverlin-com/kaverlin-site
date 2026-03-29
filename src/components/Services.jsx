import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const services = [
  {
    title: 'Web Design',
    description: 'Premium, conversion-focused websites that feel clean, intuitive, and unmistakably professional.',
  },
  {
    title: 'SEO',
    description: 'Technical and on-page optimization to improve search visibility and attract qualified traffic.',
  },
  {
    title: 'System Integration',
    description: 'Bring your tools together with reliable integrations that reduce friction and data silos.',
  },
  {
    title: 'Automation',
    description: 'Streamline repetitive operations with practical automations that save time every week.',
  },
  {
    title: 'Testing',
    description: 'Fully testing and repoting on bug fixes.',
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="Strategic support for your digital foundation"
          description="Designed to simplify complexity while elevating your online presence and operational efficiency."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-[#dbcfc2] bg-[#fdf9f5] p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl font-semibold text-[#2f2721]">{service.title}</h3>
              <p className="text-[#5d4d42]">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
