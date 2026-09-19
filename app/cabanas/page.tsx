import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroArt } from "@/components/hero-art";
import { Ticker } from "@/components/ticker";
import { Reveal } from "@/components/reveal";

const plans = [
  {
    level: "01 · VITRINA",
    name: "Simple",
    tagline: "Presencia profesional.",
    price: "US$250",
    unit: "pago único",
    featured: false,
    features: [
      "Sitio propio con dominio y mail",
      "Logo y colores adaptados",
      "Diseño optimizado para celulares",
      "Calendario sincronizado",
      "Galería de fotos",
      "Sección Instagram/Reseñas",
      "Mapa, ubicación, redes y contacto",
      "Trilingüe/Multimoneda",
      "Botón directo a WhatsApp",
    ],
    excluded: ["Motor de reservas", "SEO optimizado", "Panel de administrador"],
    blurb: "Ideal para generar confianza en el cliente.",
  },
  {
    level: "02 · RECOMENDADO",
    name: "Completo",
    tagline: "Automatizá la operacion de reservas.",
    price: "US$450",
    unit: "pago único",
    featured: true,
    features: [
      "Sitio propio con dominio y mail",
      "Logo y colores adaptados",
      "Diseño optimizado para celulares",
      "Calendario sincronizado",
      "Galería de fotos",
      "Sección Instagram/Reseñas",
      "Mapa, ubicación, redes y contacto",
      "Trilingüe/Multimoneda",
      "Botón directo a WhatsApp",
      "Motor de reservas",
      "SEO optimizado",
    ],
    excluded: ["Panel de administrador"],
    blurb: "La comodidad de que tus clientes puedan reservar por sí mismos.",
  },
  {
    level: "03 · COMPLETO",
    name: "Full Admin",
    tagline: "Control total del contenido.",
    price: "US$650",
    unit: "pago único",
    featured: false,
    features: [
      "Sitio propio con dominio y mail",
      "Logo y colores adaptados",
      "Diseño optimizado para celulares",
      "Calendario sincronizado",
      "Galería de fotos",
      "Sección Instagram/Reseñas",
      "Mapa, ubicación, redes y contacto",
      "Trilingüe/Multimoneda",
      "Botón directo a WhatsApp",
      "Motor de reservas",
      "SEO optimizado",
      "Panel de administrador",
    ],
    excluded: [],
    blurb:
      "La capacidad de modiicar el contenido a tu gusto por tu cuenta y cuando quieras.",
  },
];
const support = [
  [
    "Autogestionado",
    "US$0",
    "Te lo entregamos y lo manejás vos. Sin compromiso de por medio. Hosting también por cuenta tuya",
  ],
  [
    "Solo hosting",
    "US$40/año",
    "Nos encargamos del dominio y el hosting. El resto lo manejás vos.",
  ],
  [
    "Retainer completo",
    "US$30/mes",
    "Monitoreamos la sincronización, hacemos cambios menores y arreglamos lo que falle. Máximo 3 horas mensuales.",
  ],
  [
    "Por hora",
    "US$20/h",
    "Sin cuota fija — nos llamás cuando necesitás un cambio puntual.",
  ],
];

