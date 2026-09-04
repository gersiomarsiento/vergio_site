import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="footer section-shell">
      <Link className="brand" href="/#top">
        <Image
          src="/images/vergio-logo-simple.png"
          alt="Vergio"
          width={160}
          height={40}
          priority
          className="h-10 w-auto md:h-14"
        />
        <span className="font-montserrat">VERGIO DIGITAL</span>
      </Link>
      <p>© 2026 VERGIO DIGITAL. Todos los derechos reservados.</p>
      <div className="footer-links">
        <Link href="#">LinkedIn</Link>
        <Link href="#">Instagram</Link>
      </div>
    </footer>
  );
}
