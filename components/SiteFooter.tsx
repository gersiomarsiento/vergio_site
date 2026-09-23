import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "./icons/InstagramIcon";

export function SiteFooter() {
  return (
    <footer className="footer mx-auto max-w-360 px-3 lg:px-30">
      <Link className="brand" href="/#top" aria-label="Inicio">
        <Image
          src="/images/vergio-logo-full-desktop.png"
          alt="Vergio"
          width={160}
          height={40}
          priority
          className="h-10 w-auto md:h-12 min-w-20 object-contain"
        />
      </Link>
      <p>© 2026 VERGIO DIGITAL. Todos los derechos reservados.</p>
      <div className="footer-links">
        {/* <Link href="#">LinkedIn</Link> */}
        <Link
          href="https://www.instagram.com/vergio.digital/"
          aria-label="Link to Vergio Digital's Instagram"
          target="blank"
          className="hover:text-purple"
        >
          <InstagramIcon className="w-8 h-8" />
        </Link>
      </div>
    </footer>
  );
}
