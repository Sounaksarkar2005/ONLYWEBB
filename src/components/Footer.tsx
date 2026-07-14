export default function Footer() {
  return (
    <footer className="w-full py-section-gap border-t border-outline-variant bg-background opacity-80 hover:opacity-100 grid grid-cols-1 md:grid-cols-2 gap-gutter px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto z-10 relative mt-section-gap">
      <div className="flex flex-col gap-4">
        <div className="text-headline-lg text-on-surface font-bold tracking-tighter">ONLYWEBB</div>
        <div className="text-body-md text-primary">
          © {new Date().getFullYear()} ONLYWEBB. DIGITAL ALCHEMY FOR THE FUTURE.
        </div>
      </div>
      <div className="flex flex-wrap gap-6 md:justify-end items-end">
        <a href="#" className="text-body-md text-on-surface-variant hover:text-tertiary transition-all duration-300">Privacy Policy</a>
        <a href="#" className="text-body-md text-on-surface-variant hover:text-tertiary transition-all duration-300">Terms of Service</a>
        <a href="#" className="text-body-md text-on-surface-variant hover:text-tertiary transition-all duration-300">LinkedIn</a>
        <a href="#" className="text-body-md text-on-surface-variant hover:text-tertiary transition-all duration-300">Instagram</a>
        <a href="#" className="text-body-md text-on-surface-variant hover:text-tertiary transition-all duration-300">Twitter</a>
      </div>
    </footer>
  );
}
