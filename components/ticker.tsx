export function Ticker({ cabanas = false }: { cabanas?: boolean }) {
  const items = cabanas
    ? [
        "SITIO PROPIO",
        "RESERVAS DIRECTAS",
        "BOOKING + AIRBNB",
        "SIN CUOTA MENSUAL",
      ]
    : ["ESTRATEGIA", "DISEÑO", "DESARROLLO", "CRECIMIENTO"];
  return (
    <div className="ticker" aria-label="Áreas de foco">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`}>
            {item}
            {i < items.length * 2 - 1 ? <b>✦</b> : null}
          </span>
        ))}
      </div>
    </div>
  );
}
