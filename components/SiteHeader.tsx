"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#services", label: "Servicios" },
  { href: "/#work", label: "Portfolio" },
  { href: "/#about", label: "Nosotros" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquea el scroll de la página mientras el drawer está abierto
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Cierra con Escape
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className="relative z-50">
      <div className="mx-auto h-12.5 lg:h-20 flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] gap-7 max-w-xl lg:max-w-360 px-3 lg:px-30">
        <Link className="brand" href="/#top" aria-label="Inicio">
          <Image
            src="/images/vergio-logo-full-desktop.png"
            alt="Vergio"
            width={160}
            height={40}
            priority
            className="h-10 w-auto md:h-12 min-w-20 object-contain hidden lg:block"
          />
          <Image
            src="/images/vergio-logo-simple.png"
            alt="Vergio"
            width={40}
            height={40}
            priority
            className="h-5 w-auto md:h-8 object-contain lg:hidden block"
          />
        </Link>

        {/* Nav desktop */}
        <nav
          className="hidden lg:flex gap-2.5 text-base font-medium"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="p-4 hover:opacity-60 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          className="hidden lg:inline-flex button button-large button-purple justify-self-end"
          href="/#contact"
        >
          Hablemos
        </Link>
        {/* Botón hamburguesa (mobile / tablet) */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          aria-controls="mobile-drawer"
          className="lg:hidden relative flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span className="h-0.5 w-6 rounded-full bg-black transition-all" />
          <span className="h-0.5 w-6 rounded-full bg-black transition-all" />
          <span className="h-0.5 w-6 rounded-full bg-black transition-all" />
        </button>
      </div>

      {/* Overlay que grisa la página */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-80 bg-white shadow-[0_18px_50px_rgba(24,12,34,0.15)] transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-4">
          <span className="text-sm font-medium opacity-60">Menú</span>
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar menú"
            className="flex h-10 w-10 items-center justify-center text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col px-4 py-2" aria-label="Navegación mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="border-b border-[var(--line)] py-4 text-lg font-medium hover:opacity-60 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-4 py-6">
          <Link
            className="button button-large button-purple w-full justify-center"
            href="/#contact"
            onClick={close}
          >
            Hablemos
          </Link>
        </div>
      </div>
    </header>
  );
}
