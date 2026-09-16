"use client";

import Link from "next/link";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useState } from "react";

import "swiper/css";

import SliderArrow from "./icons/SliderArrow";

const slides = [
  {
    eyebrow: "ESTRATEGIA · DISEÑO · SOLUCIONES DIGITALES",
    title: (
      <>
        Soluciones creativas
        <br />
        <span> a problemas reales.</span>
      </>
    ),
    text: "Creamos soluciones a medida para empresas y emprendimientos que buscan mejorar su presencia online y obtener mejores resultados.",
    image: "/images/hero-image.png",
    primaryCta: { label: "Empezar tu proyecto", href: "#contact" },
    secondaryCta: { label: "Descubrí nuestro trabajo", href: "#work" },
    style: "default",
  },
  {
    eyebrow: "ALOJAMIENTOS Y COMPLEJOS TURÍSTICOS",
    title: (
      <>
        Un producto digital
        <br />
        <span className="text-mint-400!"> especializado para turismo.</span>
      </>
    ),
    text: "Tras años de experiencia trabajando en turismo, desarrollamos un producto diseñado para ayudarte a hacer crecer tu negocio sin pagar comisiones.",
    image: "/images/hero-image-2.png",
    primaryCta: { label: "Conocé nuestro producto", href: "#work" },
    secondaryCta: { label: "Contactanos", href: "#about" },
    style: "alternate",
  },
];

function SlideButton({
  direction,
  disabled,
}: {
  direction: "prev" | "next";
  disabled: boolean;
}) {
  const swiper = useSwiper();

  const isNext = direction === "next";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => (isNext ? swiper.slideNext() : swiper.slidePrev())}
      aria-label={isNext ? "Siguiente slide" : "Slide anterior"}
      className={`absolute top-1/2 -translate-y-1/2 z-10 button-transparent transition ${isNext ? "right-2" : "left-2"} ${disabled ? "opacity-10 cursor-not-allowed" : ""} `}
    >
      <SliderArrow className={`text-gray ${!isNext ? "rotate-180" : ""}`} />
    </button>
  );
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <main id="top">
      <section className="section-shell p-0!">
        <div className="hero max-w-360 h-[calc(100dvh-80px)] justify-self-center relative">
          <Swiper
            modules={[Autoplay]}
            fadeEffect={{ crossFade: true }}
            grabCursor
            simulateTouch
            speed={600}
            autoplay={{ delay: 6000, disableOnInteraction: true }}
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="w-full h-full"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i} className="px-29 py-4 h-full content-center">
                <div
                  className={`hero flex ${slide.style == "default" ? "flex-row" : "flex-row-reverse"} max-w-360 justify-self-center`}
                >
                  <div className="hero-copy">
                    <p className={`eyebrow ${slide.style == "default" ? "text-purple" : "text-mint-400!"}`}>{slide.eyebrow}</p>
                    <h1 className="uppercase font-bebas text-[80px] desktop:text-[120px] leading-[84%]">
                      {slide.title}
                    </h1>
                    <p className="hero-text max-w-150 text-gray">{slide.text}</p>
                    <div className="hero-actions">
                      <Link
                        className={`button ${slide.style == "default" ? "button-large" : "button-mint"}`}
                        href={slide.primaryCta.href}
                      >
                        {slide.primaryCta.label} <span>↗</span>
                      </Link>
                      <Link
                        className="button button-transparent text-black! border border-gray"
                        href={slide.secondaryCta.href}
                      >
                        {slide.secondaryCta.label} <span>↓</span>
                      </Link>
                    </div>
                  </div>
                  <img
                    src={slide.image}
                    alt="hero image"
                    className="w-1/2 max-w-150"
                    draggable={false}
                  />
                </div>
              </SwiperSlide>
            ))}
            {/* Navigation */}
            <SlideButton direction="prev" disabled={isBeginning} />
            <SlideButton direction="next" disabled={isEnd} />
          </Swiper>

          {/* Pagination */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex ? "w-4 bg-mint" : "w-2 bg-gray"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
