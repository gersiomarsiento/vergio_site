export function HeroArt({ cabanas = false }: { cabanas?: boolean }) {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="hero-card card-a bg-white">
        <span>01</span>
        <strong>{cabanas ? "Sitio propio" : "Pensar"}</strong>
      </div>
      <div className="hero-card card-b bg-mint-200">
        <span>02</span>
        <strong>{cabanas ? "Reserva" : "Crear"}</strong>
      </div>
      <div className="hero-card card-c bg-purple-900 text-white">
        <span>03</span>
        <strong>{cabanas ? "Más margen" : "Crecer"}</strong>
      </div>
    </div>
  );
}
