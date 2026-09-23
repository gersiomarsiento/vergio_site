import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroArt } from "@/components/HeroArt";
import { Ticker } from "@/components/ticker";
import { Reveal } from "@/components/reveal";

const heading =
  "font-bebas uppercase text-[clamp(2.75rem,5vw,4.625rem)] leading-[1.02]";
const eyebrow = "mb-4.5 text-sm font-medium tracking-[8%] text-purple";

const comparisons = [
  {
    img: "/images/booking-airbnb-20.jpg",
    title: "Vía Booking / Airbnb",
    text: "Por ejemplo, en una reserva de US$500 la semana con ~20% de comisión.",
    stat: "−US$100",
  },
  {
    img: "/images/geo_hero.webp",
    title: "Vía tu propio sitio",
    text: "Pago único por el plan completo. Lo recuperás en un mes, lo demás es ganancia pura.",
    stat: "US$450",
  },
];

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
      "La capacidad de modificar el contenido a tu gusto por tu cuenta y cuando quieras.",
  },
];

const support = [
  {
    title: "Autogestionado",
    price: "US$0",
    desc: "Te lo entregamos y lo manejás vos. Sin compromiso de por medio. Hosting también por cuenta tuya.",
  },
  {
    title: "Solo hosting",
    price: "US$40/año",
    desc: "Nos encargamos del dominio y el hosting. El resto lo manejás vos.",
  },
  {
    title: "Retainer completo",
    price: "US$30/mes",
    desc: "Monitoreamos la sincronización, hacemos cambios menores y arreglamos lo que falle. Máximo 3 horas mensuales.",
  },
  {
    title: "Por hora",
    price: "US$20/h",
    desc: "Sin cuota fija — nos llamás cuando necesitás un cambio puntual.",
  },
];

