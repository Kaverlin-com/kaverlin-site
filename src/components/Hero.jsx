import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(185,161,136,0.35),_transparent_50%)]" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-6 inline-flex rounded-full border border-[#cebcae] bg-[#f6efe7] px-4 py-2 text-xs tracking-[0.16em] text-[#6d5d52] uppercase">
            Digital Systems Studio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#2f2721] sm:text-5xl md:text-6xl">
            Clarity, Built Into Your Business
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5d4d42] md:text-xl">
            We design modern websites, strengthen your SEO foundation, and automate repetitive workflows with connected digital systems that support long-term growth.
          </p>
          <a
            href="#enquiry"
            className="mt-10 inline-flex items-center rounded-full bg-[#4f6a55] px-7 py-3.5 text-sm font-medium text-[#f9f4ee] transition duration-300 hover:-translate-y-0.5 hover:bg-[#3f5645]"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
