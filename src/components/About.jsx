import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-24">
      <motion.div
        className="mx-auto max-w-4xl rounded-3xl border border-[#d7cabd] bg-[#f1e8dc] p-8 md:p-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading eyebrow="About" title="We turn complexity into clear systems" />
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-[#4f433a]">
          We partner with ambitious businesses to simplify fragmented processes, unify digital tools, and build dependable systems that make growth feel organized instead of overwhelming.
        </p>
      </motion.div>
    </section>
  );
}
