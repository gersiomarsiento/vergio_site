import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="">
      <div className="site-header max-w-360 px-30">
        <Link className="brand" href="/#top" aria-label="Inicio">
          <Image
            src="/images/vergio-logo-full-desktop.png"
            alt="Vergio"
            width={160}
            height={40}
            priority
            className="h-10 w-auto md:h-12"
          />
          {/* <span className="font-montserrat">VERGIO DIGITAL</span> */}
        </Link>
        <nav className="nav" aria-label="Navegación principal">
          {/* <Link href="/#work">Trabajo</Link> */}
          <Link href="/#services">Servicios</Link>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/#about">Nosotros</Link>
        </nav>
        <Link className="button button-large" href="/#contact">
          Hablemos
        </Link>
      </div>
    </header>
  );
}