export default function Cabanas() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        {/* HERO */}
        <section className="mx-auto flex w-full max-w-360 flex-col-reverse items-center gap-16 px-3 py-4 lg:px-30 lg:py-24 lg:flex-row-reverse">
          <HeroArt cabanas />
          <Reveal className="w-full lg:w-1/2 flex flex-col">
            <p className="mb-4.5 text-sm font-medium tracking-[8%] text-mint-400">
              RESERVAS DIRECTAS · SIN COMISIÓN
            </p>
            <h1 className="uppercase font-bebas text-[64px] leading-[92%]">
              Cada reserva por Booking le deja el{" "}
              <span className="text-purple">20%</span> a otro.
            </h1>
            <p className="mt-5 mb-2 text-[21px] leading-[34px] tracking-[-1%] text-gray">
              Con un sitio propio, esa plata se queda en tu bolsillo. Pagás una
              sola vez, no una cuota mensual — y seguís publicando en Booking y
              Airbnb si querés. Esto es una puerta más para tus huéspedes, no un
              reemplazo.
            </p>
            <p className="mb-7 text-sm leading-relaxed text-gray">
              Armado a medida para cabañas de Punta del Diablo — el mismo tipo
              de sitio, tu propio contenido.
            </p>
            <div className="flex flex-wrap items-center gap-6.5">
              <Link className="button button-mint" href="#precios">
                Ver opciones <span>↓</span>
              </Link>
              <Link
                className="button button-large button-transparent border border-gray text-black!"
                href="#contact"
              >
                Hablemos <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </section>

        <Ticker cabanas />

        {/* LA CUENTA QUE IMPORTA */}
        <Reveal>
          <section className="mx-auto max-w-360 px-3 py-4 lg:px-30 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-21.5">
              <div>
                <p className={eyebrow}>LA CUENTA QUE IMPORTA</p>
                <h2 className={heading}>
                  Lo que se pierde por reserva, y lo que se paga una vez.
                </h2>
              </div>
              <div>
                <p className="mb-10 text-[21px] leading-[1.65] text-muted">
                  Números ilustrativos para ver la lógica: tu tarifa y tu
                  volumen de reservas son los que definen cuánto te ahorrás
                  realmente.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="border-t border-line pt-4.5">
                    <strong className="block font-bebas text-[34px] font-extrabold leading-none text-purple">
                      20%
                    </strong>
                    <span className="mt-2 block text-[13px] text-muted">
                      comisión de referencia
                    </span>
                  </div>
                  <div className="border-t border-line pt-4.5">
                    <strong className="block font-bebas text-[34px] font-extrabold leading-none text-purple">
                      US$450
                    </strong>
                    <span className="mt-2 block text-[13px] text-muted">
                      pago único ilustrativo
                    </span>
                  </div>
                  <div className="border-t border-line pt-4.5">
                    <strong className="block font-bebas text-[34px] font-extrabold leading-none text-purple">
                      4-5
                    </strong>
                    <span className="mt-2 block text-[13px] text-muted">
                      reservas para cubrirlo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* LA LÓGICA */}
        <section className="border-t border-line px-3 lg:px-30 pt-27.5 pb-31.25">
          <div className="mx-auto max-w-360">
            <Reveal>
              <div className="mb-16 lg:max-w-[70%]">
                <p className={eyebrow}>LA LÓGICA</p>
                <h2 className={heading}>
                  Una reserva que deja de pagar comisión cambia la cuenta.
                </h2>
              </div>
            </Reveal>
            <div className="grid gap-x-7 gap-y-12 lg:grid-cols-2">
              {comparisons.map((c) => (
                <Reveal key={c.title}>
                  <article className="rounded-lg bg-mint-100 px-6 py-10">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="aspect-[5/3] w-full rounded-2xl object-cover"
                    />
                    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{c.title}</h3>
                        <p className="mt-2 text-muted">{c.text}</p>
                      </div>
                      <span className="shrink-0 text-[25px] font-bold text-purple">
                        {c.stat}
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUÉ PAGO ÚNICO */}
        <Reveal>
          <section className="mx-auto max-w-360 px-3 py-4 lg:px-30 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-21.5">
              <div>
                <p className={eyebrow}>POR QUÉ PAGO ÚNICO</p>
                <h2 className={heading}>Evitás otra suscripción más.</h2>
              </div>
              <div className="space-y-6 text-[21px] leading-[1.65] text-muted">
                <p>
                  Ya pagás comisión a Booking, tal vez a Airbnb, quizás a otro
                  canal. Lo último que necesitás es una cuota mensual más por
                  tener un sitio propio.
                </p>
                <p>
                  <strong className="text-black">La idea es simple:</strong>{" "}
                  pagás una vez, el sitio queda en tus manos, y de ahí en más lo
                  que entra por reserva directa es todo tuyo. Si más adelante
                  querés que nos encarguemos del mantenimiento, eso es un
                  servicio aparte — nunca una condición para tener el sitio.
                </p>
                <p>
                  Es, literalmente, tu ventana de confianza: el lugar donde un
                  huésped que ya confía en vos puede reservar directo, sin
                  depender de una plataforma que ninguno de los dos eligió.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* OPCIONES */}
        <section
          id="precios"
          className="border-t border-line px-3 lg:px-30 pt-27.5 pb-31.25"
        >
          <div className="mx-auto max-w-360">
            <Reveal>
              <div className="lg:max-w-[70%]">
                <p className={eyebrow}>OPCIONES</p>
                <h2 className={heading}>
                  Tres niveles, según cuánto necesite tu cabaña.
                </h2>
                <p className="mt-5 text-[18px] leading-[1.65] text-gray">
                  Elegí el que resuelve tu problema hoy. Se puede empezar simple
                  y sumar más adelante.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
              {plans.map((p) => (
                <Reveal key={p.name}>
                  <article
                    className={`flex h-full flex-col rounded-3xl border p-7 ${
                      p.featured
                        ? "-translate-y-2.5 border-purple bg-purple text-white"
                        : "border-line bg-white text-ink"
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
          </div>
        </section>

        {/* DESPUÉS DEL LANZAMIENTO */}
        <Reveal>
          <section className="mx-auto flex max-w-360 flex-col gap-10 px-3 py-4 lg:px-30 lg:py-24">
            <div className="lg:max-w-[70%]">
              <p className={eyebrow}>DESPUÉS DEL LANZAMIENTO</p>
              <h2 className={heading}>
                ¿Quién se encarga del sitio de ahí en más?
              </h2>
            </div>
            <div>
              <p className="text-[21px] leading-[1.65] text-muted">
                Se combina con cualquiera de los tres niveles de arriba — vos
                elegís cuánto querés delegar.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {support.map((s) => (
                  <article
                    key={s.title}
                    className="rounded-[20px] border border-line bg-white p-6"
                  >
                    <div className="text-[11px] font-extrabold uppercase tracking-[.12em] text-purple">
                      Opción
                    </div>
                    <h3 className="my-2.5 text-[19px] tracking-[-.02em]">
                      {s.title}
                    </h3>
                    <div className="mb-2.5 font-display text-2xl font-extrabold text-purple">
                      {s.price}
                    </div>
                    <p className="m-0 text-sm leading-snug text-muted">
                      {s.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* CONTACTO */}
        <Reveal className="section-shell">
          <section id="contact" className="special-gradient">
            <div className="p-3 lg:p-30 max-w-360 mx-auto justify-self-center w-full">
              <div className="eyebrow text-mint">HABLEMOS</div>
              <h2 className="title-large text-white">
                ¿Qué opción tiene sentido <br />
                <span className="text-mint">para tu cabaña?</span>
              </h2>
              <p
                style={{ color: "rgba(255,255,255,.7)" }}
                className="hero-text"
              >
                Sin compromiso — vemos juntos qué nivel resuelve lo que
                necesitás hoy, y qué tan seguido querés que estemos encima del
                sitio.
              </p>
              <Link
                className={`button button-large button-mint mt-10`}
                href="https://wa.me/+59898899654?text=¡Hola! Me interesa saber más sobre el servicio de sitios web para cabañas."
              >
                Escribinos por WhatsApp <span>→</span>
              </Link>
            </div>
          </section>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
