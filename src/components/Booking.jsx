import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function Booking() {
  return (
    <section id="booking" className="px-6 pt-8 pb-24 md:pb-28">
      <motion.div
        className="mx-auto max-w-4xl rounded-3xl border border-dashed border-[#b9ac9f] bg-[#efe5d8] p-8 text-center md:p-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          eyebrow="Booking"
          title="Calendar integration coming soon"
          description="This section is reserved for your scheduling tool (Calendly, Google Calendar, or custom integration)."
        />
        <p className="text-[#5b4d43]">Interactive booking placeholder</p>
      </motion.div>
    </section>
  );
}