export default function Cabanas() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero section-shell flex">
          <Reveal className="hero-copy">
            <p className="eyebrow">RESERVAS DIRECTAS · SIN COMISIÓN</p>
            <h1 className="xl:text-[60px]! text-[40px]!">
              Cada reserva por Booking le deja el{" "}
              <span className="bg-purple text-white!">20%</span> a otro.
            </h1>
            <p className="hero-text">
              Con un sitio propio, esa plata se queda en tu bolsillo. Pagás una
              sola vez, no una cuota mensual — y seguís publicando en Booking y
              Airbnb si querés. Esto es una puerta más para tus huéspedes, no un
              reemplazo.
            </p>
            <p
              className="hero-text"
              style={{ fontSize: "14px", lineHeight: 1.6, marginTop: "-14px" }}
            >
              Armado a medida para cabañas de Punta del Diablo — el mismo tipo
              de sitio, tu propio contenido.
            </p>
            <div className="hero-actions">
              <Link className="button" href="#precios">
                Ver opciones <span>↓</span>
              </Link>
              <Link className="text-link" href="#contacto">
                Hablemos <span>↗</span>
              </Link>
            </div>
          </Reveal>
          <HeroArt cabanas />
        </section>
        <Ticker cabanas />
        <Reveal className="section-shell">
          <section className="split-section">
            <div>
              <p className="eyebrow">LA CUENTA QUE IMPORTA</p>
              <h2>Lo que se pierde por reserva, y lo que se paga una vez.</h2>
            </div>
            <div className="intro-copy">
              <p>
                Números ilustrativos para ver la lógica: tu tarifa y tu volumen
                de reservas son los que definen cuánto te ahorrás realmente.
              </p>
              <div className="stats">
                <div>
                  <strong>20%</strong>
                  <span>comisión de referencia</span>
                </div>
                <div>
                  <strong>US$450</strong>
                  <span>pago único ilustrativo</span>
                </div>
                <div>
                  <strong>4-5</strong>
                  <span>reservas para cubrirlo</span>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
        <section className="services">
          <div className="section-shell">
            <Reveal>
              <div className="">
                <div>
                  <p className="eyebrow">LA LÓGICA</p>
                  <h2>
                    Una reserva que deja de pagar comisión cambia la cuenta.
                  </h2>
                </div>
              </div>
            </Reveal>
            <div className="project-grid">
              <Reveal>
                <article className="project">
                  {/* <div
                    className="project-visual visual-one"
                    style={{ minHeight: "360px" }}
                  >
                    <div className="mock-browser">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="mock-panel panel-purple" />
                    <div className="mock-panel panel-mint" />
                  </div> */}
                  <img src="/images/booking-airbnb-20.jpg" alt="geo-hero" className="project-visual visual-one object-cover min-h-50! aspect-[5/3]" />
                  <div className="project-meta">
                    <div>
                      <h3>Vía Booking / Airbnb</h3>
                      <p>
                        Por ejemplo, en una reserva de US$500 la semana con ~20%
                        de comisión.
                      </p>
                    </div>
                    <span className="arrow">−US$100</span>
                  </div>
                </article>
              </Reveal>
              <Reveal>
                <article className="project">
                  {/* <div
                    className="project-visual visual-three"
                    style={{ minHeight: "360px" }}
                  >
                    <div className="wordmark">
                      TU
                      <br />
                      SITIO.
                    </div>
                  </div> */}
                  <img src="/images/geo_hero.webp" alt="geo-hero" className="project-visual visual-one object-cover min-h-50! aspect-[5/3]" />
                  <div className="project-meta">
                    <div>
                      <h3>Vía tu propio sitio</h3>
                      <p>
                        Pago único por el plan completo. Lo recuperás en un mes, lo demás es ganancia pura.
                      </p>
                    </div>
                    <span className="arrow">US$450</span>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>
        <Reveal className="section-shell">
          <section className="split-section">
            <div>
              <p className="eyebrow">POR QUÉ PAGO ÚNICO</p>
              <h2>Evitás otra suscripción más.</h2>
            </div>
            <div className="intro-copy">
              <p>
                Ya pagás comisión a Booking, tal vez a Airbnb, quizás a otro
                canal. Lo último que necesitás es una cuota mensual más por
                tener un sitio propio.
              </p>
              <p>
                <strong>La idea es simple:</strong> pagás una vez, el sitio
                queda en tus manos, y de ahí en más lo que entra por reserva
                directa es todo tuyo. Si más adelante querés que nos encarguemos
                del mantenimiento, eso es un servicio aparte — nunca una
                condición para tener el sitio.
              </p>
              <p>
                Es, literalmente, tu ventana de confianza: el lugar donde un
                huésped que ya confía en vos puede reservar directo, sin
                depender de una plataforma que ninguno de los dos eligió.
              </p>
            </div>
          </section>
        </Reveal>
        <section id="precios" className="services">
          <div className="section-shell">
            <Reveal>
              <p className="eyebrow">OPCIONES</p>
              <h2>Tres niveles, según cuánto necesite tu cabaña.</h2>
              <p className="hero-text" style={{ fontSize: "18px" }}>
                Elegí el que resuelve tu problema hoy. Se puede empezar simple y
                sumar más adelante.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
              {plans.map((p) => (
                <Reveal key={p.name}>
                  <article
                    className={`flex h-full flex-col rounded-site border p-7 ${
                      p.featured
                        ? "-translate-y-2.5 bg-purple text-white border-purple"
                        : "bg-white text-ink border-line"
                    }`}
                  >
                    <div
                      className={`mb-2.5 text-xs font-extrabold uppercase tracking-[.12em] ${p.featured ? "text-mint" : "text-muted"}`}
                    >
                      {p.level}
                    </div>
                    <h3 className="mb-1 text-3xl">{p.name}</h3>
                    <p
                      className={`mb-6 ${p.featured ? "text-white/70" : "text-muted"}`}
                    >
                      {p.tagline}
                    </p>
                    <ul className="flex-1 list-none space-y-2 p-0">
                      {p.features.map((f) => (
                        <li
                          key={f}
                          className={`flex gap-2.5 leading-snug ${p.featured ? "text-white/80" : "text-muted"}`}
                        >
                          <span
                            className={`font-extrabold ${p.featured ? "text-mint" : "text-purple"}`}
                          >
                            ✓
                          </span>{" "}
                          {f}
                        </li>
                      ))}
                      {p.excluded.map((f) => (
                        <li
                          key={f}
                          className="flex gap-2.5 leading-snug text-muted opacity-55"
                        >
                          <span>–</span> {f}
                        </li>
                      ))}
                    </ul>
                    <p
                      className={`mt-6 text-sm italic ${p.featured ? "text-white/65" : "text-muted"}`}
                    >
                      {p.blurb}
                    </p>
                    <div
                      className={`mt-6 flex items-end justify-between gap-4 border-t pt-5 ${p.featured ? "border-white/20" : "border-line"}`}
                    >
                      <strong
                        className={`font-display text-3xl font-extrabold ${p.featured ? "text-mint" : "text-purple"}`}
                      >
                        {p.price}
                      </strong>
                      <span
                        className={`max-w-[110px] text-right text-xs font-bold uppercase tracking-[.04em] ${p.featured ? "text-white/70" : "text-muted"}`}
                      >
                        {p.unit}
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p
              style={{
                marginTop: "18px",
                fontSize: "14px",
                color: "var(--muted)",
              }}
            ></p>
          </div>
        </section>
        <Reveal className="section-shell">
          <section className="split-section flex! flex-col">
            <div>
              <p className="eyebrow">DESPUÉS DEL LANZAMIENTO</p>
              <h2>¿Quién se encarga del sitio de ahí en más?</h2>
            </div>
            <div className="intro-copy">
              <p>
                Se combina con cualquiera de los tres niveles de arriba — vos
                elegís cuánto querés delegar.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-1 lg:grid-cols-4">
                {support.map((s) => (
                  <article
                    key={s[0]}
                    className="rounded-[20px] border border-line bg-white p-6"
                  >
                    <div className="text-[11px] font-extrabold uppercase tracking-[.12em] text-purple">
                      Opción
                    </div>
                    <h3 className="my-2.5 text-[19px] tracking-[-.02em]">
                      {s[0]}
                    </h3>
                    <div className="font-display mb-2.5 text-2xl font-extrabold text-purple">
                      {s[1]}
                    </div>
                    <p className="m-0 text-sm leading-snug text-muted">
                      {s[2]}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
        <section id="contacto" className="contact">
          <Reveal className="section-shell contact-inner">
            <p className="eyebrow">HABLEMOS</p>
            <h2>
              ¿Qué opción tiene sentido
              <br />
              <span>para tu cabaña?</span>
            </h2>
            <p className="hero-text" style={{ color: "rgba(255,255,255,.7)" }}>
              Sin compromiso — vemos juntos qué nivel resuelve lo que necesitás
              hoy, y qué tan seguido querés que estemos encima del sitio.
            </p>
            <a
              className="button button-mint"
              href="https://wa.me/+59898899654?text=¡Hola! Me interesa saber más sobre el servicio de sitios web para cabañas."
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
