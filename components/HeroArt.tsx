const card =
  "absolute flex h-35 w-52.5 flex-col justify-between rounded-[20px] p-6 " +
  "shadow-[0_18px_50px_rgba(24,12,34,0.15)] " +
  "transition-all duration-200 ease-out hover:scale-105 hover:shadow-xl";

const cardLabel =
  "inline-block text-xs opacity-60 transition-transform duration-200 ease-out hover:-translate-y-1";

const cardTitle =
  "inline-block font-montserrat text-[34px]/none font-normal transition-transform duration-200 ease-out";

const orb =
  "absolute rounded-full saturate-108 transition-all duration-500 ease-out hover:scale-110";

export function HeroArt({ cabanas = false }: { cabanas?: boolean }) {
  return (
    <div
      className="relative mx-auto lg:mx-0 aspect-square [--art:min(80vw,400px)] sm:[--art:min(60vw,400px)] lg:[--art:min(40vw,600px)] w-(--art)"
      aria-hidden="true"
    >
      <div className="absolute top-0 left-0 h-150 w-150 origin-top-left scale-[calc(var(--art)/600px)]">
        {/* Orbs */}
        <div
          className={`${orb} left-1.5 top-0 size-125 bg-purple hover:-translate-x-2 hover:-translate-y-2`}
        />
        <div
          className={`${orb} bottom-3.5 right-0 size-80 bg-mint hover:translate-x-2 hover:translate-y-2`}
        />

        {/* Card 01 */}
        <div
          className={`${card} left-3.5 top-3.5 rotate-9 bg-white hover:-translate-x-1 hover:-translate-y-3 hover:-rotate-14`}
        >
          <span className={cardLabel}>01</span>
          <strong className={`${cardTitle} hover:translate-x-1`}>
            {cabanas ? "Sitio propio" : "Idear"}
          </strong>
        </div>

        {/* Card 02 */}
        <div
          className={`${card} right-4 top-[95px] -rotate-8 bg-mint-200 hover:translate-y-2 hover:rotate-15`}
        >
          <span className={cardLabel}>02</span>
          <strong className={`${cardTitle} hover:-translate-x-1`}>
            {cabanas ? "Reserva" : "Crear"}
          </strong>
        </div>

        {/* Card 03 */}
        <div
          className={`${card} bottom-3.5 left-2.5 -rotate-3 bg-purple-900 text-white hover:translate-x-1 hover:-translate-y-3 hover:rotate-19`}
        >
          <span className={cardLabel}>03</span>
          <strong className={`${cardTitle} hover:translate-x-1`}>
            {cabanas ? "Más margen" : "Crecer"}
          </strong>
        </div>
      </div>
    </div>
  );
}
