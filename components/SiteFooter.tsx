import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "./icons/InstagramIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import ArrowSmall from "./icons/ArrowSmall";
import LocationIcon from "./icons/LocationIcon";
import { Mail, Phone } from "lucide-react";

const footerNav = [
  { href: "/#services", label: "Servicios" },
  { href: "/#work", label: "Portfolio" },
  { href: "/#about", label: "Nosotros" },
  { href: "/#contact", label: "Contacto" },
];

const socials = [
  { href: "https://instagram.com/vergio.digital", label: "Instagram" },
  {
    href: "https://wa.me/+59898899654?text=¡Hola! Me interesa saber más sobre los servicios que ofrecen.",
    label: "WhatsApp",
  },
  // { href: "https://linkedin.com", label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-paper">
      <div className="mx-auto max-w-xl lg:max-w-360 px-3 py-6 lg:px-30 lg:py-24">
        {/* Columnas */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8">
          {/* Marca */}
          <div className="flex flex-col gap-5">
            <Link href="/#top" className="brand" aria-label="Inicio">
              <Image
                src="/images/vergio-logo-full-desktop.png"
                alt="Vergio"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="max-w-70 text-sm leading-relaxed text-muted">
              Soluciones creativas a problemas reales. Estrategia, diseño y
              producto digital para empresas y emprendimientos.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium"
                >
                  {s.label === "Instagram" ? (
                    <InstagramIcon className="w-8 h-8 transition hover:text-purple" />
                  ) : s.label === "WhatsApp" ? (
                    <WhatsAppIcon className="w-8 h-8 transition hover:text-mint-400" />
                  ) : (
                    s.label
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-purple">
              Navegación
            </span>
            <nav
              className="flex flex-col gap-3"
              aria-label="Navegación del footer"
            >
              {footerNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm hover:text-purple transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-purple">
              Contacto
            </span>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:info@vergio.digital"
                className="flex gap-2 items-center w-fit hover:text-purple transition"
              >
                <Mail className="inline-block w-4"/><span>info@vergio.digital</span>
              </a>
              <a
                href="tel:+59898899654"
                className="flex gap-2 items-center w-fit hover:text-purple transition"
              ><Phone className="inline-block w-4"/>
                <span>+598 98 899 654</span>
              </a>
              <div className="flex gap-2 items-center"><span className="inline-block"><LocationIcon /></span>Punta del Diablo, Uruguay</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-purple">
              ¿Empezamos?
            </span>
            <p className="text-sm text-muted">
              Contanos tu proyecto y te respondemos en menos de 24hs.
            </p>
            <Link
              href="/#contact"
              className="button button-purple button-large w-fit"
            >
              Hablemos{" "}
              <span>
                <ArrowSmall className="rotate-225" />
              </span>
            </Link>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--line)] pt-6 text-sm text-muted lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {new Date().getFullYear()} Vergio Digital. Todos los derechos
            reservados.
          </p>
          {/* <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/terminos" className="hover:opacity-60 transition">
              Términos
            </Link>
            <Link href="/privacidad" className="hover:opacity-60 transition">
              Privacidad
            </Link>
            <Link href="/#top" className="hover:opacity-60 transition">
              Volver arriba ↑
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
