import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroArt } from "@/components/hero-art";
import { Ticker } from "@/components/ticker";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

const services = [
  [
    "01",
    "Estrategia",
    "Investigación, posicionamiento, roadmaps digitales, definición de producto y resolución de problemas.",
  ],
  [
    "02",
    "Diseño",
    "Sistemas de marca, UX/UI, sitios web, interfaces de producto y diseño de interacción.",
  ],
  [
    "03",
    "Desarrollo",
    "Sitios rápidos y responsivos y productos digitales escalables, construidos para necesidades reales.",
  ],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero section-shell">
          <Reveal className="hero-copy">
            <p className="eyebrow">ESTRATEGIA · DISEÑO · DIGITAL</p>
            <h1>
              Ideas claras.
              <br />
              <span>Mejores resultados.</span>
            </h1>
            <p className="hero-text">
              Ayudamos a empresas ambiciosas a convertir desafíos complejos en
              experiencias digitales simples, útiles y que hacen avanzar el
              negocio.
            </p>
            <div className="hero-actions">
              <Link className="button" href="#contact">
                Empezar un proyecto <span>↗</span>
              </Link>
              <Link className="text-link" href="#work">
                Ver nuestro trabajo <span>↓</span>
              </Link>
            </div>
          </Reveal>
          <HeroArt />
        </section>
        <Ticker />
        <Reveal className="section-shell">
          <section id="about" className="split-section">
            <div>
              <p className="eyebrow">QUÉ HACEMOS</p>
              <h2>Hacemos que lo digital se sienta menos complicado.</h2>
            </div>
            <div className="intro-copy">
              <p>
                Desde la primera idea hasta el lanzamiento y la iteración,
                reunimos estrategia, diseño y tecnología en un proceso enfocado.
                El resultado: decisiones más claras, mejores experiencias y
                trabajo más fácil de mantener.
              </p>
              <div className="stats">
                <div>
                  <strong>40+</strong>
                  <span>proyectos entregados</span>
                </div>
                <div>
                  <strong>8 años</strong>
                  <span>construyendo juntos</span>
                </div>
                <div>
                  <strong>12</strong>
                  <span>especialistas</span>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
        <section id="work" className="work section-shell">
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow">TRABAJO SELECCIONADO</p>
                <h2>
                  Hecho para ser útil.
                  <br />
                  Diseñado para ser recordado.
                </h2>
              </div>
              <Link className="text-link" href="#contact">
                Ver proyectos <span>↗</span>
              </Link>
            </div>
          </Reveal>
          <div className="project-grid">
            <Reveal>
              <ProjectCard
                title="Geo Cabañas"
                meta="Plataforma de marca · Diseño de producto · Desarrollo"
                large
                kind="image"
                src="/images/geo_hero.png"
              />
            </Reveal>
            <Reveal>
              <ProjectCard
                title="Wakana"
                meta="UX/UI · E-Commerce"
                kind="image"
                src="/images/wakana.png"
              />
            </Reveal>
            <Reveal>
              <ProjectCard
                title="Guía Amarilla PDD"
                meta="PWA App · Servicios · Web"
                kind="image"
                src="/images/guia-pdd.png"
              />
            </Reveal>
          </div>
        </section>
        <section id="services" className="services">
          <div className="section-shell">
            <Reveal>
              <div className="section-heading">
                <div>
                  <p className="eyebrow">SERVICIOS</p>
                  <h2>Un equipo desde la idea hasta el lanzamiento.</h2>
                </div>
              </div>
            </Reveal>
            <div className="service-list">
              {services.map((s) => (
                <Reveal key={s[0]}>
                  <article className="service-row">
                    <span className="service-number">{s[0]}</span>
                    <h3>{s[1]}</h3>
                    <p>{s[2]}</p>
                    <span className="service-icon">↗</span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <Reveal>
          <section className="quote section-shell">
            <div className="quote-mark">“</div>
            <blockquote>
              Nos dieron claridad en las partes más complejas, cuestionaron las
              suposiciones correctas y lograron que el resultado final se
              sintiera simple.
            </blockquote>
            <p>— Cliente, Empresa</p>
          </section>
        </Reveal>
        <section id="contact" className="contact">
          <Reveal className="section-shell contact-inner">
            <p className="eyebrow">¿TENÉS UN PROYECTO EN MENTE?</p>
            <h2>
              Hagamos algo
              <br />
              <span>que valga la pena.</span>
            </h2>
            <a
              className="button button-mint"
              href="https://wa.me/+59898899654?text=¡Hola! Me interesa saber más sobre los servicios que ofrecen."
            >
              Escribinos por WhatsApp →
            </a>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
