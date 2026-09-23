import { Reveal } from "@/components/reveal";
import Accordion from "@/components/Accordion";

export default function ServicesSection() {
  return (
    <Reveal className="section-shell">
      <section id="services" className="relative theme-gradient">
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          {/* World image SVG */}
          <img
            src="/images/world-circle.svg"
            loading="lazy"
            alt="Circular svg image representing a world."
            className="h-[52vw] w-full object-cover"
          />
        </div>
        <div className="relative max-w-xl lg:max-w-360 mx-auto justify-self-center px-3 py-6 lg:p-30 flex flex-col gap-30">
          {/* Services Content */}
          <div className="">
            {/* Texts */}
            <p className="eyebrow text-purple">NUESTROS SERVICIOS</p>
            <h2 className="title-large text-black">
              LO QUE <br />
              <span className="text-purple">SABEMOS HACER</span>
            </h2>
            <div className="flex gap-5 mt-12">
              <div className="lg:text-[21px] lg:max-w-[70%] pb-12">
                <p>
                  Diseñamos y desarrollamos productos digitales a medida,
                  específicos para las necesitades de cada cliente.
                </p>
              </div>
            </div>
            {/* Accordion */}
            <Accordion />
            {/* Cards */}
            <div className="flex flex-col lg:flex-row gap-5 mt-12">
              <div className="about-card [border-image:linear-gradient(to_right,#343036,#A7A1AA,#343036)_1] ">
                <strong className="font-bebas font-normal leading-none text-[32px] text-purple">
                  usabilidad y accesibilidad
                </strong>
                <p className="text-[16px] leading-[150%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.{" "}
                </p>
              </div>
              <div className="about-card [border-image:linear-gradient(to_right,#343036,#A7A1AA,#343036)_1] ">
                <strong className="font-bebas font-normal leading-none text-[32px] text-mint-600">
                  optimización para motores de búsqueda
                </strong>
                <p className="text-[16px] leading-[150%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.{" "}
                </p>
              </div>
              <div className="about-card [border-image:linear-gradient(to_right,#343036,#A7A1AA,#343036)_1] ">
                <strong className="font-bebas font-normal leading-none text-[32px] text-purple-900">
                  performance y velocidad
                </strong>
                <p className="text-[16px] leading-[150%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.{" "}
                </p>
              </div>
              <div className="about-card [border-image:linear-gradient(to_right,#343036,#A7A1AA,#343036)_1] ">
                <strong className="font-bebas font-normal leading-none text-[32px] text-gray-800">
                  diseño adaptable a dispositivos
                </strong>
                <p className="text-[16px] leading-[150%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
