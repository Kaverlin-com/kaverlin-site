import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function EnquiryForm() {
  return (
    <section id="enquiry" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#d8cabd] bg-[#fdf9f5] p-8 shadow-sm md:p-10">
        <SectionHeading
          eyebrow="Enquiry"
          title="Let’s build your next system"
          description="Share a few details and we’ll follow up with a practical starting point."
        />
        <motion.form
          className="grid gap-5"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <label className="grid gap-2 text-sm font-medium text-[#4d4037]">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="rounded-xl border border-[#d3c3b5] bg-white px-4 py-3 outline-none ring-[#4f6a55] transition focus:ring-2"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-[#4d4037]">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              className="rounded-xl border border-[#d3c3b5] bg-white px-4 py-3 outline-none ring-[#4f6a55] transition focus:ring-2"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-[#4d4037]">
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project"
              className="rounded-xl border border-[#d3c3b5] bg-white px-4 py-3 outline-none ring-[#4f6a55] transition focus:ring-2"
            />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex w-fit rounded-full bg-[#4f6a55] px-7 py-3 text-sm font-medium text-[#f8f3ed] transition hover:bg-[#3f5645]"
          >
            Send Enquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}
