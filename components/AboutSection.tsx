import { Reveal } from "@/components/reveal";

export default function AboutSection() {
  return (
    <Reveal className="section-shell">
      <section id="about" className="theme-gradient-alt">
        <div className="max-w-360 justify-self-center p-30 flex flex-col gap-30">
          <div className="">
            <p className="eyebrow text-purple">SOBRE NOSOTROS</p>
            <h2 className="font-bebas text-[80px]! desktop:text-[120px]! leading-[84%]! text-black">
              UN ENFOQUE HUMANO, <br />
              <span className="text-purple">UN RESULTADO REAL</span>
            </h2>
            <div className="flex gap-5 mt-12">
              <div className="text-[21px]">
                <p>
                  Somos un equipo conformado por dos especialistas en dos áreas
                  que se complementan: <strong>diseño UX/UI y desarrollo</strong>.
                </p>
                <br />
                <p>
                  Nos apasiona la creación creativa de soluciones digitales para
                  problemas del mundo real.
                </p>
              </div>
              <div className="flex gap-5">
                <div className="p-4.5 border [border-image:linear-gradient(to_right,#460080,#BB87E6,#460080)_1] flex flex-col justify-center min-w-46 min-h-full">
                  <strong className="font-bebas font-normal leading-none text-[46px] text-purple">
                    5+ AÑOS
                  </strong>
                  <span className="text-[16px] leading-[150%]">
                    trabajando juntos
                  </span>
                </div>
                <div className="p-4.5 border [border-image:linear-gradient(to_right,#286243,#9FEAC3,#286243)_1] flex flex-col justify-center min-w-46 min-h-full">
                  <strong className="font-bebas font-normal leading-none text-[46px] text-mint-700">
                    2
                  </strong>
                  <span className="text-[16px] leading-[150%]">
                    especialistas
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="eyebrow text-purple">NUESTRO PROCESO</p>
            <h4 className="uppercase font-bebas text-[60px]! leading-none! text-black">
              Cómo llegamos al producto final
            </h4>
            <div className="flex gap-5 mt-12">
              <div className="p-6 border [border-image:linear-gradient(to_right,#343036,#A7A1AA,#343036)_1] flex-1 flex flex-col gap-2.5 justify-center min-w-46 min-h-full">
                <div className="eyebrow-small">01</div>
                <strong className="font-bebas font-normal leading-none text-[32px] text-purple-900">
                  ESTRATEGIA
                </strong>
                <p className="text-[16px] leading-[150%]">
                  Comprendemos el problema, investigamos, definimos el alcance y
                  planificamos el camino a seguir.
                </p>
              </div>
              <div className="p-6 border [border-image:linear-gradient(to_right,#343036,#A7A1AA,#343036)_1] flex-1 flex flex-col gap-2.5 justify-center min-w-46 min-h-full">
                <div className="eyebrow-small">02</div>
                <strong className="font-bebas font-normal leading-none text-[32px] text-purple">
                  IDEACIÓN
                </strong>
                <p className="text-[16px] leading-[150%]">
                  Definimos funcionalidades y diseñamos el producto con la
                  identidad de tu marca.
                </p>
              </div>
              <div className="p-6 border [border-image:linear-gradient(to_right,#343036,#A7A1AA,#343036)_1] flex-1 flex flex-col gap-2.5 justify-center min-w-46 min-h-full">
                <div className="eyebrow-small">03</div>
                <strong className="font-bebas font-normal leading-none text-[32px] text-mint-400">
                  DESARROLLO
                </strong>
                <p className="text-[16px] leading-[150%]">
                  Implementación del diseño con lenguajes de programación y
                  herramientas específicas para tu proyecto.
                </p>
              </div>
              <div className="p-6 border [border-image:linear-gradient(to_right,#343036,#A7A1AA,#343036)_1] flex-1 flex flex-col gap-2.5 justify-center min-w-46 min-h-full">
                <div className="eyebrow-small">04</div>
                <strong className="font-bebas font-normal leading-none text-[32px] text-mint-600">
                  SOLUCIÓN
                </strong>
                <p className="text-[16px] leading-[150%]">
                  Te entregamos un producto finalizado que satisfaga las
                  necesidades de tu negocio y supere tus expectativas.
                </p>
              </div>
              <div className="p-6 border [border-image:linear-gradient(to_right,#343036,#A7A1AA,#343036)_1] flex-1 flex flex-col gap-2.5 justify-center min-w-46 min-h-full">
                <div className="eyebrow-small">05</div>
                <strong className="font-bebas font-normal leading-none text-[32px] text-gray-800">
                  SOPORTE
                </strong>
                <p className="text-[16px] leading-[150%]">
                  Ofrecemos soporte técnico para que tu negocio siga creciendo.
                  Nos enfocamos en la mejora continua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
