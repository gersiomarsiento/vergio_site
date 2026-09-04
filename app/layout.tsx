import type { Metadata } from "next";
import { DM_Sans, Manrope, Montserrat } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Vergio Digital — Ideas claras. Mejores resultados.",
  description: "Estrategia, diseño y desarrollo digital.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${dmSans.variable} ${manrope.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
