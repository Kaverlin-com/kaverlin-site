import { motion } from 'framer-motion';

export default function App() {
  return (
    <main className="font-sans">
      <Hero />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative z-0 overflow-hidden px-6 pt-24 pb-20 md:pt-32 md:pb-28">

      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop"
          alt=""
          loading="eager"
          className="h-full w-full object-cover opacity-[0.25] blur-[1px] scale-105"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(185,161,136,0.35),_transparent_55%)]" />

      {/* Glow Effect */}
      <div className="absolute -top-40 right-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-[#d8c3a5]/30 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Tag */}
          <p className="mb-6 inline-flex rounded-full border border-[#cebcae] bg-[#f6efe7] px-4 py-2 text-xs tracking-[0.16em] text-[#6d5d52] uppercase">
            Digital Systems Studio
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-semibold tracking-tight text-[#2f2721] sm:text-5xl md:text-6xl">
            Websites, Data and Systems Built for Growth
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5d4d42] md:text-xl">
            Modern websites, stronger SEO, and connected systems that automate and support long-term growth.
          </p>

          {/* CTA */}
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
