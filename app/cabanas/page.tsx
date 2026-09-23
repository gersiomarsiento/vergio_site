import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroArt } from "@/components/HeroArt";
import { Ticker } from "@/components/ticker";
import { Reveal } from "@/components/reveal";
import ArrowSmall from "@/components/icons/ArrowSmall";

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
    blurb:
      "Ideal para generar confianza en el cliente mediante la presencia online.",
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
        <section className="mx-auto min-h-[calc(100dvh-50px)] lg:min-h-[calc(100dvh-80px)] flex w-full max-w-xl lg:max-w-360 flex-col items-center gap-5 px-3 lg:px-30 lg:flex-row-reverse">
          <HeroArt cabanas />
          <Reveal className="w-full lg:w-1/2 flex flex-col">
            <p className="mb-4.5 text-sm font-medium tracking-[8%] text-mint-400">
              RESERVAS DIRECTAS · SIN COMISIÓN
            </p>
            <h1 className="title-medium">
              Cada reserva por Booking le deja el&nbsp;
              <span className="relative inline-block">
                <span className="text-purple">20%</span>
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 -translate-1/2 bg-purple text-white leading-none [clip-path:inset(0_100%_0_0)] animate-[wipe-reveal_0.7s_ease-out_3.5s_both]"
                >
                  20%
                </span>
              </span>
              &nbsp;a otro.
            </h1>
            <p className="my-5 hero-text lg:hidden block">
              Con un sitio propio, esa plata se queda en tu bolsillo.
            </p>
            <p className="my-5 hero-text hidden lg:block">
              Con un sitio propio, esa plata se queda en tu bolsillo. Pagás una
              sola vez, no una cuota mensual — y seguís publicando en Booking y
              Airbnb si querés. Esto es una puerta más para tus huéspedes, no un
              reemplazo.
            </p>
            {/* <p className="mb-7 text-sm leading-relaxed text-gray">
              Armado a medida para cabañas de Punta del Diablo — el mismo tipo
              de sitio, tu propio contenido.
            </p> */}
            <div className="hero-actions">
              <Link
                className="button button-large button-mint w-full sm:w-auto"
                href="#pricing"
              >
                Ver opciones
                <span>
                  <ArrowSmall />
                </span>
              </Link>
              <Link
                className="button button-large button-transparent w-full sm:w-auto border border-gray"
                href="#contact"
              >
                Hablemos{" "}
                <span>
                  <ArrowSmall className="rotate-225" />
                </span>
              </Link>
            </div>
          </Reveal>
        </section>

        <Ticker cabanas />

        {/* LA CUENTA QUE IMPORTA */}
        <Reveal>
          <section className="bg-purple-900">
            <div className="max-w-xl lg:max-w-360 mx-auto px-3 py-6 lg:p-30 justify-self-center text-white">
              <div className="grid lg:grid-cols-2 ">
                <div>
                  <p className="eyebrow">LA CUENTA QUE IMPORTA</p>
                  <h2 className="title-medium">
                    Un solo pago,
                    <br />
                    <span className="text-mint-400">ganancia mensual.</span>
                  </h2>
                </div>
                <div>
                  <p className="hero-text">
                    La lógica es simple: si el cliente reserva directo desde tu
                    web, te ahorrás el 20% de comisión que te cobran las
                    plataformas.
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="about-card min-w-auto gap-0 p-2 lg:p-4 justify-start [border-image:linear-gradient(to_right,var(--color-purple-600),var(--color-purple-400),var(--color-purple-600))_1]">
                      <strong className="block font-bebas font-normal leading-none text-[32px] text-purple-100">
                        20%
                      </strong>
                      <span className="text-[12px] leading-[150%]">
                        de ahorro por reserva
                      </span>
                    </div>
                    <div className="about-card min-w-auto gap-0 p-2 lg:p-4 justify-start [border-image:linear-gradient(to_right,var(--color-mint-600),var(--color-mint-400),var(--color-mint-600))_1]">
                      <strong className="block font-bebas font-normal leading-none text-[32px] text-mint-100">
                        US$450
                      </strong>
                      <span className="text-[12px] leading-[150%]">
                        pagás una sola vez
                      </span>
                    </div>
                    <div className="about-card min-w-auto gap-0 p-2 lg:p-4 justify-start [border-image:linear-gradient(to_right,var(--color-gray-600),var(--color-gray-400),var(--color-gray-600))_1]">
                      <strong className="block font-bebas font-normal leading-none text-[32px] text-gray-100">
                        {">"}1 mes
                      </strong>
                      <span className="text-[12px] leading-[150%]">
                        para recuperarlo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* LA LÓGICA */}
        <section className="theme-gradient-alt text-white">
          <div className="max-w-xl lg:max-w-360 mx-auto justify-self-center px-3 py-6 lg:p-30 flex flex-col">
            <Reveal>
              <div className="mb-5 lg:mb-12 lg:max-w-[70%]">
                <p className="eyebrow text-purple">LA LÓGICA</p>
                <h2 className="title-medium text-black">
                  Una reserva sin comisión <br />
                  <span className="text-purple">cambia la cuenta.</span>
                </h2>
              </div>
            </Reveal>
            <div className="grid gap-x-7 gap-y-12 lg:grid-cols-2">
              {comparisons.map((c) => (
                <Reveal key={c.title}>
                  <article className="project bg-purple-900">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="aspect-[5/3] w-full rounded-2xl object-cover"
                    />
                    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{c.title}</h3>
                        <p className="mt-2">{c.text}</p>
                      </div>
                      <span className="shrink-0 text-[25px] font-bold text-mint-200">
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
        {/* <Reveal>
          <section className="mx-auto max-w-xl lg:max-w-360 px-3 py-4 lg:px-30 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-21.5">
              <div>
                <p className="eyebrow">POR QUÉ PAGO ÚNICO</p>
                <h2 className="title-medium">Evitás otra suscripción más.</h2>
              </div>
              <div className="space-y-6 text-[21px] leading-[1.65] text-muted">
                <p>
                  Ya pagás comisión a Booking, tal vez a Airbnb, quizás a otro
                  canal. Lo último que necesitás es una cuota mensual más por
                  tener un sitio propio.
                </p>
                <p>
                  <strong className="text-black">La idea es simple:</strong>
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
        </Reveal> */}

        {/* OPCIONES */}
        <section id="pricing" className="theme-gradient">
          <div className="max-w-xl lg:max-w-360 mx-auto justify-self-center px-3 py-6 lg:p-30 flex flex-col">
            <Reveal>
              <div className="lg:max-w-[70%]">
                <p className="eyebrow text-purple">NUESTRAS OPCIONES</p>
                <h2 className="title-medium">
                  Tres niveles, según <br />
                  <span className="text-purple">tu necesidad.</span>
                </h2>
                <p className="hero-text">
                  Elegí el que resuelve tu problema hoy. Se puede empezar simple
                  y sumar más adelante.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
              {plans.map((p) => (
                <Reveal key={p.name}>
                  <article
                    className={`project border py-4 ${
                      p.featured
                        ? "border-purple bg-purple text-white"
                        : "border-line bg-mint-50 text-ink"
                    }`}
                  >
                    <div
                      className={`eyebrow mb-2 font-semibold ${p.featured ? "text-mint" : "text-ink"}`}
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
                            className={`font-extrabold ${p.featured ? "text-mint" : "text-mint-400"}`}
                          >
                            ✓
                          </span>
                          {f}
                        </li>
                      ))}
                      {p.excluded.map((f) => (
                        <li
                          key={f}
                          className="flex gap-2.5 leading-snug text-red opacity-55"
                        >
                          <span className="text-[red]">✘</span> {f}
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
                        className={`max-w-[110px] text-right text-xs self-center font-bold uppercase tracking-[.04em] ${p.featured ? "text-purple-50" : "text-purple-900"}`}
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
          <section className="bg-mint">
            <div className="mx-auto flex max-w-xl lg:max-w-360 flex-col px-3 py-6 lg:px-30 lg:py-24">
              <div className="lg:max-w-[70%]">
                <p className="eyebrow">DESPUÉS DEL LANZAMIENTO</p>
                <h2 className="title-medium">
                  ¿Quién se encarga del sitio de ahí en más?
                </h2>
              </div>
              <div>
                <p className="hero-text">
                  Se combina con cualquiera de los tres niveles de arriba. Vos
                  elegís cuánto querés delegar.
                </p>
                <div className="mt-5 lg:mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {support.map((s, i) => (
                    <article key={s.title} className="project p-4">
                      <h3 className="my-2.5 title-small lg:text-[30px] xl:text-[40px]">
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
            </div>
          </section>
        </Reveal>

        {/* CONTACTO */}
        <Reveal className="section-shell">
          <section id="contact" className="special-gradient">
            <div className="px-3 py-6 lg:p-30 max-w-xl lg:max-w-360 mx-auto justify-self-center w-full">
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
                className={`button button-large button-mint`}
                href="https://wa.me/+59898899654?text=¡Hola! Me interesa saber más sobre el servicio de sitios web para cabañas."
              >
                Escribinos por WhatsApp{" "}
                <span>
                  <ArrowSmall className="rotate-270" />
                </span>
              </Link>
            </div>
          </section>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
