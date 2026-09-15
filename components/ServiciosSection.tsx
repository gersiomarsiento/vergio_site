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

export default function ServiciosSection() {
  return (
    <section id="services" className="services">
      <div className="section-shell">
        <Reveal>
          <div className="">
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
  );
}
