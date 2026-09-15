import { Reveal } from "@/components/reveal";
import Link from "next/link";

export default function ContactSection() {
  return (
    <Reveal className="section-shell">
      <section id="about" className="p-30 special-gradient">
        <div className="">
          <div className="eyebrow text-mint">¿TENÉS UN PROYECTO EN MENTE?</div>
          <h2 className="font-bebas text-[80px]! desktop:text-[130px]! leading-[84%]! text-white">
            CREEMOS ALGO <br />
            <span className="text-mint">QUE VALGA LA PENA</span>
          </h2>
          <Link className={`button button-mint mt-10`} href="">
            Escribinos por WhatsApp <span>→</span>
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
