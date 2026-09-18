import { Reveal } from "@/components/reveal";
import Link from "next/link";

export default function ContactSection() {
  return (
    <Reveal className="section-shell">
      <section id="contact" className="special-gradient">
        <div className="p-30 max-w-360 justify-self-center w-full">
          <div className="eyebrow text-mint">¿TENÉS UN PROYECTO EN MENTE?</div>
          <h2 className="font-bebas text-[80px]! desktop:text-[120px]! leading-[84%]! text-white">
            CREEMOS JUNTOS <br />
            <span className="text-mint">ALGO QUE VALGA LA PENA</span>
          </h2>
          <Link className={`button button-mint mt-10`} href="">
            Escribinos por WhatsApp <span>→</span>
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
