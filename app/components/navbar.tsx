'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id="inicio"], [id="sobre"], [id="planos"], [id="contato"]');
      const scrollPosition = window.scrollY + 200; // Considera o navbar fixo

      let currentSection = '#inicio';

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const sectionId = element.getAttribute('id');

        if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = `#${sectionId}`;
        }
      });

      setActiveSection(currentSection);
    };

    // Define inicio como ativo no carregamento
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    //{ label: 'Metodologia', href: '#metodologia' },
    { label: 'Sobre', href: '#sobre' },
    //{ label: 'Resultado', href: '#resultado' },
    { label: 'Planos', href: '#planos' },
    { label: 'Contato', href: '#contato' },
    //{ label: 'Começar', href: '#comecar' },
  ];

  const getLinkClassName = (href: string) => {
    const baseClass = "transition-all hover:scale-115 font-bold";
    return activeSection === href 
      ? `${baseClass} text-[var(--text-secondary)] hover:text-[var(--text-primary)]` 
      : `${baseClass} hover:text-[var(--text-primary)]`;
  };

  return (
    <div className='bg-[#121111] sticky top-0 z-50 transition-all duration-300 ease-in-out'>
      <div className="flex items-center justify-between w-full m-auto px-6 py-4">

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center justify-between w-full gap-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />

          <div className="flex items-center gap-6">
            
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={getLinkClassName(link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="md:hidden flex items-center justify-between w-full">

          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />

          {/* Hamburger Button Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          >
            <span className={`w-6 h-0.5 bg-text-primary transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-text-primary transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-text-primary transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden flex flex-col items-center gap-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={getLinkClassName(link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}