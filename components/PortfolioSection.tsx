import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/reveal";

export default function PortfolioSection() {
  return (
    <section id="work" className="bg-purple-900">
      <div className="max-w-xl lg:max-w-360 mx-auto px-3 py-6 lg:p-30 justify-self-center ">
        <Reveal>
          <div className="">
            <div>
              <p className="eyebrow text-white!">CLIENTES SATISFECHOS</p>
              <h2 className="title-large text-white">
                PROYECTOS REALES
                <br />
                <span className="text-mint-400">SOLUCIONES A MEDIDA</span>
              </h2>
            </div>
            <p className="hero-text text-white">
              Conocé algunos de los proyectos que realizamos para nuestros
              clientes.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-12 gap-3 lg:gap-6">
          <Reveal>
            <ProjectCard
              title="Geo Cabañas"
              meta="Web turística · Sistema de reservas"
              description="Sitio web responsive de un complejo de cabañas con sistema de reservas, sincronización con plataformas de alojamiento y sistema de administración."
              tags={[
                "Sincronización en vivo",
                "Panel de control",
                "Identidad de marca",
              ]}
              size="large"
              src="/images/geo_hero.webp"
              alt_image_src="/images/mobile-mockup-geo.png"
              url="https://geocabanas.sergioezequielsarmiento.workers.dev/"
              url_label="Visitar sitio"
              button_url="/cabanas"
              button_label="Descubrir más"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="Wakana"
              meta="E-COMMERCE • CATÁLOGO • VENTAS"
              size="medium"
              src="/images/wakana.webp"
              alt_image_src="/images/mobile-mockup-wakana.png"
              url="https://www.wakanaarte.com/"
            />
          </Reveal>
          <Reveal>
            <ProjectCard
              title="Guía Amarilla PDD"
              meta="APP • ANDROID • CATÁLOGO"
              size="small"
              src="/images/guia-pdd.png"
              url="https://guia-amarilla-pdd.vercel.app/"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
