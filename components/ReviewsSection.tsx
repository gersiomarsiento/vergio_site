import { Reveal } from "@/components/reveal";

export default function ReviewsSection() {
  return (
    <Reveal className="section-shell">
      <section id="about" className="split-section">
        <div>
          <p className="eyebrow">QUÉ HACEMOS</p>
          <h2>Hacemos que lo digital se sienta menos complicado.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Desde la primera idea hasta el lanzamiento y la iteración, reunimos
            estrategia, diseño y tecnología en un proceso enfocado. El
            resultado: decisiones más claras, mejores experiencias y trabajo más
            fácil de mantener.
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
  );
}
