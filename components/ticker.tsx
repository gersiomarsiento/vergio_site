export function Ticker({ cabanas = false }: { cabanas?: boolean }) {
  const items = cabanas
    ? [
        "SITIO PROPIO",
        "IDENTIDAD PROFESIONAL",
        "ADMINISTRACIÓN ROBUSTA",
        "RESERVAS DIRECTAS",
        "BOOKING + AIRBNB",
        "SIN CUOTA MENSUAL",
      ]
    : [
        "ESTRATEGIA",
        "DISEÑO",
        "DESARROLLO",
        "PROYECTOS DIGITALES",
        "APLICACIONES",
        "WEB",
        "RESPONSIVE DESIGN",
        "CRECIMIENTO",
      ];

  return (
    <div
      className=" overflow-hidden border-y border-(--line) bg-(--mint) text-(--purple)"
      aria-label="Áreas de foco"
    >
      <div className="flex w-max animate-ticker items-center gap-7 py-3 lg:py-[23px] font-montserrat text-base/none font-bold tracking-[8%]">
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`}>
            {item}
            {i < items.length * 2 - 1 ? <b className="pl-6.5">✦</b> : null}
          </span>
        ))}
      </div>
    </div>
  );
}
