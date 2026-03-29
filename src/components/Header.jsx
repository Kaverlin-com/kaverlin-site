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
        
        {/* Logo */}
        <a
          href="#home"
          className="text-sm font-semibold tracking-[0.13em] text-[#3b312b] uppercase transition duration-300 hover:text-[#2f2721] hover:tracking-[0.18em]"
        >
          Kaverlin
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-4 text-sm text-[#5d4d42] md:gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative transition duration-300 hover:text-[#2f2721] hover:-translate-y-[1px]"
            >
              {item.label}

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#2f2721] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
