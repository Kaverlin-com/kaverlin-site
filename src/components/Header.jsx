export default function Header() {
  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Enquiry', href: '#enquiry' },
    { label: 'Booking', href: '#booking' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#ddd0c3]/80 bg-[#f8f3ed]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-sm font-semibold tracking-[0.13em] text-[#3b312b] uppercase">
          Kaverlin
        </a>
        <nav className="flex items-center gap-4 text-sm text-[#5d4d42] md:gap-6">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-[#2f2721]">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
