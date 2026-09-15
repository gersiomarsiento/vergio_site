export function HeroArt({ cabanas = false }: { cabanas?: boolean }) {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="w-150 relative h-full">
        {/* Orbs */}
        <div className="orb orb-one transition-all duration-500 ease-out hover:scale-110 hover:-translate-x-2 hover:-translate-y-2" />
        <div className="orb orb-two transition-all duration-500 ease-out hover:scale-110 hover:translate-x-2 hover:translate-y-2" />
        {/* Card 01 */}
        <div className="hero-card card-a bg-white transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-3 hover:-rotate-23 hover:scale-105 hover:shadow-xl">
          <span className="inline-block transition-transform duration-200 ease-out hover:-translate-y-1">
            01
          </span>
          <strong className="inline-block transition-transform duration-200 ease-out hover:translate-x-1">
            {cabanas ? "Sitio propio" : "Pensar"}
          </strong>
        </div>
        {/* Card 02 */}
        <div className="hero-card card-b bg-mint-200 transition-all duration-200 ease-out hover:translate-y-2 hover:rotate-23 hover:scale-105 hover:shadow-xl">
          <span className="inline-block transition-transform duration-200 ease-out hover:-translate-y-1">
            02
          </span>
          <strong className="inline-block transition-transform duration-200 ease-out hover:-translate-x-1">
            {cabanas ? "Reserva" : "Crear"}
          </strong>
        </div>
        {/* Card 03 */}
        <div className="hero-card card-c bg-purple-900 text-white transition-all duration-200 ease-out hover:translate-x-1 hover:-translate-y-3 hover:rotate-22 hover:scale-105 hover:shadow-xl">
          <span className="inline-block transition-transform duration-200 ease-out hover:-translate-y-1">
            03
          </span>
          <strong className="inline-block transition-transform duration-200 ease-out hover:translate-x-1">
            {cabanas ? "Más margen" : "Crecer"}
          </strong>
        </div>
      </div>
    </div>
  );
}
