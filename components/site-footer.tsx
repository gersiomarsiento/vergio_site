import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "./icons/InstagramIcon";

export function SiteFooter() {
  return (
    <footer className="footer section-shell">
        <Link className="brand" href="/#top" aria-label="Inicio">
          <Image
            src="/images/vergio-logo-full-desktop.png"
            alt="Vergio"
            width={160}
            height={40}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>
      <p>© 2026 VERGIO DIGITAL. Todos los derechos reservados.</p>
      <div className="footer-links">
        {/* <Link href="#">LinkedIn</Link> */}
        <Link href="https://www.instagram.com/vergio.digital/" target="blank">
          <InstagramIcon className="w-8 h-8"/>
        </Link>
      </div>
    </footer>
  );
}
