export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
      <p className="mb-3 text-xs tracking-[0.22em] text-[#7a6a5d] uppercase">{eyebrow}</p>
      <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#2f2721] md:text-4xl">{title}</h2>
      {description ? <p className="text-base text-[#5d4d42] md:text-lg">{description}</p> : null}
    </div>
  );
}
