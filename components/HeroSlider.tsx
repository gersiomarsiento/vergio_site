"use client";

import Link from "next/link";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import { HeroArt } from "./HeroArt";

import "swiper/css";

import SliderArrow from "./icons/SliderArrow";
import ArrowSmall from "./icons/ArrowSmall";

const slides = [
  {
    eyebrow: "ESTRATEGIA · DISEÑO · SOLUCIONES DIGITALES",
    title: (
      <>
        Soluciones creativas
        <br />
        <span className="text-purple"> a problemas reales.</span>
      </>
    ),
    text: "Creamos soluciones a medida para empresas y emprendimientos que buscan mejorar su presencia online y obtener mejores resultados.",
    text_mobile: "Mayor presencia online, mejores resultados.",
    image: "/images/hero-image.png",
    primaryCta: { label: "Empezar tu proyecto", href: "#contact" },
    secondaryCta: { label: "Descubrí nuestro trabajo", href: "#work" },
    style: "default",
  },
  {
    eyebrow: "ALOJAMIENTOS Y COMPLEJOS TURÍSTICOS",
    title: (
      <>
        Tu cabaña,
        <br />
        <span className="text-mint-400!"> tus reservas.</span>
      </>
    ),
    text: "Tras años de experiencia trabajando en turismo, desarrollamos un producto diseñado para ayudarte a hacer crecer tu negocio sin pagar comisiones.",
    text_mobile: "Menos comisiones, más margen para crecer.",
    image: "/images/hero-image-2.webp",
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
      <SliderArrow
        className={`text-gray hidden lg:block ${!isNext ? "rotate-180" : ""}`}
      />
    </button>
  );
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="section-shell p-0!">
      <div className="hero max-w-xl lg:max-w-360 mx-auto min-h-[calc(100dvh-50px)] lg:min-h-[calc(100dvh-80px)] justify-self-center content-center relative">
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
          className="w-full h-full items-center"
        >
          {slides.map((slide, i) => (
            <SwiperSlide
              key={i}
              className="px-3 lg:px-29 py-4 h-full content-center self-center"
            >
              <div
                className={`hero flex gap-5 flex-col-reverse ${slide.style == "default" ? "lg:flex-row" : "lg:flex-row-reverse"} max-w-xl lg:max-w-360 justify-self-center`}
              >
                <div className="hero-copy w-full lg:w-1/2">
                  <p
                    className={`eyebrow ${slide.style == "default" ? "text-purple" : "text-mint-400!"}`}
                  >
                    {slide.eyebrow}
                  </p>
                  <h1 className="title-large">{slide.title}</h1>
                  <p className="hero-text max-w-150 text-gray hidden lg:block">
                    {slide.text}
                  </p>
                  <p className="hero-text max-w-150 text-gray lg:hidden block">
                    {slide.text_mobile}
                  </p>
                  <div className="hero-actions">
                    <Link
                      className={`button button-large w-full sm:w-auto ${slide.style == "default" ? "button-purple" : "button-mint"}`}
                      href={slide.primaryCta.href}
                    >
                      {slide.primaryCta.label}{" "}
                      <span>
                        <ArrowSmall className="rotate-225" />
                      </span>
                    </Link>
                    <Link
                      className="button button-large w-full sm:w-auto button-transparent border border-gray"
                      href={slide.secondaryCta.href}
                    >
                      {slide.secondaryCta.label}{" "}
                      <span>
                        <ArrowSmall />
                      </span>
                    </Link>
                  </div>
                </div>
                {i !== 0 && (
                  <img
                    src={slide.image}
                    alt="hero image"
                    fetchPriority="high"
                    className="aspect-square object-contain [--art:min(80vw,400px)] sm:[--art:min(60vw,400px)] lg:[--art:min(40vw,600px)] w-(--art)"
                    draggable={false}
                  />
                )}
                {i === 0 && <HeroArt />}
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
  );
}
