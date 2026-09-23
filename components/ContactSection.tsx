import { Reveal } from "@/components/reveal";
import Link from "next/link";
import ArrowSmall from "./icons/ArrowSmall";

export default function ContactSection() {
  return (
    <Reveal className="section-shell">
      <section id="contact" className="special-gradient">
        <div className="px-3 py-6 lg:p-30 max-w-xl lg:max-w-360 mx-auto justify-self-center w-full">
          <div className="eyebrow text-mint">¿TENÉS UN PROYECTO EN MENTE?</div>
          <h2 className="title-large text-white">
            CREEMOS JUNTOS <br />
            <span className="text-mint">ALGO QUE VALGA LA PENA</span>
          </h2>
          <Link
            className={`button button-large button-mint mt-4 lg:mt-10 border-none`}
            href="https://wa.me/+59898899654?text=¡Hola! Me interesa saber más sobre los servicios que ofrecen."
          >
            Escribinos por WhatsApp
            <span>
              <ArrowSmall className="rotate-270" />
            </span>
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
