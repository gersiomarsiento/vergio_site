import { Reveal } from "@/components/reveal";
import Link from "next/link";

export default function ContactSection() {
  return (
    <Reveal className="section-shell">
      <section id="contact" className="special-gradient">
        <div className="p-3 lg:p-30 max-w-360 mx-auto justify-self-center w-full">
          <div className="eyebrow text-mint">¿TENÉS UN PROYECTO EN MENTE?</div>
          <h2 className="title-large text-white">
            CREEMOS JUNTOS <br />
            <span className="text-mint">ALGO QUE VALGA LA PENA</span>
          </h2>
          <Link
            className={`button button-large button-mint mt-10 border-none`}
            href="https://wa.me/+59898899654?text=¡Hola! Me interesa saber más sobre los servicios que ofrecen."
          >
            Escribinos por WhatsApp <span>→</span>
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
